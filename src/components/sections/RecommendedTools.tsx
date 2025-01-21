import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

interface Tool {
  name: string;
  description: string;
  image: string;
  link: string;
}

const tools: Tool[] = [
  {
    name: 'Do Browser',
    description: 'Assistant IA qui simplifie le travail des entrepreneurs ultramarins',
    image: 'https://img.youtube.com/vi/Q11zWq4875o/maxresdefault.jpg',
    link: '/articles/do-browser-assistant-ia'
  },
  {
    name: 'MidScene.js',
    description: 'Votre Assistant IA Gratuit pour Doper votre Productivité en Outre-mer',
    image: 'https://img.youtube.com/vi/lrF0lPfrwag/maxresdefault.jpg',
    link: '/articles/midscene-js-assistant-ia'
  },
  {
    name: 'Bientôt disponible',
    description: 'De nouveaux outils arrivent bientôt...',
    image: 'https://placehold.co/600x400',
    link: '#'
  }
];

export function RecommendedTools() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Outils Recommandés"
          subtitle="Découvrez notre sélection d'outils d'IA pour les entrepreneurs ultramarins"
        />

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tools.map((tool) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={tool.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-13" className="mr-8">
                  Disponible maintenant
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={tool.link}>
                  <span className="absolute inset-0" />
                  {tool.name}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-300">{tool.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
