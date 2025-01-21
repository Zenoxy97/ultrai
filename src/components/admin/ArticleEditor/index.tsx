import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Article } from '@/types/Article';
import { supabase } from '@/config/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Editor from './Editor';
import ImageUpload from './ImageUpload';
import TagInput from './TagInput';
import slugify from 'slugify';

interface ArticleEditorProps {
  article?: Article;
  onSuccess?: () => void;
}

export default function ArticleEditor({ article, onSuccess }: ArticleEditorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, watch, setValue } = useForm<Article>({
    defaultValues: article || {
      title: '',
      content: '',
      excerpt: '',
      status: 'draft',
      categories: [],
      tags: [],
      author: { name: 'Admin' },
    },
  });

  const handleImageUpload = async (file: File): Promise<string> => {
    const filename = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('articles')
      .upload(filename, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('articles')
      .getPublicUrl(data.path);

    return publicUrl;
  };

  const onSubmit = async (data: Article) => {
    try {
      setIsLoading(true);

      // Générer le slug à partir du titre
      const slug = slugify(data.title, { lower: true, strict: true });

      // Préparer les données de l'article
      const articleData = {
        ...data,
        slug,
        updated_at: new Date().toISOString(),
        published_at: data.status === 'published' ? new Date().toISOString() : null,
      };

      if (article?.id) {
        // Mise à jour
        const { error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('id', article.id);

        if (error) throw error;
      } else {
        // Création
        const { error } = await supabase
          .from('articles')
          .insert([articleData]);

        if (error) throw error;
      }

      toast({
        title: 'Succès',
        description: `Article ${article ? 'modifié' : 'créé'} avec succès.`,
      });

      onSuccess?.();
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de sauvegarder l\'article.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Titre</label>
        <Input
          {...register('title', { required: true })}
          className="mt-1"
          placeholder="Titre de l'article"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image de couverture
        </label>
        <ImageUpload
          currentImage={watch('cover_image')}
          onUpload={async (file) => {
            try {
              const url = await handleImageUpload(file);
              setValue('cover_image', url);
            } catch (error) {
              console.error('Error uploading image:', error);
              toast({
                title: 'Erreur',
                description: 'Impossible de télécharger l\'image.',
                variant: 'destructive',
              });
            }
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Extrait</label>
        <Textarea
          {...register('excerpt')}
          className="mt-1"
          placeholder="Bref résumé de l'article"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contenu</label>
        <Editor
          content={watch('content')}
          onChange={(content) => setValue('content', content)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Catégories
          </label>
          <TagInput
            value={watch('categories') || []}
            onChange={(categories) => setValue('categories', categories)}
            placeholder="Ajouter une catégorie"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <TagInput
            value={watch('tags') || []}
            onChange={(tags) => setValue('tags', tags)}
            placeholder="Ajouter un tag"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="submit"
          disabled={isLoading}
          variant="outline"
          onClick={() => setValue('status', 'draft')}
        >
          Enregistrer comme brouillon
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setValue('status', 'published')}
        >
          {isLoading ? 'Publication...' : 'Publier'}
        </Button>
      </div>
    </form>
  );
}
