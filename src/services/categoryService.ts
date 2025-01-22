import { supabase } from '@/lib/supabase';
import { slugify } from '@/lib/utils';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  color: string;
  created_at: string;
  updated_at: string;
}

interface ColorClass {
  bg: string;
  text: string;
  border: string;
}

class CategoryService {
  private readonly table = 'categories';
  private readonly colors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'orange', 'gray'];

  async getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .order('name');

    if (error) throw error;
    return data;
  }

  async getCategory(id: string): Promise<Category> {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async createCategory(category: Omit<Category, 'id' | 'created_at' | 'updated_at' | 'slug'>): Promise<Category> {
    const now = new Date().toISOString();
    const slug = this.generateSlug(category.name);

    const { data, error } = await supabase
      .from(this.table)
      .insert([{
        ...category,
        slug,
        created_at: now,
        updated_at: now,
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async updateCategory(id: string, category: Partial<Omit<Category, 'id' | 'created_at' | 'updated_at' | 'slug'>>): Promise<Category> {
    const updates: any = {
      ...category,
      updated_at: new Date().toISOString(),
    };

    if (category.name) {
      updates.slug = this.generateSlug(category.name);
    }

    const { data, error } = await supabase
      .from(this.table)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async deleteCategory(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  generateSlug(name: string): string {
    return slugify(name);
  }

  generateColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getColorClass(color: string): ColorClass {
    const colorMap: Record<string, ColorClass> = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-300'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-300'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        border: 'border-red-300'
      },
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border-yellow-300'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        border: 'border-purple-300'
      },
      pink: {
        bg: 'bg-pink-100',
        text: 'text-pink-800',
        border: 'border-pink-300'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        border: 'border-orange-300'
      },
      gray: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        border: 'border-gray-300'
      },
    };

    return colorMap[color] || colorMap.blue;
  }
}

export const categoryService = new CategoryService();
