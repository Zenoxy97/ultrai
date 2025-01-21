import { motion } from "framer-motion";
import { Users, Map, NewspaperIcon, Brain } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  icon: typeof Users;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ icon: Icon, value, label, suffix = "+", delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 text-center">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem
            icon={Users}
            value={2000}
            label="Professionnels connectés"
            delay={0}
          />
          <StatItem
            icon={Map}
            value={8}
            label="Territoires couverts"
            suffix=""
            delay={0.2}
          />
          <StatItem
            icon={NewspaperIcon}
            value={100}
            label="Articles publiés"
            delay={0.4}
          />
          <StatItem
            icon={Brain}
            value={50}
            label="Experts IA"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}