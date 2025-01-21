import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Territories() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Présence locale</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Implantation dans les territoires d'outre-mer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous sommes présents dans les principaux territoires d'outre-mer pour mieux comprendre et servir nos clients.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {territories.map((territory) => (
              <motion.div
                key={territory.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <MapPin className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {territory.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{territory.description}</p>
                  <p className="mt-6">
                    <a
                      href={territory.href}
                      className={cn(
                        "text-sm font-semibold leading-6 text-blue-600",
                        territory.href ? "" : "pointer-events-none opacity-50"
                      )}
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

const territories = [
  {
    name: 'Martinique',
    description:
      'Notre siège social est basé à Fort-de-France, au cœur des Antilles françaises. Nous y développons des solutions adaptées aux besoins locaux.',
    href: '#',
  },
  {
    name: 'Guadeloupe',
    description:
      'Notre équipe en Guadeloupe accompagne les entrepreneurs dans leur transformation digitale, avec une expertise locale.',
    href: '#',
  },
  {
    name: 'Guyane',
    description:
      'En Guyane, nous travaillons avec les entreprises pour développer des solutions innovantes adaptées au contexte amazonien.',
    href: '#',
  },
];