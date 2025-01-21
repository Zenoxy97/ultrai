import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "🚨 Le problème",
    description: "Entre les tâches administratives répétitives et le manque de temps pour prospecter efficacement, attirer de nouveaux clients devient un véritable défi. Résultat : des opportunités perdues et une croissance freinée.",
    emoji: "",
  },
  {
    title: "🤖 Notre solution",
    description: "ULTRAI, une intelligence artificielle clé en main, automatise votre gestion administrative, votre suivi client et votre prospection. Concentrez-vous sur ce qui compte : attirer et fidéliser plus de clients.",
    emoji: "",
  },
  {
    title: "🚀 Les résultats",
    description: "💼 +20h libérées par semaine\n📈 +3 à 5 nouveaux clients qualifiés par semaine\n⏱ 50% de temps gagné sur les tâches administratives",
    emoji: "",
  },
  {
    title: "⭐ Témoignage client",
    description: "\"ULTRAI a révolutionné ma façon de travailler : moins de stress, plus de clients, et un réel gain de productivité !\" — Jean, entrepreneur en Martinique.",
    emoji: "",
  },
];

export default function Services() {
  return (
    <section className="w-full px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            L'IA au service de votre{" "}
            <span className="text-blue-600">entreprise</span>{" "}
            <span className="text-blue-600">ultramarine</span>{" "}
            <span>🚀</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Automatisez vos tâches, attirez plus de clients et libérez du temps pour développer votre activité !
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">🔹 Découvrez comment en 30 jours !</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-2 rounded-md w-full sm:w-auto text-sm sm:text-base whitespace-normal sm:whitespace-nowrap"
            >
              Obtenez votre diagnostic IA gratuit
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Button>
            <Link to="/offre" className="w-full sm:w-auto">
              <Button 
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-8 py-2 rounded-md w-full text-sm sm:text-base whitespace-normal sm:whitespace-nowrap"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
