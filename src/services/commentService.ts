import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  writeBatch,
  increment as firestoreIncrement,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Comment {
  id?: string;
  articleId: string;
  parentId?: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export const commentService = {
  // Récupérer les commentaires d'un article
  async getComments(articleId: string, status?: string): Promise<Comment[]> {
    const commentsRef = collection(db, 'comments');
    const constraints: any[] = [
      where('articleId', '==', articleId),
      orderBy('createdAt', 'desc')
    ];

    if (status) {
      constraints.push(where('status', '==', status));
    }

    const q = query(commentsRef, ...constraints);
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: (doc.data().createdAt as Timestamp).toDate(),
      updatedAt: (doc.data().updatedAt as Timestamp).toDate()
    })) as Comment[];
  },

  // Créer un nouveau commentaire
  async createComment(comment: Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'likes'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'comments'), {
      ...comment,
      likes: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },

  // Mettre à jour un commentaire
  async updateComment(id: string, data: Partial<Comment>): Promise<void> {
    const docRef = doc(db, 'comments', id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  },

  // Supprimer un commentaire
  async deleteComment(id: string): Promise<void> {
    // Supprimer aussi les réponses à ce commentaire
    const repliesRef = collection(db, 'comments');
    const q = query(repliesRef, where('parentId', '==', id));
    const snapshot = await getDocs(q);
    
    const batch = writeBatch(db);
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    const commentRef = doc(db, 'comments', id);
    batch.delete(commentRef);
    
    await batch.commit();
  },

  // Modérer un commentaire
  async moderateComment(id: string, status: 'approved' | 'rejected'): Promise<void> {
    await this.updateComment(id, { status });
  },

  // Liker un commentaire
  async likeComment(id: string): Promise<void> {
    const batch = writeBatch(db);
    const commentRef = doc(db, 'comments', id);
    
    batch.update(commentRef, {
      likes: firestoreIncrement(1)
    });

    await batch.commit();
  },

  // Récupérer les commentaires en attente de modération
  async getPendingComments(): Promise<Comment[]> {
    return this.getComments('', 'pending');
  },

  // Formater la date relative
  formatRelativeDate(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) {
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else if (days > 0) {
      return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return 'à l\'instant';
    }
  }
};
