import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FanProductCards from "@/components/FanProductCards";
import TournamentTimeline from "@/components/TournamentTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FanProductCards />
        <TournamentTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
