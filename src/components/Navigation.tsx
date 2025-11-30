import { motion } from "framer-motion";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-10 h-10 bg-gradient-brass rounded flex items-center justify-center">
            <span className="text-2xl">♔</span>
          </div>
          <span className="text-xl font-bold text-foreground">REGALIS</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#boards"
            className="text-foreground/80 hover:text-brass transition-colors duration-200 font-medium"
          >
            Boards
          </a>
          <a
            href="#tournaments"
            className="text-foreground/80 hover:text-brass transition-colors duration-200 font-medium"
          >
            Tournaments
          </a>
          <a
            href="#craft"
            className="text-foreground/80 hover:text-brass transition-colors duration-200 font-medium"
          >
            Craft
          </a>
          <a
            href="#about"
            className="text-foreground/80 hover:text-brass transition-colors duration-200 font-medium"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-brass/10 hover:text-brass transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brass text-background text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-brass/10 hover:text-brass transition-all duration-200"
          >
            <User className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-brass/10 hover:text-brass transition-all duration-200"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
