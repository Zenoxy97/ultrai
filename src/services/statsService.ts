import { supabase } from '@/lib/supabase';

export interface ArticleStats {
  id: string;
  title: string;
  views: number;
  unique_visitors: number;
  device_stats: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  shares: {
    facebook: number;
    twitter: number;
    linkedin: number;
    email: number;
  };
  article_id: string;
  created_at: string;
  updated_at: string;
}

export interface DailyStats {
  date: string;
  views: number;
  unique_visitors: number;
  device_stats: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  shares: {
    facebook: number;
    twitter: number;
    linkedin: number;
    email: number;
  };
}

class StatsService {
  private readonly table = 'article_stats';

  async getArticleStats(articleId: string): Promise<ArticleStats> {
    const { data, error } = await supabase
      .from(this.table)
      .select(`
        *,
        articles!article_id (
          id,
          title
        )
      `)
      .eq('article_id', articleId)
      .single();

    if (error) throw error;

    return {
      id: data.id,
      title: data.articles.title,
      views: data.views,
      unique_visitors: data.unique_visitors,
      device_stats: data.device_stats,
      shares: data.shares,
      article_id: data.article_id,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };
  }

  async getDailyStats(articleId: string): Promise<DailyStats[]> {
    const { data, error } = await supabase
      .from('daily_stats')
      .select('*')
      .eq('article_id', articleId)
      .order('date', { ascending: true });

    if (error) throw error;
    return data;
  }

  async incrementView(articleId: string, deviceType: 'mobile' | 'desktop' | 'tablet'): Promise<void> {
    const { error } = await supabase.rpc('increment_article_view', {
      article_id: articleId,
      device_type: deviceType,
    });

    if (error) throw error;
  }

  async incrementShare(articleId: string, platform: keyof ArticleStats['shares']): Promise<void> {
    const { error } = await supabase.rpc('increment_article_share', {
      article_id: articleId,
      platform,
    });

    if (error) throw error;
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
}

export const statsService = new StatsService();
