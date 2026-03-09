import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Flame } from "lucide-react";

const features = [
  { icon: Flame, title: "Hausgemacht", desc: "Alle Burger & Köfte frisch zubereitet" },
  { icon: Clock, title: "Schnell & Frisch", desc: "Abholung oder Lieferung direkt zu dir" },
  { icon: MapPin, title: "Mitten in Dachau", desc: "Bahnhofstraße 13, 85221 Dachau" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Über uns
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mehr als nur <br />
              <span className="text-gradient-gold">ein Burgerladen</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Im Burgerhof erwarten dich nicht nur saftige, hausgemachte Burger und knusprige
              Smashburger, sondern auch eine vielfältige Auswahl aus unserer orientalischen
              Küche — von würzigem Adana Kebab bis hin zu traditionellen, hausgemachten Köfte.
              Ob du Lust auf ein herzhaftes Frühstück, einen frischen Kaffee to go oder echtes
              Soulfood hast — wir haben genau das Richtige für dich.
            </p>
            <p className="font-heading text-lg text-foreground italic">
              Das Burgerhof Dachau Team freut sich auf Euren Besuch!
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-xl p-6 flex items-start gap-5 group hover:shadow-glow transition-shadow duration-300"
              >
                <div className="bg-gradient-gold w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <f.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
