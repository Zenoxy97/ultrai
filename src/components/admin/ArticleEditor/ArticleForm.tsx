import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Article } from '@/types/Article';
import Editor from './Editor';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from './ImageUpload';
import { TagInput } from './TagInput';
import { format } from 'date-fns';

interface ArticleFormProps {
  article?: Partial<Article>;
  onSubmit: (data: Partial<Article>) => Promise<void>;
}

export default function ArticleForm({ article, onSubmit }: ArticleFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<Partial<Article>>({
    defaultValues: {
      ...article,
      status: article?.status || 'draft',
      publishedAt: article?.publishedAt || format(new Date(), 'yyyy-MM-dd'),
    },
  });

  const handleFormSubmit = async (data: Partial<Article>) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Titre</Label>
        <Input
          id="title"
          {...register('title', { required: true })}
          placeholder="Titre de l'article"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Extrait</Label>
        <Textarea
          id="excerpt"
          {...register('excerpt', { required: true })}
          placeholder="Bref résumé de l'article"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label>Image de couverture</Label>
        <ImageUpload
          value={watch('coverImage')}
          onChange={(url) => setValue('coverImage', url)}
        />
      </div>

      <div className="space-y-2">
        <Label>Contenu</Label>
        <Editor
          content={watch('content') || ''}
          onChange={(content) => setValue('content', content)}
        />
      </div>

      <div className="space-y-2">
        <Label>Catégories</Label>
        <TagInput
          value={watch('categories') || []}
          onChange={(categories) => setValue('categories', categories)}
          placeholder="Ajouter une catégorie"
        />
      </div>

      <div className="space-y-2">
        <Label>Tags</Label>
        <TagInput
          value={watch('tags') || []}
          onChange={(tags) => setValue('tags', tags)}
          placeholder="Ajouter un tag"
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('status', 'published')}
          disabled={isSubmitting}
        >
          Publier
        </Button>
      </div>
    </form>
  );
}
