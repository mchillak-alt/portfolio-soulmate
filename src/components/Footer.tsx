import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-20 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="font-display text-3xl tracking-wider block mb-6">
              MANON
            </a>
            <p className="font-body text-muted-foreground leading-relaxed">
              A creative agency dedicated to crafting exceptional digital
              experiences that leave lasting impressions.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label block mb-6">Navigation</span>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label block mb-6">Follow Us</span>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-body text-sm text-muted-foreground">
            © 2024 Manon Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
