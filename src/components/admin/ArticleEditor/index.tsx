import { useState } from 'react';
import { Article } from '@/types/Article';
import ArticleForm from './ArticleForm';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface ArticleEditorProps {
  article?: Article;
  onSuccess?: () => void;
}

export default function ArticleEditor({ article, onSuccess }: ArticleEditorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: Partial<Article>) => {
    try {
      setIsLoading(true);

      const articleData = {
        ...data,
        updatedAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
        publishedAt: data.status === 'published' 
          ? format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
          : null,
      };

      if (article?.id) {
        // Mise à jour d'un article existant
        await updateDoc(doc(db, 'articles', article.id), articleData);
        toast({
          title: 'Article mis à jour',
          description: 'L\'article a été mis à jour avec succès.',
        });
      } else {
        // Création d'un nouvel article
        await addDoc(collection(db, 'articles'), {
          ...articleData,
          createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
        });
        toast({
          title: 'Article créé',
          description: 'L\'article a été créé avec succès.',
        });
      }

      onSuccess?.();
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de l\'enregistrement.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {article ? 'Modifier l\'article' : 'Nouvel article'}
      </h1>
      <ArticleForm
        article={article}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
