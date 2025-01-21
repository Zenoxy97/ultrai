import { Article } from '../../services/articleService';
import DOMPurify from 'dompurify';

interface ArticleViewProps {
  article: Partial<Article>;
  isPreview?: boolean;
}

export default function ArticleView({ article, isPreview = false }: ArticleViewProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* En-tête de l'article */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        {isPreview && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Mode prévisualisation
                </p>
              </div>
            </div>
          </div>
        )}

        {article.imageUrl && (
          <div className="relative h-96 mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            {article.category && (
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {article.category}
              </span>
            )}
            {article.date && (
              <time dateTime={article.date.toString()}>
                {formatDate(article.date)}
              </time>
            )}
          </div>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Contenu de l'article */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.content || '')
        }}
      />
    </article>
  );
}
