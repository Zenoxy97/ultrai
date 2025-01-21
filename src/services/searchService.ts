import { 
  collection,
  query as firestoreQuery,
  limit as firestoreLimit,
  startAfter,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  where,
  orderBy
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Article } from '../types/Article';

export interface SearchFilters {
  category?: string;
  tags?: string[];
  author?: string;
  startDate?: Date;
  endDate?: Date;
  status?: 'draft' | 'published';
}

export interface SearchResults {
  articles: Article[];
  hasMore: boolean;
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}

export interface SearchStats {
  totalResults: number;
  searchTime: number;
  categories: { [key: string]: number };
  tags: { [key: string]: number };
}

export const searchService = {
  async searchArticles(searchQuery: string, filters: SearchFilters = {}, pageSize: number = 10, lastDoc: QueryDocumentSnapshot<DocumentData> | null = null): Promise<SearchResults> {
    const articlesRef = collection(db, 'articles');
    let q = firestoreQuery(articlesRef, where('published', '==', true));

    if (searchQuery) {
      q = firestoreQuery(q, where('searchTokens', 'array-contains', searchQuery.toLowerCase()));
    }

    if (filters.category) {
      q = firestoreQuery(q, where('category', '==', filters.category));
    }

    if (filters.tags && filters.tags.length > 0) {
      q = firestoreQuery(q, where('tags', 'array-contains-any', filters.tags));
    }

    if (filters.author) {
      q = firestoreQuery(q, where('author', '==', filters.author));
    }

    q = firestoreQuery(q, orderBy('date', 'desc'));
    q = firestoreQuery(q, firestoreLimit(pageSize + 1));

    if (lastDoc) {
      q = firestoreQuery(q, startAfter(lastDoc));
    }

    const snapshot = await getDocs(q);
    const docs = snapshot.docs;
    const hasMore = docs.length > pageSize;
    const lastVisible = hasMore ? docs[docs.length - 2] : null;
    
    const articles = docs.slice(0, pageSize).map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Article));

    return {
      articles,
      hasMore,
      lastDoc: lastVisible
    };
  },

  async getSuggestions(searchQuery: string, limit: number = 5): Promise<string[]> {
    const articlesRef = collection(db, 'articles');
    const q = firestoreQuery(
      articlesRef,
      where('published', '==', true),
      where('searchTokens', 'array-contains', searchQuery.toLowerCase()),
      orderBy('title'),
      firestoreLimit(limit)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data().title);
  },

  highlightSearchTerms(text: string, query: string): string {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
};
