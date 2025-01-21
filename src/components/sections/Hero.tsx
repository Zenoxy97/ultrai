import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[50vh] pt-24 md:pt-32 pb-2 relative overflow-hidden">
      {/* Background Animation */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          L'IA qui parle votre langue,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            pensée pour votre territoire
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Solutions et communauté pour moderniser votre entreprise en Outre-Mer avec l'Intelligence Artificielle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
          <Button 
            size="lg" 
            className="group bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md w-full sm:w-auto text-sm sm:text-base whitespace-normal h-auto sm:max-w-[300px]"
          >
            Découvrez comment l'IA peut booster votre activité
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 py-2 rounded-md w-full text-sm sm:text-base whitespace-normal h-auto sm:max-w-[400px]"
            asChild
          >
            <a
              href="https://chat.whatsapp.com/HtlnLA9XNue72ocEX8pK9O"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Rejoignez la première communauté IA des territoires ultramarins
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}