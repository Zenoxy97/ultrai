import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center max-w-3xl mx-auto ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 font-medium">
        {subtitle}
      </p>
    </motion.div>
  );
}