import { supabase } from '@/lib/supabase';
import { Article } from '@/types/Article';

export interface SearchFilters {
  categories?: string[];
  tags?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  status?: 'draft' | 'published';
  category?: string;
  author?: string;
}

export interface SearchResults {
  articles: Article[];
  total: number;
  hasMore: boolean;
  lastDoc?: number;
}

class SearchService {
  private readonly table = 'articles';

  async searchArticles(
    query: string,
    filters?: SearchFilters,
    limit: number = 10,
    startAfter?: number
  ): Promise<SearchResults> {
    let dbQuery = supabase
      .from(this.table)
      .select('*', { count: 'exact' });

    // Appliquer la recherche textuelle
    if (query) {
      dbQuery = dbQuery.textSearch('title', query, {
        type: 'websearch',
        config: 'french'
      });
    }

    // Appliquer les filtres
    if (filters) {
      if (filters.categories?.length) {
        dbQuery = dbQuery.contains('categories', filters.categories);
      }
      if (filters.category) {
        dbQuery = dbQuery.eq('category', filters.category);
      }
      if (filters.author) {
        dbQuery = dbQuery.eq('author_id', filters.author);
      }
      if (filters.tags?.length) {
        dbQuery = dbQuery.contains('tags', filters.tags);
      }
      if (filters.dateRange) {
        dbQuery = dbQuery
          .gte('created_at', filters.dateRange.start)
          .lte('created_at', filters.dateRange.end);
      }
      if (filters.status) {
        dbQuery = dbQuery.eq('status', filters.status);
      }
    }

    // Pagination
    if (startAfter) {
      dbQuery = dbQuery.gt('id', startAfter);
    }
    dbQuery = dbQuery.limit(limit);

    const { data, error, count } = await dbQuery;

    if (error) throw error;

    return {
      articles: data || [],
      total: count || 0,
      hasMore: (data?.length || 0) === limit,
      lastDoc: data?.length ? data[data.length - 1].id : undefined
    };
  }

  async getSuggestions(query: string): Promise<string[]> {
    if (!query) return [];

    const { data, error } = await supabase
      .from(this.table)
      .select('title')
      .textSearch('title', query, {
        type: 'websearch',
        config: 'french'
      })
      .limit(5);

    if (error) throw error;

    return data.map(article => article.title);
  }

  highlightSearchTerm(text: string, term: string): string {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  highlightSearchTerms(text: string, query: string): string {
    if (!query.trim() || !text) return text;

    const terms = query.toLowerCase().split(/\s+/);
    let highlightedText = text;

    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });

    return highlightedText;
  }
}

export const searchService = new SearchService();
