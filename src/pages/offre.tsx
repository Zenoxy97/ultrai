import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Zap, Target } from "lucide-react";

// Test de déploiement automatique Netlify

const programSteps = [
  {
    period: "Semaine 1-2",
    title: "Mise en place & fondations",
    steps: [
      "Audit complet de vos processus",
      "Installation de votre infrastructure IA",
      "Déploiement des premiers automatismes"
    ]
  },
  {
    period: "Semaine 3-4",
    title: "Accélération & formation",
    steps: [
      "Formation express de votre équipe (3h)",
      "Activation de votre système de prospection automatique",
      "Optimisation des workflows et automatisations"
    ]
  },
  {
    period: "Semaine 5-8",
    title: "Résultats & optimisation",
    steps: [
      "Montée en puissance des automatisations",
      "Suivi des performances avec ajustements",
      "Premiers résultats concrets (leads, gain de temps, chiffre d'affaires)"
    ]
  }
];

const testimonials = [
  {
    quote: "Grâce au Programme Elite IA, nous avons automatisé notre prospection et gagné 12 nouveaux clients qualifiés en un mois.",
    author: "Marie L., Agence Immobilière Martinique"
  },
  {
    quote: "Je passais 2h par jour sur l'administratif. Aujourd'hui, c'est entièrement automatisé, et j'ai plus de temps pour mes clients.",
    author: "Jean P., Commerce Réunion"
  }
];

const bonusFeatures = [
  {
    title: "Pack Démarrage Express",
    features: [
      "Audit stratégique ultra-personnalisé",
      "Templates IA prêts à l'emploi pour votre secteur"
    ]
  },
  {
    title: "Pack Performance",
    features: [
      "Accès exclusif à notre bibliothèque de solutions IA ultramarines",
      "Formation accélérée de votre équipe"
    ]
  },
  {
    title: "Pack Support Premium",
    features: [
      "Accompagnement personnalisé pour un suivi optimal",
      "Support prioritaire 24/7"
    ]
  }
];

export default function Offre() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 PROGRAMME ELITE IA
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                TRANSFORMATION DIGITALE ULTRAMARINE
              </span>
            </h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              ⚡ La 1ère Infrastructure IA Conçue Pour Les Entrepreneurs Ultramarins
            </p>
            <p className="text-xl text-gray-600 mb-8">
              👉 Gagnez du temps, attirez plus de clients et prenez une longueur d'avance sur vos concurrents !
            </p>
            <div className="inline-block bg-green-100 rounded-full px-6 py-2 text-green-800 font-semibold">
              ✅ RÉSULTATS CONCRETS GARANTIS
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                AUTOMATISATION COMPLÈTE
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  +20h de travail économisées par semaine grâce à l'IA
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  3 à 5 nouveaux clients qualifiés chaque semaine
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  Réduction de 80% des tâches administratives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  Un développement commercial 2X plus rapide
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                SOLUTION CLÉ EN MAIN
              </h3>
              <p className="text-gray-600 mb-4">💡 Optimisé pour les entreprises d'Outre-Mer :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1" />
                  Infrastructure IA sur-mesure selon votre secteur
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1" />
                  Système de prospection & suivi client 100% automatisé
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1" />
                  Tableau de bord intelligent pour piloter votre activité
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-600" />
                IMPLÉMENTATION EXPRESS
              </h3>
              <p className="text-gray-600 mb-4">⚡ Mise en place ultra-rapide, zéro contrainte !</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  Seulement 3h de votre temps nécessaire
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  Compatible avec vos outils actuels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🔹</span>
                  Aucune compétence technique requise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            📌 🛠 DÉROULÉ DU PROGRAMME
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {programSteps.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  📅 {phase.period} : {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            🔥 PREUVES DE RÉSULTATS
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <p className="text-gray-600 mb-4">💬 "{testimonial.quote}"</p>
                <p className="font-semibold text-blue-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            🎖 Vous voulez plus de preuves ? Nous vous montrons des cas clients en direct lors de votre session stratégique.
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🎁 BONUS EXCLUSIFS
            </h2>
            <p className="text-xl text-blue-600 font-semibold">D'une valeur de 7 000€</p>
            <p className="text-gray-600 mt-2">💡 Inclus gratuitement pour les 5 premiers inscrits :</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {bonusFeatures.map((bonus, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{bonus.title}</h3>
                <ul className="space-y-3">
                  {bonus.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border">
            <h2 className="text-2xl font-bold text-center mb-6">
              🔒 GARANTIE 100% RÉSULTATS – OU PROLONGÉ GRATUITEMENT
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">💰 Si après 30 jours vous n'avez pas :</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Économisé au moins 20h de travail par semaine</span>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-center">OU</p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Obtenu de nouveaux prospects qualifiés</span>
                </li>
              </ul>
              <p className="text-center font-semibold text-blue-600">
                ➡ Nous continuons à vous accompagner GRATUITEMENT jusqu'à ce que ce soit le cas.
              </p>
              <p className="text-center text-gray-600">
                Aucune prise de risque. Juste des résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              📌 POUR QUI EST CE PROGRAMME ?
            </h2>
            <p className="text-gray-600 mb-6">
              Ce programme est fait pour vous si vous êtes un entrepreneur ultramarin et que vous voulez :
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1" />
                <span>Gagner du temps et optimiser votre efficacité (moins d'administratif, plus de stratégie).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1" />
                <span>Doubler vos ventes sans prospecter manuellement.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1" />
                <span>Attirer plus de clients et automatiser votre suivi.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1" />
                <span>Prendre une longueur d'avance sur vos concurrents avec l'IA.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-800 font-bold px-6 py-2 rounded-full mb-6">
              ⚠ OFFRE ULTRA-LIMITÉE – UNIQUEMENT POUR 5 ENTREPRISES CE TRIMESTRE
            </div>
            <ul className="space-y-2 mb-8">
              <li>🔹 5 places disponibles – 3 déjà réservées</li>
              <li>🎯 Accompagnement VIP pour les 2 dernières entreprises sélectionnées</li>
              <li>📌 DERNIÈRE CHANCE avant la fermeture des inscriptions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              🚀 DÉCOUVREZ VOTRE POTENTIEL D'AUTOMATISATION
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 border mb-8">
              <p className="text-xl mb-6">
                🎯 Réservez votre session stratégique GRATUITE de 30 minutes et découvrez :
              </p>
              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <span>Les processus clés que vous pouvez automatiser immédiatement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <span>Votre gain de temps potentiel avec l'IA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <span>Un plan d'action 100% personnalisé pour votre entreprise.</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-8">
                📞 Réservez maintenant avant que toutes les places ne soient prises !
              </p>
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base sm:text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 min-h-[60px]"
                onClick={() => window.open('https://calendly.com/ultrai/session-strategique', '_blank')}
              >
                <span className="text-center">RÉSERVER MA SESSION STRATÉGIQUE</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
