export type ArticleStatus = 'draft' | 'published';

export interface ArticleInput {
  title: string;
  content: string;
  status: ArticleStatus;
  excerpt?: string;
  cover_image?: string;
  tags?: string[];
  category?: string;
  author_id?: string;
  meta_title?: string;
  meta_description?: string;
  published_at?: string | null;
}

export interface Article extends ArticleInput {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  description?: string;
  views?: number;
  uniqueVisitors?: number;
  deviceStats?: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  shares?: {
    facebook: number;
    twitter: number;
    linkedin: number;
    email: number;
  };
  categories: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  likes?: number;
  comments_count?: number;
}
