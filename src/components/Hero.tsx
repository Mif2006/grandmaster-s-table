import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import woodGrain from "@/assets/wood-grain-hero.jpg";
import tournamentAerial from "@/assets/tournament-aerial.jpg";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trophy } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX1 = useTransform(mouseX, [-500, 500], [-15, 15]);
  const parallaxY1 = useTransform(mouseY, [-500, 500], [-15, 15]);
  const parallaxX2 = useTransform(mouseX, [-500, 500], [-30, 30]);
  const parallaxY2 = useTransform(mouseY, [-500, 500], [-30, 30]);

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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const letters = "CHECKMATE".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Layered parallax backgrounds */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: parallaxX1,
          y: parallaxY1,
          backgroundImage: `url(${woodGrain})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: parallaxX2,
          y: parallaxY2,
          backgroundImage: `url(${tournamentAerial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Hero word */}
        <motion.div
          className="mb-12 perspective-1000"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="inline-flex gap-1 md:gap-2">
            {letters.map((letter, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  rotateY: 15,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <span
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--brass)) 0%, hsl(var(--primary)) 50%, hsl(var(--brass-dark)) 100%)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 8px 24px hsl(var(--brass) / 0.3)",
                    filter: "drop-shadow(0 4px 12px hsl(0 0% 0% / 0.5))",
                  }}
                >
                  {letter}
                </span>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-brass opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Tournament-grade. Hand-crafted.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-brass hover:bg-brass-dark text-background font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--brass)/0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shop Boards
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
            className="group relative overflow-hidden border-2 border-brass text-brass hover:bg-brass hover:text-background font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Enter Tournament
            </span>
          </Button>
        </motion.div>

        {/* Microcopy ribbon */}
        <motion.div
          className="mt-16 py-4 border-t border-b border-border/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p
            className="text-sm md:text-base text-muted-foreground font-light tracking-wide"
            animate={{
              x: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Hand-carved in Europe • 120+ tournaments hosted • Bespoke boards from $850
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
