import { motion } from "framer-motion";
import { useState } from "react";
import { Zap } from "lucide-react";
import board1 from "@/assets/futuristic-chess-1.jpg";
import board2 from "@/assets/futuristic-chess-3.jpg";
import board3 from "@/assets/futuristic-chess-5.jpg";
import board4 from "@/assets/futuristic-chess-7.jpg";
import board5 from "@/assets/futuristic-chess-9.jpg";
import board6 from "@/assets/futuristic-chess-10.jpg";

const items = [
  { id: 1, image: board1, title: "Cyberlink Alpha", stat: "99.7% Win Rate" },
  { id: 2, image: board2, title: "Neural Nexus", stat: "2.3ms Response" },
  { id: 3, image: board3, title: "Quantum Breach", stat: "AI Level 9" },
  { id: 4, image: board4, title: "Plasma Core", stat: "Infinite Games" },
  { id: 5, image: board5, title: "Volt Knight", stat: "Tournament Grade" },
  { id: 6, image: board6, title: "Strike Protocol", stat: "Pro Certified" },
];

const SpinningGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Neural Gallery
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Rotating selection of elite combat systems
          </p>
        </motion.div>

        {/* Circular spinning gallery */}
        <div className="relative h-[700px] flex items-center justify-center">
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-full bg-gradient-cyber opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {items.map((item, index) => {
            const angle = (index / items.length) * 360;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  transformOrigin: "center",
                }}
                animate={{
                  rotate: isHovered ? angle : angle + 360,
                }}
                transition={{
                  duration: isHovered ? 0 : 20,
                  ease: "linear",
                  repeat: isHovered ? 0 : Infinity,
                }}
              >
                <motion.div
                  style={{
                    x: 250,
                  }}
                  animate={{
                    scale: isHovered ? 1.3 : 1,
                    rotate: isHovered ? -angle : -angle - 360,
                  }}
                  transition={{
                    duration: isHovered ? 0.3 : 20,
                    ease: isHovered ? "easeOut" : "linear",
                    repeat: isHovered ? 0 : Infinity,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <motion.div
                    className="relative w-48 h-48 rounded-xl overflow-hidden border-2 cursor-pointer group"
                    style={{
                      borderColor: isHovered ? "hsl(var(--cyber-cyan))" : "hsl(var(--border))",
                      background: "rgba(var(--glass-bg) / 0.6)",
                      backdropFilter: "blur(12px)",
                      boxShadow: isHovered
                        ? "0 0 60px rgba(6, 182, 212, 0.6)"
                        : "0 10px 40px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-transparent to-cyber-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Content - shown on hover */}
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-8 h-8 text-cyber-cyan mb-2" />
                      <h3 className="text-lg font-bold text-foreground text-center mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-cyber-cyan font-mono">{item.stat}</p>
                      
                      {/* Animated border */}
                      <motion.div
                        className="absolute inset-0 border-2 border-cyber-cyan rounded-xl"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyber-cyan/50" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyber-cyan/50" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyber-orange/50" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyber-orange/50" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center logo/text */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            animate={{
              opacity: hoveredIndex === null ? 1 : 0.3,
            }}
          >
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-16 h-16 text-cyber-cyan mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                NEURAL CORE
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                HOVER TO SCAN
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpinningGallery;
