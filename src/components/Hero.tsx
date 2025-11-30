import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroBackground from "@/assets/hero-dystopian.jpg";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trophy, Zap, Terminal, Activity } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [time, setTime] = useState(new Date());

  const parallaxX = useTransform(mouseX, [-500, 500], [-20, 20]);
  const parallaxY = useTransform(mouseY, [-500, 500], [-20, 20]);

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

    const timer = setInterval(() => setTime(new Date()), 1000);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  const glitchText = "NEURAL WARFARE";
  const subText = "// AI-POWERED TACTICAL CHESS SYSTEMS";

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

      {/* Cyber grid overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.4) 2px, transparent 2px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.3) 2px, rgba(6, 182, 212, 0.3) 4px)",
        }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner HUD elements */}
      <div className="absolute top-8 left-8 z-20">
        <motion.div
          className="flex flex-col gap-2 p-4 bg-glass-bg/30 backdrop-blur-xl border border-cyber-cyan/30 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-cyber-cyan text-xs font-mono">
            <Activity className="w-4 h-4" />
            <span>STATUS: OPERATIONAL</span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            UPTIME: 99.99% • LATENCY: &lt;1ms
          </div>
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 z-20">
        <motion.div
          className="flex flex-col items-end gap-2 p-4 bg-glass-bg/30 backdrop-blur-xl border border-cyber-orange/30 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-xs text-cyber-orange font-mono">
            {time.toLocaleTimeString()}
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            NEURAL GRID v2.5.7
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Terminal prompt */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Terminal className="w-5 h-5 text-cyber-cyan" />
            <span className="text-cyber-cyan text-sm font-mono">root@chess-system:~$</span>
            <motion.span
              className="text-cyber-cyan text-sm font-mono"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Main title with glitch effect */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center mb-2">
              {glitchText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--cyber-cyan)) 0%, hsl(var(--cyber-blue)) 50%, hsl(var(--cyber-cyan)) 100%)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: i * 0.05 },
                    y: { duration: 0.3, delay: i * 0.05 },
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 50px rgba(6, 182, 212, 0.8)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Glitch overlay effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0, 0.3, 0],
                x: [0, -5, 5, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center text-cyber-cyan opacity-50"
                style={{ mixBlendMode: "screen" }}
              >
                {glitchText}
              </h1>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-cyber-cyan font-mono mb-4">
              {subText}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-enhanced chess systems engineered for tactical supremacy. 
              Neural networks meet mechanical precision.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: "AI Level", value: "9.7/10", icon: Zap },
              { label: "Win Rate", value: "99.3%", icon: Trophy },
              { label: "Response", value: "<1ms", icon: Activity },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <div className="px-6 py-3 bg-glass-bg/40 backdrop-blur-xl border border-cyber-cyan/30 rounded-lg hover:border-cyber-cyan/60 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-cyber-cyan" />
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-cyber-cyan font-mono">
                    {stat.value}
                  </p>
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-cyber opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-lg"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-cyber hover:opacity-90 text-background font-bold px-10 py-7 text-lg transition-all duration-300 hover:scale-105 border-0"
              style={{
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2 font-mono">
                <ShoppingCart className="w-5 h-5" />
                ACQUIRE SYSTEM
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 font-bold px-10 py-7 text-lg transition-all duration-300 hover:scale-105 bg-glass-bg/30 backdrop-blur-xl"
            >
              <span className="relative z-10 flex items-center gap-2 font-mono">
                <Trophy className="w-5 h-5" />
                JOIN TOURNAMENT
              </span>
              <motion.div
                className="absolute inset-0 border-2 border-cyber-cyan rounded-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
          </motion.div>

          {/* Data stream ribbon */}
          <motion.div
            className="mt-16 py-4 border-t border-b border-cyber-cyan/20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-sm md:text-base text-cyber-cyan/80 font-mono text-center tracking-wider"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              [ENCRYPTED] Neural cores manufactured in [REDACTED] • 500+ AI tournaments • Premium systems from $2,450 • [END TRANSMISSION]
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom corner details */}
      <div className="absolute bottom-8 left-8 z-20">
        <motion.div
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
          <span>SECURE CONNECTION ESTABLISHED</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <motion.div
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span>PROTOCOL: TLS 1.3</span>
          <div className="w-2 h-2 bg-cyber-orange rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
