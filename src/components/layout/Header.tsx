import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "./navigation/NavigationMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { Link } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/70 backdrop-blur-lg",
        isScrolled ? "shadow-[0_0_15px_rgba(59,130,246,0.1)]" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ULTRAI.FR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex font-medium">
              Se connecter
            </Button>
            <Button className="hidden md:inline-flex">
              S'inscrire
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-600 transition-all",
                  mobileMenuOpen && "rotate-45 translate-y-2"
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-600 transition-all",
                  mobileMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-600 transition-all",
                  mobileMenuOpen && "-rotate-45 -translate-y-2"
                )} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} />

      {/* Dynamic border */}
      <div className="relative">
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-[2px]",
          "bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0",
          "transform transition-transform duration-500",
          isScrolled ? "scale-x-100" : "scale-x-0"
        )} />
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-[1px]",
          "bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0",
          "transform transition-all duration-500 delay-150",
          isScrolled ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )} />
      </div>
    </header>
  );
}