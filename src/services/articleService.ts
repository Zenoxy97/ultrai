import { supabase } from '@/lib/supabase';
import { Article, ArticleInput } from '@/types/Article';

class ArticleService {
  private readonly table = 'articles';

  public generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  async getArticles(options?: {
    status?: 'draft' | 'published';
    limit?: number;
    offset?: number;
  }): Promise<Article[]> {
    let query = supabase
      .from(this.table)
      .select('*')
      .order('created_at', { ascending: false });

    if (options?.status) {
      query = query.eq('status', options.status);
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as Article[];
  }

  async getPublishedArticles(): Promise<Article[]> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    return data as Article[];
  }

  async getArticle(id: string): Promise<Article> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Article;
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data as Article;
  }

  async createArticle(articleInput: ArticleInput): Promise<Article> {
    const now = new Date().toISOString();

    const article = {
      ...articleInput,
      slug: this.generateSlug(articleInput.title),
      created_at: now,
      updated_at: now,
      published_at: articleInput.status === 'published' ? now : null,
    };

    const { data, error } = await supabase
      .from(this.table)
      .insert([article])
      .select()
      .single();

    if (error) throw error;
    return data as Article;
  }

  async updateArticle(id: string, articleInput: Partial<ArticleInput>): Promise<Article> {
    const updates: any = {
      ...articleInput,
      updated_at: new Date().toISOString(),
    };

    if (articleInput.title) {
      updates.slug = this.generateSlug(articleInput.title);
    }

    if (articleInput.status === 'published') {
      updates.published_at = new Date().toISOString();
    } else if (articleInput.status === 'draft') {
      updates.published_at = null;
    }

    const { data, error } = await supabase
      .from(this.table)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Article;
  }

  async deleteArticle(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  async publishArticle(id: string): Promise<Article> {
    const { data, error } = await supabase
      .from(this.table)
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Article;
  }

  async unpublishArticle(id: string): Promise<Article> {
    const { data, error } = await supabase
      .from(this.table)
      .update({
        status: 'draft',
        published_at: null,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Article;
  }

  async uploadImage(file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `article-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('public')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from('public').getPublicUrl(filePath);
    return data.publicUrl;
  }

  async deleteImage(path: string): Promise<void> {
    const imagePath = path.split('/').pop() || '';
    const { error } = await supabase.storage
      .from('public')
      .remove([`article-images/${imagePath}`]);
    
    if (error) throw error;
  }
}

export const articleService = new ArticleService();
