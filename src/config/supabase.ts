import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour la base de données
export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image: string;
  author: {
    name: string;
    avatar?: string;
  };
  categories: string[];
  tags: string[];
  status: 'draft' | 'published';
  published_at: string;
  updated_at: string;
  reading_time?: number;
  featured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};
