import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/button";
import { Zap, Target, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Innovation Continue",
    description: "Accédez aux dernières avancées en IA adaptées à votre territoire"
  },
  {
    icon: Target,
    title: "Expertise Locale",
    description: "Bénéficiez de solutions pensées pour les spécificités ultramarines"
  },
  {
    icon: Users,
    title: "Réseau Professionnel",
    description: "Rejoignez une communauté dynamique d'experts et de professionnels"
  },
  {
    icon: Shield,
    title: "Accompagnement Personnalisé",
    description: "Profitez d'un suivi sur mesure pour vos projets d'IA"
  }
];

export function WhyJoinUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Pourquoi Nous Rejoindre ?"
          subtitle="Découvrez les avantages uniques de notre plateforme dédiée aux territoires d'outre-mer"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Rejoignez-nous maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  );
}