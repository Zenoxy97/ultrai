import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import { articles } from "../../data/articles";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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

export function LatestArticles() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Derniers Articles"
          subtitle="Restez informé des dernières actualités et innovations en IA dans les territoires d'outre-mer"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.slice(0, 3).map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/articles">
            <Button size="lg" className="font-medium">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}