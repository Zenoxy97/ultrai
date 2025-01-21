export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  categories: string[];
  tags: string[];
  status: 'draft' | 'published';
  publishedAt: string;
  updatedAt: string;
  readingTime?: number;
  featured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}
