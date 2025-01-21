import { useState, useEffect } from 'react';
import { Comment, commentService } from '../../services/commentService';
import { useAuth } from '../../contexts/AuthContext';

interface CommentSectionProps {
  articleId: string;
  isAdmin?: boolean;
}

export default function CommentSection({ articleId, isAdmin = false }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  useEffect(() => {
    loadComments();
  }, [articleId]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const data = await commentService.getComments(articleId, isAdmin ? undefined : 'approved');
      setComments(data);
    } catch (err) {
      setError('Erreur lors du chargement des commentaires');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const comment: Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'likes'> = {
        articleId,
        parentId: replyTo || undefined,
        author: {
          name: formData.name,
          email: formData.email
        },
        content: formData.content,
        status: isAdmin ? 'approved' : 'pending'
      };

      await commentService.createComment(comment);
      setFormData({ name: '', email: '', content: '' });
      setReplyTo(null);
      await loadComments();
    } catch (err) {
      setError('Erreur lors de l\'envoi du commentaire');
      console.error(err);
    }
  };

  const handleModerate = async (commentId: string, status: 'approved' | 'rejected') => {
    try {
      await commentService.moderateComment(commentId, status);
      await loadComments();
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
      await loadComments();
    } catch (err) {
      setError('Erreur lors de la suppression du commentaire');
      console.error(err);
    }
  };

  const handleLike = async (commentId: string) => {
    try {
      await commentService.likeComment(commentId);
      await loadComments();
    } catch (err) {
      setError('Erreur lors du like du commentaire');
      console.error(err);
    }
  };

  const renderComment = (comment: Comment, depth = 0) => {
    const replies = comments.filter(c => c.parentId === comment.id);
    const colorClass = depth % 2 === 0 ? 'bg-white' : 'bg-gray-50';

    return (
      <div key={comment.id} className={`${colorClass} p-4 ${depth > 0 ? 'ml-8 border-l-2 border-gray-200' : ''}`}>
        <div className="flex items-start space-x-4">
          {comment.author.avatar ? (
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">
                {comment.author.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {comment.author.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {commentService.formatRelativeDate(comment.createdAt)}
                </p>
              </div>
              {comment.status === 'pending' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  En attente
                </span>
              )}
            </div>

            <div className="text-sm text-gray-700">
              {comment.content}
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <button
                onClick={() => handleLike(comment.id!)}
                className="text-gray-500 hover:text-blue-600 flex items-center space-x-1"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>{comment.likes}</span>
              </button>

              <button
                onClick={() => setReplyTo(comment.id!)}
                className="text-gray-500 hover:text-blue-600"
              >
                Répondre
              </button>

              {isAdmin && (
                <>
                  {comment.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleModerate(comment.id!, 'approved')}
                        className="text-green-600 hover:text-green-700"
                      >
                        Approuver
                      </button>
                      <button
                        onClick={() => handleModerate(comment.id!, 'rejected')}
                        className="text-red-600 hover:text-red-700"
                      >
                        Rejeter
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(comment.id!)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Supprimer
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Réponses */}
        {replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {replies.map(reply => renderComment(reply, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Commentaires ({comments.length})
      </h2>

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

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          {replyTo && (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span className="text-sm text-gray-600">
                Réponse à un commentaire
              </span>
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Fermer</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}

          {!currentUser && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Commentaire
            </label>
            <textarea
              id="content"
              rows={4}
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {replyTo ? 'Répondre' : 'Commenter'}
            </button>
          </div>
        </div>
      </form>

      {/* Liste des commentaires */}
      <div className="space-y-6">
        {comments
          .filter(comment => !comment.parentId)
          .map(comment => renderComment(comment))}
      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}
