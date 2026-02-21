import { Link } from "react-router-dom";
import { Cross, MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Cross className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold">Anjaneya Pharmacy</h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted neighborhood pharmacy in Jai Vihar, Baprola. We provide quality medicines and healthcare products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/stocks" className="hover:opacity-100 transition-opacity">Medicine Stocks</Link>
              <Link to="/order" className="hover:opacity-100 transition-opacity">Order Medicines</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <span>Prescription Medicines</span>
              <span>OTC Products</span>
              <span>Health Supplements</span>
              <span>Home Delivery (1-3 km)</span>
              <span>Health Checkup Devices</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Jai Vihar, Baprola, New Delhi – <span className="blur-sm select-none">110043</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="blur-sm select-none">+91-98XXXXXXXX</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="blur-sm select-none">info@anjaneyapharmacy.com</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                8:00 AM – 10:00 PM (Daily)
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Anjaneya Pharmacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
