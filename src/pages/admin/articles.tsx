import { useState, useEffect } from 'react';
import { Article } from '@/types/Article';
import ArticleEditor from '@/components/admin/ArticleEditor';
import { supabase } from '@/config/supabase';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;

      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les articles.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (articleId: string) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);

      if (error) throw error;

      toast({
        title: 'Article supprimé',
        description: 'L\'article a été supprimé avec succès.',
      });
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer l\'article.',
        variant: 'destructive',
      });
    }
  };

  if (selectedArticle || isCreating) {
    return (
      <div>
        <Button
          onClick={() => {
            setSelectedArticle(null);
            setIsCreating(false);
          }}
          variant="ghost"
          className="mb-4"
        >
          ← Retour
        </Button>
        <ArticleEditor
          article={selectedArticle || undefined}
          onSuccess={() => {
            setSelectedArticle(null);
            setIsCreating(false);
            fetchArticles();
          }}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Articles</h1>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouvel article
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Chargement...</div>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{article.title}</h3>
                <div className="text-sm text-gray-500 space-x-4">
                  <span>
                    Mis à jour le {format(new Date(article.updated_at), 'dd/MM/yyyy')}
                  </span>
                  <span>
                    Status: {article.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(`/articles/${article.slug}`, '_blank')}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedArticle(article)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(article.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
