import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
  };
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const { icon: Icon, title, description, details } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2 mb-4">
          {details.map((detail, i) => (
            <motion.li
              key={detail}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-gray-500"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
              {detail}
            </motion.li>
          ))}
        </ul>

        <Button
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
        >
          En savoir plus
        </Button>
      </div>
    </motion.div>
  );
}