import { motion, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tournament {
  id: number;
  month: string;
  date: string;
  title: string;
  prize: string;
  participants: string;
  location: string;
}

const tournaments: Tournament[] = [
  {
    id: 1,
    month: "JAN",
    date: "Jan 15-17",
    title: "Winter Classic",
    prize: "$10,000",
    participants: "128 players",
    location: "Vienna, Austria",
  },
  {
    id: 2,
    month: "MAR",
    date: "Mar 22-24",
    title: "Spring Masters",
    prize: "$25,000",
    participants: "256 players",
    location: "Barcelona, Spain",
  },
  {
    id: 3,
    month: "JUN",
    date: "Jun 10-13",
    title: "Grand Championship",
    prize: "$50,000",
    participants: "512 players",
    location: "London, UK",
  },
  {
    id: 4,
    month: "SEP",
    date: "Sep 5-8",
    title: "Autumn Invitational",
    prize: "$35,000",
    participants: "256 players",
    location: "Paris, France",
  },
  {
    id: 5,
    month: "DEC",
    date: "Dec 15-18",
    title: "Year-End Elite",
    prize: "$75,000",
    participants: "128 players",
    location: "Zurich, Switzerland",
  },
];

const TournamentTimeline = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tournament Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join elite players from around the world in our prestigious championship events.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative" ref={constraintsRef}>
          <motion.div
            className="flex gap-8 py-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: dragX }}
          >
            {tournaments.map((tournament, index) => {
              const isHovered = hoveredId === tournament.id;

              return (
                <motion.div
                  key={tournament.id}
                  className="relative min-w-[320px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  onHoverStart={() => setHoveredId(tournament.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <motion.div
                    className="bg-card border border-border rounded-lg overflow-hidden"
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      rotateY: isHovered ? 5 : 0,
                      y: isHovered ? -10 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: isHovered
                        ? "0 20px 40px -8px hsl(var(--brass) / 0.3)"
                        : "0 4px 12px hsl(0 0% 0% / 0.1)",
                    }}
                  >
                    {/* Month badge */}
                    <div className="bg-gradient-brass text-background font-bold text-center py-3">
                      <span className="text-2xl">{tournament.month}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{tournament.date}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {tournament.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <Trophy className="w-5 h-5 text-brass" />
                          <span className="text-foreground font-semibold">
                            {tournament.prize}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-brass" />
                          <span className="text-muted-foreground">
                            {tournament.participants}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          📍 {tournament.location}
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          className="w-full bg-brass hover:bg-brass-dark text-background font-semibold"
                          size="lg"
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          ← Drag to explore more tournaments →
        </motion.p>
      </div>
    </section>
  );
};

export default TournamentTimeline;
