import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../public/logo.png";
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} height={50} width={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className={isActive("/") ? "text-primary text-xl" : "text-xl"}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-xl"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("why-choose-us")}
              className="text-xl"
            >
              Why Choose Us
            </Button>
            <Link to="/products">
              <Button
                variant="ghost"
                className={
                  isActive("/products") ? "text-primary text-xl" : "text-xl"
                }
              >
                Products
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-xl"
            >
              Contact
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="text-xl"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("why-choose-us")}
            >
              Why Choose Us
            </Button>
            <Link to="/products" className="block">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <Button
              variant="hero"
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
