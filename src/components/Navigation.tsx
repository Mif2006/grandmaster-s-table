import { motion } from "framer-motion";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
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
          <div className="w-10 h-10 bg-cyber-cyan/20 backdrop-blur-sm rounded flex items-center justify-center border border-cyber-cyan/30">
            <span className="text-2xl">♔</span>
          </div>
          <span className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">REGALIS</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#boards"
            className="text-white/90 hover:text-cyber-cyan transition-colors duration-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Boards
          </a>
          <a
            href="#tournaments"
            className="text-white/90 hover:text-cyber-cyan transition-colors duration-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Tournaments
          </a>
          <a
            href="#craft"
            className="text-white/90 hover:text-cyber-cyan transition-colors duration-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Craft
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-cyber-cyan transition-colors duration-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-cyber-cyan/20 hover:text-cyber-cyan transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-cyan text-background text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-cyber-cyan/20 hover:text-cyber-cyan transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <User className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-cyber-cyan/20 hover:text-cyber-cyan transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
