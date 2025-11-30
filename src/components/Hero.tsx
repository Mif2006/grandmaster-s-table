import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBackground from "@/assets/hero-dystopian.jpg";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const parallaxY = useTransform(mouseY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Light vignette only */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30" />
      </motion.div>

      {/* Minimal glow accent */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_80%)]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main title - Unique arrangement */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="flex flex-col items-center gap-2 md:gap-4">
            {/* NEX on top */}
            <motion.div
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 
                className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold tracking-wider"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--cyber-cyan)) 0%, hsl(var(--cyber-blue)) 100%)",
                  backgroundSize: "200% 200%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 80px rgba(6, 182, 212, 0.6)",
                  animation: "gradient 4s ease infinite",
                }}
              >
                NEX
              </h1>
            </motion.div>
            
            {/* US on bottom, offset */}
            <motion.div
              className="relative -mt-4 md:-mt-8 lg:-mt-12"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 
                className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold tracking-[0.5em] pl-8 md:pl-16"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--cyber-blue)) 0%, hsl(var(--cyber-cyan)) 100%)",
                  backgroundSize: "200% 200%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 80px rgba(6, 182, 212, 0.6)",
                  animation: "gradient 4s ease infinite reverse",
                }}
              >
                US
              </h1>
            </motion.div>
          </div>

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-20"
            animate={{
              opacity: [0, 0.3, 0],
              x: [0, -3, 3, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold tracking-wider text-cyber-cyan">
                NEX
              </h1>
              <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold tracking-[0.5em] pl-8 md:pl-16 text-cyber-cyan -mt-4 md:-mt-8 lg:-mt-12">
                US
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-cyber hover:opacity-90 text-background font-bold px-12 py-8 text-xl transition-all duration-300 hover:scale-105 border-0 font-mono"
            style={{
              boxShadow: "0 0 60px rgba(6, 182, 212, 0.5)",
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              ENTER SYSTEM
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
