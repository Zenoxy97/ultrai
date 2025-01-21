import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "ULTRAI.FR a transformé notre approche de l'IA. Les solutions proposées sont parfaitement adaptées à nos besoins locaux.",
    author: "Marie Dubois",
    role: "Directrice Innovation, Tech Antilles",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "Une ressource inestimable pour comprendre et déployer l'IA dans nos territoires. L'accompagnement est exceptionnel.",
    author: "Thomas Leroy",
    role: "CEO, Pacific Digital Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "Grâce à ULTRAI.FR, nous avons pu développer des solutions d'IA adaptées aux spécificités de notre région.",
    author: "Sophie Martin",
    role: "Responsable Projet, Innovation Réunion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Ils Nous Font Confiance"
          subtitle="Découvrez les retours d'expérience de nos utilisateurs"
        />
        
        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 20,
                  position: activeIndex === index ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <div className="mb-8">
                  <Quote className="w-12 h-12 mx-auto text-blue-600 rotate-180" />
                </div>
                <blockquote className="text-xl text-gray-900 mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}