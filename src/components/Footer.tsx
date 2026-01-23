import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  { name: "Instagram", href: "#" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-16 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Logo */}
          <a href="#" className="text-xs lg:text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:opacity-70 transition-opacity duration-300">
            Mischa Chillak
          </a>

          {/* Social links */}
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            ©2024 Mischa Chillak. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
