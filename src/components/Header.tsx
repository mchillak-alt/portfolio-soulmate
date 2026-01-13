import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-16 py-6 lg:py-8 bg-background">
      <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <a 
          href="#" 
          className="text-lg lg:text-xl font-normal tracking-wide text-foreground hover:opacity-70 transition-opacity duration-300"
        >
          mischa chillak
        </a>

        {/* Menu button */}
        <button
          onClick={onMenuOpen}
          className="flex items-center gap-4 group"
        >
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors duration-300 hidden sm:block">
            Menu
          </span>
          <div className="grid grid-cols-3 gap-[3px] group-hover:gap-[4px] transition-all duration-300">
            {[...Array(9)].map((_, i) => (
              <span 
                key={i} 
                className="w-[3px] h-[3px] rounded-full bg-foreground group-hover:bg-primary transition-colors duration-300"
              />
            ))}
          </div>
        </button>
      </nav>
    </header>
  );
}

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Credits", href: "#credits" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "MCP Audio Library", href: "https://mischa-chillak.sellfy.store/", external: true },
];

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 lg:top-8 right-4 sm:right-8 lg:right-16 p-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            <X size={24} strokeWidth={1.5} />
          </motion.button>

          {/* Menu items */}
          <nav className="flex flex-col items-center gap-2 lg:gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={item.external ? undefined : onClose}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.08,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className={`font-light text-foreground hover:text-primary transition-colors duration-300 tracking-tight ${
                    item.external 
                      ? "text-xl sm:text-2xl lg:text-3xl mt-6 opacity-70 hover:opacity-100" 
                      : "text-5xl sm:text-6xl lg:text-8xl"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
          </nav>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-8 left-4 sm:left-8 lg:left-16 right-4 sm:right-8 lg:right-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <div className="text-muted-foreground text-xs tracking-wide space-y-1">
              <p className="hover:text-foreground transition-colors cursor-pointer">hello@colega.studio</p>
              <p className="hover:text-foreground transition-colors cursor-pointer">+1 234 567 890</p>
            </div>
            <div className="flex gap-6 text-muted-foreground text-xs tracking-wide">
              <a href="#" className="hover:text-foreground transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">Behance</a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">Dribbble</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
