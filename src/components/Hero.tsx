import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import abstractPattern from "@/assets/abstract-pattern.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden pt-20"
    >
      {/* Background decorative circle */}
      <div className="deco-circle w-[600px] h-[600px] -right-48 top-1/2 -translate-y-1/2 opacity-30 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label block mb-6"
            >
              Creative Agency
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="headline-display mb-8"
            >
              <span className="block">Envision</span>
              <span className="block">The Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-muted-foreground text-lg max-w-md mb-10"
            >
              We craft digital experiences that push boundaries and transform
              brands into memorable stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Explore Work
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Image Composition */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative z-10 bg-secondary">
                <img
                  src={heroImage}
                  alt="Creative professional with VR headset"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Abstract pattern overlay */}
              <div className="absolute -right-20 -top-16 w-48 h-64 z-20">
                <img
                  src={abstractPattern}
                  alt="Abstract geometric pattern"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circle */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-80 h-80 border border-foreground/20 rounded-full -z-10" />

              {/* Corner accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary z-0" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-6 lg:left-12 bottom-12 hidden md:flex items-center gap-4"
      >
        <div className="w-px h-16 bg-foreground/30 animate-draw-line" />
        <span className="scroll-indicator">Scroll down</span>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6"
      >
        {["Fb", "In", "Tw", "Be"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {social}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
