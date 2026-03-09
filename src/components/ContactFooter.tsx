import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="py-24 bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Besuche uns
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Kontakt
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { icon: MapPin, label: "Adresse", value: "Bahnhofstraße 13\n85221 Dachau", href: "https://maps.google.com/?q=Bahnhofstraße+13+85221+Dachau" },
            { icon: Phone, label: "Telefon", value: "0174 666 88 00", href: "tel:01746668800" },
            { icon: Mail, label: "E-Mail", value: "info@burgerhof-dachau.de", href: "mailto:info@burgerhof-dachau.de" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "Adresse" ? "_blank" : undefined}
              rel={item.label === "Adresse" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-8 text-center group hover:shadow-glow transition-all duration-300"
            >
              <div className="bg-gradient-gold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <p className="text-muted-foreground font-body text-sm uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-foreground font-body whitespace-pre-line group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-card mb-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.5!2d11.434!3d48.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7a1c1c1c1c1c%3A0x0!2sBahnhofstra%C3%9Fe+13%2C+85221+Dachau!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="300"
            style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Burgerhof Dachau Standort"
          />
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="font-heading text-xl font-bold text-gradient-gold mb-2">BURGERHOF DACHAU</p>
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Burgerhof Dachau. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">Impressum</Link>
            <span className="text-border">|</span>
            <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
