import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume-Gilbert-Hutapea.pdf';
    link.download = 'Gilbert_Hutapea_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">Bert.</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "hover:text-primary transition-colors",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={handleDownloadResume}>
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Slider */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen bg-background/95 backdrop-blur-sm w-64 transform transition-transform duration-300 ease-in-out md:hidden border-l",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 hover:bg-accent rounded-md"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col space-y-4 p-4 pt-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "p-2 hover:bg-accent rounded-md transition-colors",
                location === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={handleDownloadResume} className="w-full">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;