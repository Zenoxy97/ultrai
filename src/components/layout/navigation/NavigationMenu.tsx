import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Accueil", to: "/#home" },
  { label: "Services", to: "/#features" },
  { label: "Articles", to: "/#articles" },
  { label: "Territoires", to: "/#territories" },
  { label: "Témoignages", to: "/#testimonials" },
  { label: "Contact", to: "/#newsletter" },
];

export function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("/#home");
  const location = useLocation();

  const handleClick = (to: string) => {
    setActiveItem(to);
    if (to.startsWith("/#")) {
      const element = document.getElementById(to.substring(2));
      if (element) {
        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const sections = navigationItems
          .map(item => item.to.substring(2))
          .filter(id => document.getElementById(id));

        const viewportMiddle = window.innerHeight / 3;
        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - viewportMiddle);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = sectionId;
            }
          }
        });

        if (closestSection) {
          setActiveItem("/#" + closestSection);
        }
      } else {
        setActiveItem(location.pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav className="flex items-center space-x-8">
      <AnimatePresence mode="wait">
        {navigationItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            onClick={() => handleClick(to)}
            className={cn(
              "relative py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600",
              activeItem === to && "text-blue-600"
            )}
          >
            {activeItem === to && (
              <motion.div
                layoutId="bubble"
                className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {label}
          </Link>
        ))}
      </AnimatePresence>
    </nav>
  );
}