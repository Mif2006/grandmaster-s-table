import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg1 from "@/assets/tournament-bg-1.jpg";
import bg2 from "@/assets/tournament-bg-2.jpg";
import bg3 from "@/assets/tournament-bg-3.jpg";

interface Tournament {
  id: number;
  month: string;
  date: string;
  title: string;
  prize: string;
  participants: string;
  location: string;
  background: string;
}

const tournaments: Tournament[] = [
  {
    id: 1,
    month: "JAN",
    date: "Jan 15-17",
    title: "Neural Warfare Alpha",
    prize: "$50,000",
    participants: "256 systems",
    location: "Tokyo Cyber Arena",
    background: bg1,
  },
  {
    id: 2,
    month: "MAR",
    date: "Mar 22-24",
    title: "Quantum Protocol",
    prize: "$75,000",
    participants: "512 systems",
    location: "Berlin Tech District",
    background: bg2,
  },
  {
    id: 3,
    month: "JUN",
    date: "Jun 10-13",
    title: "AI Championships",
    prize: "$100,000",
    participants: "1024 systems",
    location: "Singapore Neural Hub",
    background: bg3,
  },
  {
    id: 4,
    month: "SEP",
    date: "Sep 5-8",
    title: "Cyber Invitational",
    prize: "$85,000",
    participants: "512 systems",
    location: "London Grid Center",
    background: bg1,
  },
  {
    id: 5,
    month: "DEC",
    date: "Dec 15-18",
    title: "Year-End Nexus",
    prize: "$150,000",
    participants: "256 elite systems",
    location: "NYC Virtual Arena",
    background: bg2,
  },
];

// Duplicate tournaments for infinite loop
const infiniteTournaments = [...tournaments, ...tournaments, ...tournaments];

const TournamentTimeline = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tournament Circuit
          </h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Elite AI-powered chess warfare events across the neural grid
          </p>
        </motion.div>

        {/* Infinite carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -((tournaments.length * 360) + (tournaments.length * 24))],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {infiniteTournaments.map((tournament, index) => {
              const isHovered = hoveredId === `${tournament.id}-${index}`;

              return (
                <motion.div
                  key={`${tournament.id}-${index}`}
                  className="relative min-w-[360px] flex-shrink-0"
                  onHoverStart={() => setHoveredId(`${tournament.id}-${index}`)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <motion.div
                    className="relative bg-card/80 backdrop-blur-xl border border-cyber-cyan/30 rounded-lg overflow-hidden h-[480px]"
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      y: isHovered ? -10 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      boxShadow: isHovered
                        ? "0 0 60px rgba(6, 182, 212, 0.4)"
                        : "0 10px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={tournament.background}
                        alt={tournament.title}
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                    </div>

                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-cyber-orange/10" />

                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan/50" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/50" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-orange/50" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-orange/50" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-6">
                      {/* Month badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-cyber text-background font-bold px-4 py-2 rounded-lg mb-4 self-start">
                        <Zap className="w-4 h-4" />
                        <span className="text-lg font-mono">{tournament.month}</span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-cyber-cyan mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono">{tournament.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {tournament.title}
                      </h3>

                      {/* Spacer */}
                      <div className="flex-1" />

                      {/* Stats */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-glass-bg/40 backdrop-blur-xl rounded-lg border border-border/30">
                          <Trophy className="w-5 h-5 text-cyber-cyan" />
                          <div>
                            <p className="text-xs text-muted-foreground font-mono">PRIZE POOL</p>
                            <p className="text-lg font-bold text-cyber-cyan font-mono">
                              {tournament.prize}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-glass-bg/40 backdrop-blur-xl rounded-lg border border-border/30">
                          <Users className="w-5 h-5 text-cyber-orange" />
                          <div>
                            <p className="text-xs text-muted-foreground font-mono">PARTICIPANTS</p>
                            <p className="text-sm font-semibold text-foreground font-mono">
                              {tournament.participants}
                            </p>
                          </div>
                        </div>
                        <div className="p-3 bg-glass-bg/40 backdrop-blur-xl rounded-lg border border-border/30">
                          <p className="text-xs text-muted-foreground font-mono mb-1">LOCATION</p>
                          <p className="text-sm font-semibold text-foreground">
                            {tournament.location}
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          className="w-full bg-gradient-cyber hover:opacity-90 text-background font-bold font-mono border-0"
                          size="lg"
                          style={{
                            boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                          }}
                        >
                          REGISTER NOW
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground font-mono mt-12"
        >
          [ AUTO-SCROLLING TOURNAMENT FEED • HOVER TO INSPECT ]
        </motion.p>
      </div>
    </section>
  );
};

export default TournamentTimeline;
