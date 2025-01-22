import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Ultrai
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            L'IA qui parle votre langue
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/articles">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Voir les articles
              </Button>
            </Link>
            <Link to="/admin">
              <Button className="bg-white text-gray-900 hover:bg-gray-200">
                Administration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
