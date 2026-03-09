import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import burgerImg from "@/assets/burger-category.jpg";
import grillImg from "@/assets/grill-category.jpg";
import coffeeImg from "@/assets/coffee-category.jpg";
import breakfastImg from "@/assets/breakfast-category.jpg";
import drinksImg from "@/assets/drinks-category.jpg";

const categories = [
  { name: "Burger", desc: "Hausgemacht & Smashburger", image: burgerImg },
  { name: "Vom Grill", desc: "Adana Kebab & Köfte", image: grillImg },
  { name: "Kaffee & ToGo", desc: "Frisch gebrüht", image: coffeeImg },
  { name: "Frühstück", desc: "Simit & belegte Brötchen", image: breakfastImg },
  { name: "Getränke", desc: "Kalt & erfrischend", image: drinksImg },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Unsere Vielfalt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Speisekarte
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Von saftigen Burgern bis zur orientalischen Küche — für jeden Geschmack das Richtige
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="https://shop-burgerhofdachau.de/burgerhof-dachau/delivery?scroll-to-menu=true"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-card"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{cat.desc}</p>
              </div>
              <div className="absolute top-4 right-4 bg-primary/0 group-hover:bg-primary/100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
