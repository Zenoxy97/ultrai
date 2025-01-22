import { supabase } from '@/lib/supabase';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

export interface Comment {
  id: string;
  content: string;
  article_id: string;
  user_id: string;
  parent_id?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
  likes: number;
  author: {
    name: string;
    email?: string;
    avatar?: string;
  };
}

class CommentService {
  private readonly table = 'comments';

  async getComments(articleId: string, status?: Comment['status']): Promise<Comment[]> {
    let query = supabase
      .from(this.table)
      .select(`
        *,
        author:users!user_id (
          name,
          email,
          avatar_url
        )
      `)
      .eq('article_id', articleId)
      .order('created_at', { ascending: true });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data.map(this.mapComment);
  }

  async getPendingComments(): Promise<Comment[]> {
    const { data, error } = await supabase
      .from(this.table)
      .select(`
        *,
        author:users!user_id (
          name,
          email,
          avatar_url
        )
      `)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.map(this.mapComment);
  }

  async createComment(comment: Omit<Comment, 'id' | 'created_at' | 'updated_at' | 'status' | 'likes' | 'author'>): Promise<Comment> {
    const now = new Date().toISOString();
    
    const { data, error } = await supabase
      .from(this.table)
      .insert([{
        ...comment,
        status: 'pending',
        likes: 0,
        created_at: now,
        updated_at: now
      }])
      .select(`
        *,
        author:users!user_id (
          name,
          email,
          avatar_url
        )
      `)
      .single();

    if (error) throw error;
    return this.mapComment(data);
  }

  async moderateComment(id: string, status: Comment['status']): Promise<Comment> {
    const { data, error } = await supabase
      .from(this.table)
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select(`
        *,
        author:users!user_id (
          name,
          email,
          avatar_url
        )
      `)
      .single();

    if (error) throw error;
    return this.mapComment(data);
  }

  async likeComment(id: string): Promise<Comment> {
    const { data, error } = await supabase.rpc('increment_comment_likes', { comment_id: id });

    if (error) throw error;
    return this.mapComment(data);
  }

  async deleteComment(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  formatRelativeDate(date: string): string {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
  }

  private mapComment(data: any): Comment {
    return {
      ...data,
      author: {
        name: data.author?.name || 'Anonyme',
        email: data.author?.email,
        avatar: data.author?.avatar_url,
      }
    };
  }
}

export const commentService = new CommentService();
