import { collection, query, getDocs, addDoc, updateDoc, deleteDoc, doc, where } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  parentId?: string;
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

export const categoryService = {
  // Récupérer toutes les catégories
  async getCategories(): Promise<Category[]> {
    const q = query(collection(db, 'categories'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Category));
  },

  // Créer une nouvelle catégorie
  async createCategory(category: Omit<Category, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'categories'), {
      ...category,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  },

  // Mettre à jour une catégorie
  async updateCategory(id: string, category: Partial<Category>): Promise<void> {
    const docRef = doc(db, 'categories', id);
    await updateDoc(docRef, {
      ...category,
      updatedAt: new Date()
    });
  },

  // Supprimer une catégorie
  async deleteCategory(id: string): Promise<void> {
    // Vérifier si la catégorie est utilisée
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('category', '==', id));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      throw new Error('Cette catégorie est utilisée par des articles et ne peut pas être supprimée');
    }

    const docRef = doc(db, 'categories', id);
    await deleteDoc(docRef);
  },

  // Générer un slug unique
  generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  },

  // Générer une couleur aléatoire
  generateColor(): string {
    const colors = [
      'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'teal'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  // Obtenir la classe Tailwind pour une couleur
  getColorClass(color: string): { bg: string; text: string; border: string } {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-200'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        border: 'border-red-200'
      },
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border-yellow-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        border: 'border-purple-200'
      },
      pink: {
        bg: 'bg-pink-100',
        text: 'text-pink-800',
        border: 'border-pink-200'
      },
      indigo: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-800',
        border: 'border-indigo-200'
      },
      teal: {
        bg: 'bg-teal-100',
        text: 'text-teal-800',
        border: 'border-teal-200'
      }
    };

    return colorMap[color] || colorMap.blue;
  }
};
