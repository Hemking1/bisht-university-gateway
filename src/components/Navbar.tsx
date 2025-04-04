
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-bisht-maroon">Bisht University</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center font-medium text-gray-700 hover:text-bisht-maroon">
                    Academics <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/academics/engineering" className="w-full">Engineering</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/academics/business" className="w-full">Business</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/academics/science" className="w-full">Science</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/academics/medical" className="w-full">Medical</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center font-medium text-gray-700 hover:text-bisht-maroon">
                    Admissions <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/admissions/engineering" className="w-full">Engineering Admissions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admissions/business" className="w-full">Business Admissions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admissions/science" className="w-full">Science Admissions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admissions/medical" className="w-full">Medical Admissions</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/campus" className="font-medium text-gray-700 hover:text-bisht-maroon">
                Campus Life
              </Link>
              
              <Link to="/about" className="font-medium text-gray-700 hover:text-bisht-maroon">
                About Us
              </Link>
            </div>

            <Link to="/apply">
              <Button className="btn-primary">Apply Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-bisht-maroon"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium text-gray-500 mb-2">Academics</p>
                <Link to="/academics/engineering" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Engineering
                </Link>
                <Link to="/academics/business" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Business
                </Link>
                <Link to="/academics/science" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Science
                </Link>
                <Link to="/academics/medical" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Medical
                </Link>
              </div>
              
              <div className="border-b pb-2">
                <p className="font-medium text-gray-500 mb-2">Admissions</p>
                <Link to="/admissions/engineering" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Engineering Admissions
                </Link>
                <Link to="/admissions/business" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Business Admissions
                </Link>
                <Link to="/admissions/science" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Science Admissions
                </Link>
                <Link to="/admissions/medical" className="block py-1 text-gray-700 hover:text-bisht-maroon">
                  Medical Admissions
                </Link>
              </div>
              
              <Link to="/campus" className="font-medium text-gray-700 hover:text-bisht-maroon">
                Campus Life
              </Link>
              
              <Link to="/about" className="font-medium text-gray-700 hover:text-bisht-maroon">
                About Us
              </Link>
              
              <Link to="/apply" className="w-full">
                <Button className="btn-primary w-full">Apply Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
