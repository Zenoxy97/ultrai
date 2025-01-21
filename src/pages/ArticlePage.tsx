import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { Calendar } from 'lucide-react';
import { NotFound } from './NotFound';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (article) {
      fetch(`/src/content/blog/${article.slug}.md`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error loading article content:', error));
    }
  }, [article]);

  if (!article) {
    return <NotFound />;
  }

  const isVideoArticle = ['do-browser-assistant-ia', 'midscene-js-assistant-ia'].includes(article.slug);
  const videoIds = {
    'do-browser-assistant-ia': 'Q11zWq4875o',
    'midscene-js-assistant-ia': 'lrF0lPfrwag'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <article>
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {article.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>

        <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
          {isVideoArticle ? (
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${videoIds[article.slug as keyof typeof videoIds]}`}
              title={article.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
}
