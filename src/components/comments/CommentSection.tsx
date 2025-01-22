import { useState, useEffect } from 'react';
import { Comment, commentService } from '@/services/commentService';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface CommentSectionProps {
  article_id: string;
}

export function CommentSection({ article_id }: CommentSectionProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadComments();
  }, [article_id]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const data = await commentService.getComments(article_id);
      setComments(data);
    } catch (error) {
      setError('Error loading comments');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const comment = {
        article_id,
        content: newComment,
        parent_id: replyTo?.id,
        user_id: user.id,
        status: 'pending'
      };

      await commentService.createComment(comment);
      setNewComment('');
      setReplyTo(null);
      await loadComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const renderComment = (comment: Comment, depth = 0) => {
    const replies = comments.filter(c => c.parent_id === comment.id);
    const maxDepth = 3;

    return (
      <div key={comment.id} className="space-y-4" style={{ marginLeft: `${depth * 2}rem` }}>
        <Card className="p-4">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              {comment.author?.avatar ? (
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">
                    {comment.author?.name?.charAt(0).toUpperCase() || '?'}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{comment.author?.name || 'Anonymous'}</h4>
                <time className="text-sm text-gray-500">
                  {commentService.formatRelativeDate(comment.created_at)}
                </time>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              {depth < maxDepth && (
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyTo(comment)}
                  >
                    Reply
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {replies.map(reply => renderComment(reply, depth + 1))}
      </div>
    );
  };

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-8">
      {user ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {replyTo && (
              <div className="mb-2 text-sm text-gray-600">
                Replying to {replyTo.author?.name || 'Anonymous'}
                <button
                  onClick={() => setReplyTo(null)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  Cancel
                </button>
              </div>
            )}
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      ) : (
        <div className="text-center py-4">
          <p>Please log in to comment</p>
        </div>
      )}

      <div className="space-y-6">
        {comments
          .filter(comment => !comment.parent_id)
          .map(comment => renderComment(comment))}
      </div>
    </div>
  );
}
