
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bisht-navy text-white pt-16 pb-8">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Bisht University</h3>
            <p className="text-gray-300 mb-4">
              Empowering minds, inspiring innovation, and cultivating excellence since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bisht-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bisht-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bisht-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bisht-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/academics/engineering" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link to="/academics/business" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/academics/science" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/academics/medical" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Medical
                </Link>
              </li>
              <li>
                <Link to="/academics/arts" className="text-gray-300 hover:text-bisht-gold transition-colors">
                  Arts & Humanities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-bisht-gold" />
                <span className="text-gray-300">123 University Avenue, Bisht City, BC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-bisht-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-bisht-gold" />
                <span className="text-gray-300">admissions@bishtuniversity.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bisht University. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-bisht-gold transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-bisht-gold transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-bisht-gold transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
