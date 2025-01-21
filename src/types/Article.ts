export interface Article {
  id?: string;
  title: string;
  content: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
  readTime: number;
  published: boolean;
  imageUrl?: string;
  category: string;
  searchTokens?: string[];
}
