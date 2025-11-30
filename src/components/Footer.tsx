import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-brass rounded flex items-center justify-center">
                <span className="text-2xl">♔</span>
              </div>
              <span className="text-xl font-bold text-foreground">REGALIS</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Handcrafted chess boards and tournament hosting for the elite player.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-brass/10 hover:text-brass"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-brass/10 hover:text-brass"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-brass/10 hover:text-brass"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Classic Boards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Limited Editions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Custom Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Tournaments */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Tournaments</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Past Champions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-brass transition-colors"
                >
                  Rules & Formats
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get early tournament codes & limited drops.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted border-border"
              />
              <Button
                size="icon"
                className="bg-brass hover:bg-brass-dark text-background shrink-0"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Regalis. Hand-carved with precision.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-brass transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-brass transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-brass transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
