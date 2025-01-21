import { 
  collection,
  query,
  where,
  orderBy,
  getDocs,
  writeBatch,
  limit as firestoreLimit,
  Timestamp,
  doc,
  setDoc,
  getDoc,
  increment as firestoreIncrement,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ArticleStats {
  id?: string;
  articleId: string;
  views: number;
  uniqueVisitors: number;
  readTime: number;
  shares: {
    facebook: number;
    twitter: number;
    linkedin: number;
    email: number;
  };
  engagement: {
    scrollDepth: number;
    timeOnPage: number;
    commentCount: number;
    likeCount: number;
  };
  deviceStats: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  referrers: { [key: string]: number };
  updatedAt: Date;
}

export interface DailyStats {
  date: string;
  views: number;
  uniqueVisitors: number;
  articleId: string;
}

export interface Stats {
  id: string;
  articleId: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  date: Date;
}

export const statsService = {
  // Enregistrer une vue d'article
  async recordView(articleId: string, data: {
    isUnique?: boolean;
    device: 'mobile' | 'desktop' | 'tablet';
    referrer?: string;
  }): Promise<void> {
    const statsRef = doc(db, 'articleStats', articleId);
    const dailyStatsRef = doc(db, 'dailyStats', `${articleId}_${this.getToday()}`);

    const batch = writeBatch(db);

    // Mise à jour des stats globales
    batch.set(statsRef, {
      articleId,
      views: firestoreIncrement(1),
      uniqueVisitors: firestoreIncrement(data.isUnique ? 1 : 0),
      [`deviceStats.${data.device}`]: firestoreIncrement(1),
      updatedAt: serverTimestamp()
    }, { merge: true });

    if (data.referrer) {
      batch.set(statsRef, {
        [`referrers.${data.referrer}`]: firestoreIncrement(1)
      }, { merge: true });
    }

    // Mise à jour des stats journalières
    batch.set(dailyStatsRef, {
      articleId,
      date: this.getToday(),
      views: firestoreIncrement(1),
      uniqueVisitors: firestoreIncrement(data.isUnique ? 1 : 0)
    }, { merge: true });

    await batch.commit();
  },

  // Enregistrer l'engagement
  async recordEngagement(articleId: string, data: {
    scrollDepth?: number;
    timeOnPage?: number;
  }): Promise<void> {
    const statsRef = doc(db, 'articleStats', articleId);
    await setDoc(statsRef, {
      engagement: {
        scrollDepth: data.scrollDepth,
        timeOnPage: data.timeOnPage
      },
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  // Enregistrer un partage
  async recordShare(articleId: string, platform: 'facebook' | 'twitter' | 'linkedin' | 'email'): Promise<void> {
    const statsRef = doc(db, 'articleStats', articleId);
    await setDoc(statsRef, {
      [`shares.${platform}`]: firestoreIncrement(1),
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  // Obtenir les statistiques d'un article
  async getArticleStats(articleId: string): Promise<ArticleStats | null> {
    const docRef = doc(db, 'articleStats', articleId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
      updatedAt: (docSnap.data().updatedAt as Timestamp).toDate()
    } as ArticleStats;
  },

  // Obtenir les statistiques journalières d'un article
  async getDailyStats(articleId: string, days: number = 30): Promise<DailyStats[]> {
    const startDate = this.getDateBefore(days);
    const statsRef = collection(db, 'dailyStats');
    const q = query(
      statsRef,
      where('articleId', '==', articleId),
      where('date', '>=', startDate),
      orderBy('date', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as DailyStats);
  },

  // Obtenir les articles les plus vus
  async getMostViewedArticles(limit: number = 10): Promise<ArticleStats[]> {
    const statsRef = collection(db, 'articleStats');
    const q = query(
      statsRef,
      orderBy('views', 'desc'),
      firestoreLimit(limit)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      updatedAt: (doc.data().updatedAt as Timestamp).toDate()
    })) as ArticleStats[];
  },

  // Obtenir les articles les plus engageants
  async getMostEngagingArticles(limit: number = 10): Promise<ArticleStats[]> {
    const statsRef = collection(db, 'articleStats');
    const q = query(
      statsRef,
      orderBy('engagement.timeOnPage', 'desc'),
      firestoreLimit(limit)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      updatedAt: (doc.data().updatedAt as Timestamp).toDate()
    })) as ArticleStats[];
  },

  // Obtenir les statistiques
  async getStats(startDate: Date, endDate: Date, maxResults: number = 10): Promise<Stats[]> {
    const statsRef = collection(db, 'stats');
    const q = query(
      statsRef,
      where('date', '>=', startDate),
      where('date', '<=', endDate),
      orderBy('date', 'desc'),
      firestoreLimit(maxResults)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: (doc.data().date as Timestamp).toDate()
    })) as Stats[];
  },

  // Mettre à jour les statistiques
  async updateStats(stats: Stats): Promise<void> {
    const batch = writeBatch(db);
    const statsRef = doc(db, 'stats', stats.id);
    batch.update(statsRef, {
      views: stats.views,
      likes: stats.likes,
      shares: stats.shares,
      comments: stats.comments,
      date: Timestamp.fromDate(stats.date)
    });
    await batch.commit();
  },

  // Utilitaires
  getToday(): string {
    return new Date().toISOString().split('T')[0];
  },

  getDateBefore(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
  },

  // Formater les nombres
  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  },

  // Formater le temps de lecture
  formatReadTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    if (minutes < 1) {
      return 'moins d\'une minute';
    }
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
};
