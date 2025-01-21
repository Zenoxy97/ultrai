import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Restez à la pointe de l'innovation
          </h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
            et innovations en IA dans les territoires d'outre-mer
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
              S'inscrire
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications. 
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}