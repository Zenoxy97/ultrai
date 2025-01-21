import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RecommendationResult } from '../../services/recommendationService';

interface Props {
  currentArticleId?: string;
  maxResults?: number;
}

const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const ArticleRecommendations: React.FC<Props> = ({ currentArticleId, maxResults = 5 }) => {
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        if (!currentArticleId) {
          setError('ID de l\'article non spécifié');
          return;
        }

        const { recommendationService } = await import('../../services/recommendationService');
        const recommendations = await recommendationService.getCombinedRecommendations(currentArticleId);
        setRecommendations(recommendations.slice(0, maxResults));
      } catch (err) {
        setError('Erreur lors de la récupération des recommandations');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentArticleId, maxResults]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-4">Articles recommandés</h2>
      
      {recommendations.length > 0 ? (
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
              <Link 
                to={`/article/${rec.article.id}`}
                className="block hover:bg-gray-50 rounded-lg transition-colors duration-150 ease-in-out p-2"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {rec.article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {rec.article.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {rec.article.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{rec.explanation}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune recommandation</h3>
          <p className="mt-1 text-sm text-gray-500">
            Nous n'avons pas trouvé d'articles similaires pour le moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleRecommendations;
