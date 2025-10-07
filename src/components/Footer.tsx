import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="items-center mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img className="mx-auto" src={logo} height={75} width={75} />
              </Link>
            </div>
            <p className="text-muted-foreground text-center">
              Your trusted partner for premium melamine crockery and
              high-performance plastic solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="/#about"
                  className="hover:text-primary transition-smooth"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#why-choose-us"
                  className="hover:text-primary transition-smooth"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-primary transition-smooth"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-center">
              Contact Us
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm">
                  25, Harekrishna Ind Estate, Opposite ACRE. Anu Design, Near
                  Ambicanagar, Odhav, Ahmedabad - 382415
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p>98254 30464</p>
                  <p>92284 91255</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:udaymelamine@yahoo.com"
                  className="text-sm hover:text-primary transition-smooth"
                >
                  udaymelamine@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Uday Plast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
