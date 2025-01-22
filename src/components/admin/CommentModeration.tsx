import { useState, useEffect } from 'react';
import { Comment, commentService } from '../../services/commentService';
import { articleService } from '../../services/articleService';

export default function CommentModeration() {
  const [comments, setComments] = useState<(Comment & { articleTitle?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPendingComments();
  }, []);

  const loadPendingComments = async () => {
    try {
      setLoading(true);
      const pendingComments = await commentService.getPendingComments();
      
      // Charger les titres des articles
      const commentsWithArticles = await Promise.all(
        pendingComments.map(async (comment) => {
          try {
            const article = await articleService.getArticle(comment.article_id);
            return {
              ...comment,
              articleTitle: article?.title || 'Article supprimé'
            };
          } catch (err) {
            return {
              ...comment,
              articleTitle: 'Article non trouvé'
            };
          }
        })
      );

      setComments(commentsWithArticles);
    } catch (err) {
      setError('Erreur lors du chargement des commentaires');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleModerate = async (commentId: string, status: 'approved' | 'rejected') => {
    try {
      await commentService.moderateComment(commentId, status);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (err) {
      setError('Erreur lors de la modération du commentaire');
      console.error(err);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) {
      return;
    }

    try {
      await commentService.deleteComment(commentId);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (err) {
      setError('Erreur lors de la suppression du commentaire');
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Modération des commentaires
      </h1>

      {error && (
        <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {comments.map(comment => (
            <li key={comment.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {comment.author.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {comment.author.email}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En attente
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-600">
                    Article : {comment.articleTitle}
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    {comment.content}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {commentService.formatRelativeDate(comment.created_at)}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleModerate(comment.id!, 'approved')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Approuver
                    </button>
                    <button
                      onClick={() => handleModerate(comment.id!, 'rejected')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      Rejeter
                    </button>
                    <button
                      onClick={() => handleDelete(comment.id!)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {comments.length === 0 && !loading && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Aucun commentaire en attente
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Tous les commentaires ont été modérés.
            </p>
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>
    </div>
  );
}
