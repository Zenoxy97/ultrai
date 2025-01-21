import { motion } from "framer-motion";
import { articles } from "../data/articles";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function ArticleCard({ article, index }: { article: typeof articles[0], index: number }) {
  return (
    <Link to={`/articles/${article.slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <Badge variant="secondary" className="mb-3">
            {article.category}
          </Badge>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.summary}
          </p>
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
      </motion.article>
    </Link>
  );
}

export function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tous nos articles</h1>
          <p className="text-gray-600">
            Découvrez nos articles sur l'intelligence artificielle dans les territoires d'outre-mer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
