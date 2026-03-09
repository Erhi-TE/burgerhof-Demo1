import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl font-bold tracking-wide">
            <span className="text-gradient-gold">BURGERHOF</span>
            <span className="text-foreground text-sm ml-2 font-body font-light tracking-widest uppercase">Dachau</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
            <ArrowLeft size={16} /> Zurück
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 pt-28 pb-20 max-w-3xl"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-10">Impressum</h1>

        <div className="space-y-8 font-body text-foreground/90 leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Sema Simsek</p>
            <p>BurgerHof Dachau</p>
            <p>Bahnhofstraße 13</p>
            <p>85221 Dachau</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Kontakt</h2>
            <p>Telefon: <a href="tel:01746668800" className="text-primary hover:underline">01746668800</a></p>
            <p>E-Mail: <a href="mailto:info@burgerhof-dachau.de" className="text-primary hover:underline">info@burgerhof-dachau.de</a></p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-muted-foreground italic">folgt</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-border py-8 text-center">
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} Burgerhof Dachau. Alle Rechte vorbehalten. | <Link to="/datenschutz" className="text-primary hover:underline">Datenschutz</Link>
        </p>
      </div>
    </div>
  );
};

export default Impressum;
