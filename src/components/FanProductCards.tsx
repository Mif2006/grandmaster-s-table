import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import board1 from "@/assets/futuristic-chess-1.jpg";
import board2 from "@/assets/futuristic-chess-2.jpg";
import board3 from "@/assets/futuristic-chess-3.jpg";
import board4 from "@/assets/futuristic-chess-4.jpg";
import board5 from "@/assets/futuristic-chess-5.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  specs: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cyber Warfare",
    price: "$2,850",
    image: board1,
    specs: "AI-Enhanced • Holographic Pieces • Neural Interface",
  },
  {
    id: 2,
    name: "Quantum Gambit",
    price: "$3,200",
    image: board2,
    specs: "Quantum Computing • Particle Effects • AI Opponent",
  },
  {
    id: 3,
    name: "Neural Knight",
    price: "$2,450",
    image: board3,
    specs: "Mechanical Parts • Weathered Finish • LED Accents",
  },
  {
    id: 4,
    name: "Dystopian King",
    price: "$3,100",
    image: board4,
    specs: "Industrial Design • Glow Effects • Smart Board",
  },
  {
    id: 5,
    name: "Apex Protocol",
    price: "$2,800",
    image: board5,
    specs: "Robotic Pieces • Cyber Interface • Touch Controls",
  },
];

const FanProductCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-orange/5" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Neural Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered boards engineered for the future of strategic warfare.
          </p>
        </motion.div>

        {/* Fan layout container */}
        <div className="relative h-[700px] md:h-[800px] flex items-center justify-center">
          {products.map((product, index) => {
            const totalCards = products.length;
            const angle = (index - (totalCards - 1) / 2) * 12;
            const isHovered = hoveredId === product.id;
            const isOtherHovered = hoveredId !== null && hoveredId !== product.id;

            return (
              <motion.div
                key={product.id}
                className="absolute"
                style={{
                  transformOrigin: "bottom center",
                  zIndex: isHovered ? 50 : totalCards - Math.abs(index - 2),
                }}
                initial={{
                  rotate: angle,
                  y: 0,
                }}
                animate={{
                  rotate: isHovered ? 0 : angle,
                  y: isHovered ? -50 : 0,
                  scale: isHovered ? 1.1 : isOtherHovered ? 0.85 : 1,
                  x: isOtherHovered ? (index < 2 ? -40 : index > 2 ? 40 : 0) : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                onHoverStart={() => setHoveredId(product.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div
                  className="relative bg-card/80 backdrop-blur-xl rounded-lg overflow-hidden shadow-2xl cursor-pointer border border-border/50"
                  style={{
                    width: "320px",
                    height: "500px",
                    boxShadow: isHovered 
                      ? "0 0 60px rgba(6, 182, 212, 0.4)" 
                      : "0 20px 50px rgba(0, 0, 0, 0.5)",
                  }}
                  animate={{
                    filter: isOtherHovered ? "blur(3px)" : "blur(0px)",
                  }}
                >
                  {/* Glass morphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/10 via-transparent to-cyber-orange/10 pointer-events-none" />
                  
                  {/* Full card content */}
                  <div className="relative h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      
                      {/* Cyber grid overlay */}
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between relative">
                      {/* Corner accents */}
                      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyber-cyan/30" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyber-orange/30" />
                      
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                          {product.name}
                          <span className="text-xs text-cyber-cyan">●</span>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 font-mono">
                          {product.specs}
                        </p>
                      </div>

                      <div>
                        <p className="text-3xl font-bold text-cyber-cyan mb-4 flex items-baseline gap-2">
                          {product.price}
                          <span className="text-xs text-muted-foreground font-normal">USD</span>
                        </p>
                        <Button
                          className="w-full bg-gradient-cyber hover:opacity-90 text-background font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-0"
                          size="lg"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Acquire System
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12 font-mono"
        >
          [ HOVER TO ENHANCE SYSTEM DETAILS ]
        </motion.p>
      </div>
    </section>
  );
};

export default FanProductCards;
