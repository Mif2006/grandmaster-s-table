import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBackground from "@/assets/hero-chess-background.png";
import heroChessPiece from "@/assets/hero-chess-piece.png";
import { Button } from "@/components/ui/button";
import { Crown, Sword, Shield, Target } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background image - Layer 1 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Center text "CHECK" - Layer 2 */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <h1
          className="text-[8rem] md:text-[14rem] lg:text-[20rem] font-bold tracking-wider"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.3)",
          }}
        >
          CHECK
        </h1>
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
        className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 flex gap-4"
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

      {/* Bottom right status indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20"
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

      {/* Chess piece overlay - Layer 3 (top) - exact same size and position as background */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroChessPiece})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
