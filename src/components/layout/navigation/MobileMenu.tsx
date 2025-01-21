import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Accueil", href: "home" },
  { label: "Services", href: "features" },
  { label: "Articles", href: "articles" },
  { label: "Territoires", href: "territories" },
  { label: "Témoignages", href: "testimonials" },
  { label: "Contact", href: "newsletter" },
];

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const handleClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      className={cn(
        "md:hidden",
        "absolute top-full left-0 right-0",
        "bg-white border-b border-gray-100",
        "transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="px-4 py-2 text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-4 flex flex-col space-y-2">
          <Button variant="ghost" className="w-full justify-center">
            Se connecter
          </Button>
          <Button className="w-full justify-center">
            S'inscrire
          </Button>
        </div>
      </div>
    </div>
  );
}