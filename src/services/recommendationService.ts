import { supabase } from '@/lib/supabase';
import { Article } from '@/types/Article';
import { articleService } from './articleService';

export interface RecommendationResult {
  article: Article;
  score: number;
  reason: string;
  explanation: string;
}

class RecommendationService {
  private readonly table = 'articles';

  async getRelatedArticles(articleId: string, limit: number = 5): Promise<RecommendationResult[]> {
    const article = await articleService.getArticle(articleId);
    if (!article) throw new Error('Article not found');

    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .neq('id', articleId)
      .eq('status', 'published')
      .limit(limit);

    if (error) throw error;

    const results: RecommendationResult[] = [];
    const articles = data as Article[];

    for (const relatedArticle of articles) {
      const score = this.calculateSimilarityScore(article, relatedArticle);
      if (score > 0) {
        const reason = this.getRecommendationReason(article, relatedArticle);
        results.push({
          article: relatedArticle,
          score,
          reason,
          explanation: reason
        });
      }
    }

    return results.sort((a, b) => b.score - a.score);
  }

  async getPopularArticles(limit: number = 5): Promise<RecommendationResult[]> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('status', 'published')
      .order('views', { ascending: false })
      .limit(limit);

    if (error) throw error;

    return (data as Article[]).map(article => ({
      article,
      score: article.views || 0,
      reason: 'Article populaire',
      explanation: 'Cet article est très populaire auprès de nos lecteurs'
    }));
  }

  async getCombinedRecommendations(articleId: string, limit: number = 5): Promise<RecommendationResult[]> {
    const [related, popular] = await Promise.all([
      this.getRelatedArticles(articleId, limit),
      this.getPopularArticles(limit),
    ]);

    const combined = [...related];
    for (const pop of popular) {
      if (!combined.some(rec => rec.article.id === pop.article.id)) {
        combined.push(pop);
      }
    }

    return combined
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  private calculateSimilarityScore(article1: Article, article2: Article): number {
    let score = 0;

    // Score basé sur les catégories communes
    const commonCategories = article1.categories?.filter(cat => 
      article2.categories?.includes(cat)
    );
    if (commonCategories?.length) {
      score += commonCategories.length * 2;
    }

    // Score basé sur les tags communs
    const commonTags = article1.tags?.filter(tag => 
      article2.tags?.includes(tag)
    );
    if (commonTags?.length) {
      score += commonTags.length * 1.5;
    }

    return score;
  }

  private getRecommendationReason(article1: Article, article2: Article): string {
    const commonCategories = article1.categories?.filter(cat => 
      article2.categories?.includes(cat)
    );
    if (commonCategories?.length) {
      return `Dans la même catégorie : ${commonCategories[0]}`;
    }

    const commonTags = article1.tags?.filter(tag => 
      article2.tags?.includes(tag)
    );
    if (commonTags?.length) {
      return `Tag commun : ${commonTags[0]}`;
    }

    return 'Article similaire';
  }
}

export const recommendationService = new RecommendationService();
