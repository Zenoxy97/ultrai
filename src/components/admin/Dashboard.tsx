import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/types/Article';
import { articleService } from '@/services/articleService';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
  });
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const articles = await articleService.getArticles();

      // Calculer les statistiques
      const publishedArticles = articles.filter(article => article.status === 'published');
      const totalViews = articles.reduce((acc, article) => acc + (article.views || 0), 0);
      const totalLikes = articles.reduce((acc, article) => acc + (article.likes || 0), 0);
      const totalComments = articles.reduce((acc, article) => acc + (article.comments_count || 0), 0);

      setStats({
        totalArticles: articles.length,
        publishedArticles: publishedArticles.length,
        totalViews,
        totalLikes,
        totalComments,
      });

      // Récupérer les 5 articles les plus récents
      setRecentArticles(articles.slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les données du tableau de bord.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleArticleStatus = async (article: Article) => {
    if (!article.id) return;

    try {
      const newStatus = article.status === 'published' ? 'draft' : 'published';
      await articleService.updateArticle(article.id, {
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : null,
      });

      setRecentArticles(prevArticles =>
        prevArticles.map(a =>
          a.id === article.id
            ? { ...a, status: newStatus }
            : a
        )
      );

      toast({
        title: 'Succès',
        description: `Article ${newStatus === 'published' ? 'publié' : 'dépublié'}.`,
      });
    } catch (error) {
      console.error('Error toggling article status:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de modifier le statut de l\'article.',
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
      <h1 className="text-2xl font-bold">Tableau de bord</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Articles totaux</h3>
          <p className="mt-2 text-3xl font-bold">{stats.totalArticles}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Articles publiés</h3>
          <p className="mt-2 text-3xl font-bold">{stats.publishedArticles}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Vues totales</h3>
          <p className="mt-2 text-3xl font-bold">{stats.totalViews}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Likes totaux</h3>
          <p className="mt-2 text-3xl font-bold">{stats.totalLikes}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Commentaires totaux</h3>
          <p className="mt-2 text-3xl font-bold">{stats.totalComments}</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-medium mb-4">Articles récents</h2>
        <div className="divide-y">
          {recentArticles.map(article => (
            <div
              key={article.id}
              className="py-4 flex items-center justify-between"
            >
              <div>
                <Link
                  to={`/admin/articles/${article.id}/edit`}
                  className="text-sm font-medium hover:underline"
                >
                  {article.title}
                </Link>
                <p className="mt-1 text-sm text-gray-500">
                  {article.status === 'published' ? 'Publié' : 'Brouillon'}
                </p>
              </div>
              <Button
                variant={article.status === 'published' ? 'destructive' : 'default'}
                onClick={() => toggleArticleStatus(article)}
              >
                {article.status === 'published' ? 'Dépublier' : 'Publier'}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
