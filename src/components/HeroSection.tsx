import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Saftiger Burger vom Burgerhof Dachau"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Willkommen im
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient-gold">BURGERHOF</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-heading text-xl md:text-3xl text-foreground/80 mb-2 italic"
        >
          Mehr als nur ein Burgerladen
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          Saftige Burger · Orientalische Küche · Frisches Frühstück — mitten in Dachau
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://shop-burgerhofdachau.de/burgerhof-dachau/delivery?scroll-to-menu=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-10 py-4 rounded-lg font-body font-bold text-lg tracking-wide hover:opacity-90 transition-opacity shadow-glow"
          >
            JETZT ONLINE BESTELLEN
          </a>
          <a
            href="#menu"
            className="border border-primary/40 text-foreground px-10 py-4 rounded-lg font-body font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Speisekarte
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
