import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import board1 from "@/assets/board-topview-1.jpg";
import board2 from "@/assets/board-angle-2.jpg";
import board3 from "@/assets/board-modern-3.jpg";
import board4 from "@/assets/board-marble-4.jpg";
import board5 from "@/assets/board-inlay-5.jpg";

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
    name: "Classic Walnut",
    price: "$850",
    image: board1,
    specs: "Walnut & Maple • 20\" • Brass inlay",
  },
  {
    id: 2,
    name: "Ebony Elite",
    price: "$1,200",
    image: board2,
    specs: "Ebony & Maple • 22\" • Gold accents",
  },
  {
    id: 3,
    name: "Carbon Moderne",
    price: "$1,450",
    image: board3,
    specs: "Carbon Fiber • 21\" • Titanium edges",
  },
  {
    id: 4,
    name: "Marble Luxe",
    price: "$2,100",
    image: board4,
    specs: "Italian Marble • 24\" • Brass frame",
  },
  {
    id: 5,
    name: "Artisan Inlay",
    price: "$1,800",
    image: board5,
    specs: "Mahogany • 23\" • Custom inlay",
  },
];

const FanProductCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-brass via-transparent to-brass" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each board is a unique piece of functional art, crafted by master woodworkers.
          </p>
        </motion.div>

        {/* Fan layout container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {products.map((product, index) => {
            const totalCards = products.length;
            const angle = (index - (totalCards - 1) / 2) * 12; // Spread across ~48 degrees
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
                  y: isHovered ? -40 : 0,
                  scale: isHovered ? 1.15 : isOtherHovered ? 0.9 : 1,
                  x: isOtherHovered ? (index < 2 ? -30 : index > 2 ? 30 : 0) : 0,
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
                  className="relative bg-card rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  style={{
                    width: isHovered ? "320px" : "80px",
                    height: "480px",
                  }}
                  animate={{
                    filter: isOtherHovered ? "blur(2px)" : "blur(0px)",
                  }}
                >
                  {/* Edge view (collapsed state) */}
                  {!isHovered && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-wood-light to-wood-dark border-r border-brass/30">
                      <div className="rotate-90 whitespace-nowrap">
                        <p className="text-xs font-semibold text-brass mb-1">
                          {product.price}
                        </p>
                        <div className="w-8 h-8 mx-auto border-2 border-brass/50 rounded-sm" />
                      </div>
                    </div>
                  )}

                  {/* Full card (expanded state) */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      </div>

                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {product.specs}
                          </p>
                        </div>

                        <div>
                          <p className="text-3xl font-bold text-brass mb-4">
                            {product.price}
                          </p>
                          <Button
                            className="w-full bg-brass hover:bg-brass-dark text-background font-semibold transition-all duration-300 hover:scale-105"
                            size="lg"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Hover over cards to explore our collection
        </motion.p>
      </div>
    </section>
  );
};

export default FanProductCards;
