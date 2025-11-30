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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Subtle vignette glow */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1 
            className="text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter"
            style={{
              background: "linear-gradient(135deg, hsl(var(--cyber-cyan)) 0%, hsl(var(--cyber-blue)) 50%, hsl(var(--cyber-cyan)) 100%)",
              backgroundSize: "200% 200%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 80px rgba(6, 182, 212, 0.5)",
              animation: "gradient 4s ease infinite",
            }}
          >
            NEXUS
          </h1>

          {/* Glitch overlay */}
          <motion.h1 
            className="absolute inset-0 text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter text-cyber-cyan opacity-20 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
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
            NEXUS
          </motion.h1>
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
