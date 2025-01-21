import { collection, query, where, orderBy, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';

export interface Article {
  id?: string;
  title: string;
  content: string;
  slug: string;
  imageUrl?: string;
  published: boolean;
  date: Date;
  tags: string[];
  category: string;
}

export const articleService = {
  // Récupérer tous les articles publiés
  async getPublishedArticles(): Promise<Article[]> {
    const q = query(
      collection(db, 'articles'),
      where('published', '==', true),
      orderBy('date', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Article));
  },

  // Récupérer tous les articles (publiés et brouillons) pour l'admin
  async getAllArticles(): Promise<Article[]> {
    const q = query(
      collection(db, 'articles'),
      orderBy('date', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Article));
  },

  // Récupérer un article par son id
  async getArticle(id: string): Promise<Article | null> {
    const docRef = doc(db, 'articles', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Article;
    }
    return null;
  },

  // Créer un nouvel article
  async createArticle(article: Omit<Article, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'articles'), {
      ...article,
      date: new Date()
    });
    return docRef.id;
  },

  // Mettre à jour un article
  async updateArticle(id: string, article: Partial<Article>): Promise<void> {
    const docRef = doc(db, 'articles', id);
    await updateDoc(docRef, article);
  },

  // Supprimer un article
  async deleteArticle(id: string): Promise<void> {
    const docRef = doc(db, 'articles', id);
    await deleteDoc(docRef);
  },

  // Upload une image
  async uploadImage(file: File, path: string): Promise<string> {
    const storageRef = ref(storage, `articles/${path}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  },

  // Supprimer une image
  async deleteImage(path: string): Promise<void> {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  },

  // Générer un slug unique
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
};
