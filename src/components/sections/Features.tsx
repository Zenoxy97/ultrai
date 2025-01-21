import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Brain } from "lucide-react";

const features = [
  {
    name: "IA Générative",
    description:
      "Création automatique de contenus marketing adaptés à votre marché local.",
    icon: Brain,
  },
  {
    name: "Analyse de données",
    description:
      "Comprenez votre marché grâce à des insights basés sur des données locales.",
    icon: Brain,
  },
  {
    name: "Automatisation",
    description:
      "Automatisez vos tâches répétitives pour vous concentrer sur votre cœur de métier.",
    icon: Brain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Des outils d'IA adaptés à vos besoins"
          subtitle="Découvrez comment l'IA peut transformer votre entreprise"
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-blue-600"
                    >
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}