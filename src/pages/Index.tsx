import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FanProductCards from "@/components/FanProductCards";
import OverlapCarousel from "@/components/OverlapCarousel";
import SpinningGallery from "@/components/SpinningGallery";
import ParallaxStack from "@/components/ParallaxStack";
import TournamentTimeline from "@/components/TournamentTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FanProductCards />
        <OverlapCarousel />
        <SpinningGallery />
        <ParallaxStack />
        <TournamentTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
