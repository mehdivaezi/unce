import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MembershipModal from "./MembershipModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "صفحه اصلی", id: "hero" },
    { label: "هشدارها", id: "alerts" },
    { label: "تحلیل بازار", id: "analysis" },
    { label: "درباره ما", id: "about" },
    { label: "تماس", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-background font-bold text-sm">اونس</span>
              </div>
              <span className="text-xl font-bold text-gradient-gold">اونس</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="gold"
                size="sm"
                className="gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                <Bell className="w-4 h-4" />
                عضویت رایگان
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium py-2 text-right"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  variant="gold"
                  size="sm"
                  className="mt-2 gap-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  <Bell className="w-4 h-4" />
                  عضویت رایگان
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <MembershipModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Header;
