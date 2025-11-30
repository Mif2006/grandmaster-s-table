import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Zap, Lock } from "lucide-react";
import board1 from "@/assets/futuristic-chess-2.jpg";
import board2 from "@/assets/futuristic-chess-4.jpg";
import board3 from "@/assets/futuristic-chess-6.jpg";
import board4 from "@/assets/futuristic-chess-8.jpg";

const features = [
  {
    id: 1,
    image: board1,
    icon: Shield,
    title: "Fortified Defense Matrix",
    description: "Military-grade encryption with quantum-resistant protocols",
    stats: ["256-bit AES", "Neural Shield", "Auto-Defense"],
  },
  {
    id: 2,
    image: board2,
    icon: Cpu,
    title: "Neural Processing Core",
    description: "AI-powered move prediction with machine learning optimization",
    stats: ["10M+ Calculations/s", "Deep Learning", "Pattern Recognition"],
  },
  {
    id: 3,
    image: board3,
    icon: Zap,
    title: "Kinetic Response System",
    description: "Lightning-fast input processing with haptic feedback",
    stats: ["<1ms Latency", "Tactile Response", "Motion Tracking"],
  },
  {
    id: 4,
    image: board4,
    icon: Lock,
    title: "Secure Protocol Suite",
    description: "End-to-end encrypted communication with blockchain verification",
    stats: ["Zero-Knowledge", "Blockchain", "Secure Vault"],
  },
];

const ParallaxStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            System Specifications
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Advanced features engineered for tactical supremacy
          </p>
        </motion.div>

        <div className="space-y-40">
          {features.map((feature, index) => {
            const yStart = index * 100;
            const yEnd = (index + 1) * 100;
            
            const y = useTransform(
              scrollYProgress,
              [yStart / 400, yEnd / 400],
              [100, -100]
            );
            
            const opacity = useTransform(
              scrollYProgress,
              [yStart / 400, (yStart + 30) / 400, (yEnd - 20) / 400, yEnd / 400],
              [0, 1, 1, 0]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [yStart / 400, (yStart + 30) / 400, (yEnd - 20) / 400, yEnd / 400],
              [0.8, 1, 1, 0.8]
            );

            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                style={{ opacity, scale }}
                className="relative"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12`}
                >
                  {/* Image side with parallax */}
                  <motion.div
                    style={{ y }}
                    className="w-full md:w-1/2 relative group"
                  >
                    <div className="relative rounded-2xl overflow-hidden border-2 border-cyber-cyan/30">
                      {/* Glass container */}
                      <div className="absolute inset-0 bg-glass-bg/40 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[400px] object-cover"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-transparent to-cyber-orange/20" />
                      
                      {/* Scanline effect */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6, 182, 212, 0.1) 3px, rgba(6, 182, 212, 0.1) 6px)",
                        }}
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Corner brackets */}
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-cyan" />
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyber-cyan" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-orange" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-orange" />
                    </div>

                    {/* Floating glow effect */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-cyber opacity-20 blur-3xl -z-10"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Content side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Icon with glow */}
                      <div className="relative inline-block mb-6">
                        <motion.div
                          className="absolute inset-0 bg-cyber-cyan/30 blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative p-4 rounded-xl bg-glass-bg/50 backdrop-blur-xl border border-cyber-cyan/30">
                          <Icon className="w-8 h-8 text-cyber-cyan" />
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {feature.stats.map((stat, statIndex) => (
                          <motion.div
                            key={statIndex}
                            className="relative p-4 rounded-lg bg-glass-bg/30 backdrop-blur-xl border border-border/50 group hover:border-cyber-cyan/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + statIndex * 0.1 }}
                          >
                            <div className="absolute top-2 right-2 w-2 h-2 bg-cyber-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <p className="text-xs text-cyber-cyan font-mono text-center">
                              {stat}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech readout */}
                      <motion.div
                        className="mt-6 p-4 rounded-lg bg-metal-dark/30 border-l-2 border-cyber-cyan/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-xs text-muted-foreground font-mono">
                          STATUS: <span className="text-cyber-cyan">OPERATIONAL</span> • 
                          UPTIME: <span className="text-cyber-cyan">99.99%</span> • 
                          LATENCY: <span className="text-cyber-cyan">&lt;1ms</span>
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParallaxStack;
