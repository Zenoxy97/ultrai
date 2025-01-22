import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/types/Article';
import { articleService } from '@/services/articleService';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await articleService.getPublishedArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {article.cover_image && (
                <img
                  src={article.cover_image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                {article.excerpt && (
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <span>
                    {format(new Date(article.published_at || article.created_at), 'PPP', {
                      locale: fr,
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
