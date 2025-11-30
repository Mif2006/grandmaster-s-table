import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBackground from "@/assets/futuristic-chess-7.jpg";
import { Button } from "@/components/ui/button";
import { Crown, Sword, Shield, Target } from "lucide-react";

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
      </motion.div>

      {/* Vertical text on the left */}
      <motion.div
        className="absolute left-8 md:left-16 top-8 z-10 flex flex-col items-center gap-1 md:gap-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {['G', 'A', 'M', 'E'].map((letter, index) => (
          <motion.div
            key={letter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1 + index * 0.1,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <h1
              className="text-7xl md:text-[12rem] lg:text-[16rem] font-bold leading-none"
              style={{
                background: "linear-gradient(180deg, hsl(var(--cyber-cyan)) 0%, hsl(var(--cyber-blue)) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 60px rgba(6, 182, 212, 0.4)",
              }}
            >
              {letter}
            </h1>
          </motion.div>
        ))}
      </motion.div>

      {/* Top right stats */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-16 z-10 flex flex-col gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-cyber-cyan" />
            <div>
              <p className="text-xs text-muted-foreground">Active Players</p>
              <p className="text-2xl font-bold text-foreground">12,847</p>
            </div>
          </div>
        </div>
        <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-cyber-orange" />
            <div>
              <p className="text-xs text-muted-foreground">Tournaments</p>
              <p className="text-2xl font-bold text-foreground">247</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom left quick actions */}
      <motion.div
        className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-10 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="bg-card/30 backdrop-blur-md border-border/50 hover:bg-card/50 transition-all duration-300 group"
        >
          <Sword className="w-5 h-5 mr-2 text-cyber-cyan group-hover:rotate-12 transition-transform duration-300" />
          Play Now
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-card/30 backdrop-blur-md border-border/50 hover:bg-card/50 transition-all duration-300 group"
        >
          <Shield className="w-5 h-5 mr-2 text-cyber-orange group-hover:scale-110 transition-transform duration-300" />
          Learn
        </Button>
      </motion.div>

      {/* Bottom center live activity feed */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:bottom-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg px-6 py-4 min-w-[300px]">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-2 h-2 rounded-full bg-cyber-cyan"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div>
                <p className="text-xs text-muted-foreground font-mono">LIVE MATCH</p>
                <p className="text-sm font-bold text-foreground">Magnus vs Hikaru</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-mono">MOVE 24</p>
              <p className="text-sm font-bold text-cyber-orange">2,847 watching</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom right status indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-16 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 flex items-center gap-3">
          <motion.div
            className="w-3 h-3 rounded-full bg-cyber-cyan"
            animate={{
              boxShadow: [
                "0 0 0px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.8)",
                "0 0 0px rgba(6, 182, 212, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-foreground">SYSTEM ONLINE</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
