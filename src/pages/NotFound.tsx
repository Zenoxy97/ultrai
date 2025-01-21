import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
      <p className="text-gray-600 mb-8">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </motion.div>
  );
}
