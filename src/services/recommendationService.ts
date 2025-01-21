import { 
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Article } from '../types/Article';

export interface RecommendationResult {
  article: Article;
  score: number;
  explanation: string;
}

export const recommendationService = {
  async getCombinedRecommendations(articleId: string): Promise<RecommendationResult[]> {
    try {
      const article = await this.getArticle(articleId);
      if (!article) return [];

      const recommendations = await this.getContentBasedRecommendations(article);
      return recommendations;
    } catch (error) {
      console.error('Error getting combined recommendations:', error);
      return [];
    }
  },

  async getContentBasedRecommendations(article: Article): Promise<RecommendationResult[]> {
    const articlesRef = collection(db, 'articles');
    const q = query(
      articlesRef,
      where('published', '==', true)
    );

    const snapshot = await getDocs(q);
    const recommendations: RecommendationResult[] = [];

    for (const doc of snapshot.docs) {
      const targetArticle = { id: doc.id, ...doc.data() } as Article;
      
      if (targetArticle.id === article.id) continue;

      const score = this.calculateSimilarity(article, targetArticle);
      if (score > 0) {
        recommendations.push({
          article: targetArticle,
          score,
          explanation: `Recommandé basé sur des sujets similaires`
        });
      }
    }

    return recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  },

  calculateSimilarity(article1: Article, article2: Article): number {
    let score = 0;

    // Comparaison des tags
    const commonTags = article1.tags.filter(tag => article2.tags.includes(tag));
    score += commonTags.length * 0.3;

    // Comparaison des catégories
    if (article1.category === article2.category) {
      score += 0.4;
    }

    return score;
  },

  async getArticle(id: string): Promise<Article | null> {
    const docRef = doc(db, 'articles', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Article;
    }
    return null;
  }
};
