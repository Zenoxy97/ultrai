import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Article } from '@/types/Article';
import { articleService } from '@/services/articleService';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleForm } from './ArticleEditor/ArticleForm';
import { Loader2 } from 'lucide-react';

export function ArticleEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<Partial<Article>>({
    title: '',
    content: '',
    excerpt: '',
    status: 'draft',
    cover_image: '',
    categories: [],
    tags: [],
    seo: {
      title: '',
      description: '',
      keywords: [],
    },
  });

  useEffect(() => {
    if (id) {
      loadArticle();
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const loadArticle = async () => {
    try {
      if (!id) return;
      const foundArticle = await articleService.getArticle(id);
      setArticle(foundArticle);
    } catch (error) {
      console.error('Error loading article:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger l\'article.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData: Partial<Article>) => {
    try {
      setIsLoading(true);

      // Générer le slug à partir du titre si nécessaire
      if (!formData.slug && formData.title) {
        formData.slug = articleService.generateSlug(formData.title);
      }

      // Mettre à jour ou créer l'article
      if (id) {
        await articleService.updateArticle(id, formData);
        toast({
          title: 'Succès',
          description: 'Article mis à jour avec succès.',
        });
      } else {
        const newArticle = await articleService.createArticle(formData as Omit<Article, 'id'>);
        toast({
          title: 'Succès',
          description: 'Article créé avec succès.',
        });
        navigate(`/admin/articles/${newArticle.id}/edit`);
      }
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

  const handlePublish = async () => {
    try {
      if (!id) return;

      const updatedArticle = {
        ...article,
        status: 'published' as const,
        published_at: new Date().toISOString(),
      };

      await articleService.updateArticle(id, updatedArticle);
      setArticle(updatedArticle);

      toast({
        title: 'Succès',
        description: 'Article publié avec succès.',
      });
    } catch (error) {
      console.error('Error publishing article:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de publier l\'article.',
        variant: 'destructive',
      });
    }
  };

  const handleUnpublish = async () => {
    try {
      if (!id) return;

      const updatedArticle = {
        ...article,
        status: 'draft' as const,
        published_at: null,
      };

      await articleService.updateArticle(id, updatedArticle);
      setArticle(updatedArticle);

      toast({
        title: 'Succès',
        description: 'Article dépublié avec succès.',
      });
    } catch (error) {
      console.error('Error unpublishing article:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de dépublier l\'article.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {id ? 'Modifier l\'article' : 'Nouvel article'}
        </h1>
        <div className="space-x-2">
          {id && (
            article.status === 'published' ? (
              <Button
                variant="destructive"
                onClick={handleUnpublish}
                disabled={isLoading}
              >
                Dépublier
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handlePublish}
                disabled={isLoading}
              >
                Publier
              </Button>
            )
          )}
        </div>
      </div>

      <Card className="p-6">
        <Tabs defaultValue="content">
          <TabsList>
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <ArticleForm
              article={article}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </TabsContent>
          <TabsContent value="seo">
            {/* Ajouter le formulaire SEO ici */}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
