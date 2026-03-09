import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Startseite", href: "#hero" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-glow py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#hero" className="font-heading text-2xl font-bold tracking-wide">
          <span className="text-gradient-gold">BURGERHOF</span>
          <span className="text-foreground text-sm ml-2 font-body font-light tracking-widest uppercase">Dachau</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://shop-burgerhofdachau.de/burgerhof-dachau/delivery?scroll-to-menu=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            JETZT BESTELLEN
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-body text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://shop-burgerhofdachau.de/burgerhof-dachau/delivery?scroll-to-menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold"
              >
                JETZT BESTELLEN
              </a>
              <a href="tel:01746668800" className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} /> 0174 666 88 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
