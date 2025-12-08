import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-main text-xl font-medium tracking-tight text-foreground">
          colega<sup className="text-[10px] ml-0.5">™</sup>
        </a>

        {/* Right side - Menu button */}
        <div className="flex items-center gap-6">
          <button
            onClick={onMenuOpen}
            className="flex items-center gap-4 group"
          >
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block">
              Menu
            </span>
            <div className="menu-dots group-hover:opacity-70 transition-opacity">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
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
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fullscreen-menu"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 lg:right-12 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X size={28} />
          </button>

          {/* Menu items */}
          <nav className="flex flex-col items-center gap-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="font-main text-5xl md:text-7xl lg:text-8xl font-light text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
          >
            <div className="text-muted-foreground text-sm">
              <p>hello@colega.studio</p>
              <p>+1 234 567 890</p>
            </div>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">Behance</a>
              <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
