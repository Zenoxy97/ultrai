import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">ULTRAI.FR</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-blue-600">Accueil</Link>
            <Link to="/services" className="text-gray-600">Services</Link>
            <Link to="/articles" className="text-gray-600">Articles</Link>
            <Link to="/territoires" className="text-gray-600">Territoires</Link>
            <Link to="/temoignages" className="text-gray-600">Témoignages</Link>
            <Link to="/contact" className="text-gray-600">Contact</Link>
            <Link to="/admin/login" className="text-gray-600">Se connecter</Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                S'inscrire
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            L'IA qui parle votre langue, {' '}
            <span className="text-blue-600">pensée pour votre territoire</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Solutions et communauté pour moderniser votre entreprise en Outre-Mer avec l'Intelligence Artificielle
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Découvrez comment l'IA peut booster votre activité
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
              Rejoignez la première communauté IA des territoires ultramarins
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">
          L'IA au service de votre {' '}
          <span className="text-blue-600">entreprise ultramarine</span> 🚀
        </h2>
        <p className="text-xl text-gray-600">
          💡 Automatisez vos tâches, attirez plus de clients et libérez 20h de travail par semaine !
        </p>
      </div>
    </div>
  );
}
