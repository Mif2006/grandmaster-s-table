import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import board1 from "@/assets/futuristic-chess-6.jpg";
import board2 from "@/assets/futuristic-chess-7.jpg";
import board3 from "@/assets/futuristic-chess-8.jpg";
import board4 from "@/assets/futuristic-chess-9.jpg";

const items = [
  {
    id: 1,
    image: board1,
    title: "Weathered Protocol",
    subtitle: "Battle-tested systems",
  },
  {
    id: 2,
    image: board2,
    title: "Spark Interface",
    subtitle: "Neural combat ready",
  },
  {
    id: 3,
    image: board3,
    title: "Impact Matrix",
    subtitle: "Kinetic engagement",
  },
  {
    id: 4,
    image: board4,
    title: "Glitch Warfare",
    subtitle: "Digital supremacy",
  },
];

const OverlapCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(6,182,212,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.2)_2px,transparent_2px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Combat Archives
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Documented engagements from the neural frontier
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Overlapping cards */}
          <div className="relative w-full max-w-4xl h-[500px]">
            {items.map((item, index) => {
              const offset = (index - currentIndex + items.length) % items.length;
              const isActive = offset === 0;
              const isPrev = offset === items.length - 1;
              const isNext = offset === 1;
              const isVisible = isActive || isPrev || isNext;

              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isActive ? 1 : 0.85,
                    x: isActive ? 0 : isNext ? 150 : isPrev ? -150 : 0,
                    z: isActive ? 50 : 0,
                    rotateY: isActive ? 0 : isNext ? -15 : isPrev ? 15 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 10 : 0,
                  }}
                >
                  <motion.div
                    className="relative w-[500px] h-[400px] rounded-xl overflow-hidden border border-cyber-cyan/30 shadow-2xl cursor-pointer"
                    style={{
                      background: "rgba(var(--card) / 0.7)",
                      backdropFilter: "blur(20px)",
                      boxShadow: isActive
                        ? "0 0 80px rgba(6, 182, 212, 0.4), inset 0 0 60px rgba(6, 182, 212, 0.1)"
                        : "0 20px 60px rgba(0, 0, 0, 0.5)",
                    }}
                    whileHover={{ scale: isActive ? 1.02 : 0.85 }}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-cyber-orange/10" />
                    
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Scanline effect */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)",
                      }}
                      animate={{
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                        <span className="text-xs text-cyber-cyan font-mono">ACTIVE</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                    
                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan/50" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/50" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-orange/50" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-orange/50" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-50 p-4 rounded-lg bg-glass-bg/50 backdrop-blur-xl border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-50 p-4 rounded-lg bg-glass-bg/50 backdrop-blur-xl border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative w-16 h-1 bg-border rounded-full overflow-hidden"
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-cyber"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverlapCarousel;
