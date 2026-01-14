import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium mb-6 block">
              About
            </span>
            <h2 className="font-main text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Mischa Chillak
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Mischa Chillak is a Los Angeles–based producer and composer whose work lives at the intersection of emotion, rhythm, and visual storytelling.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Raised in Toronto's hip-hop and R&B scene, Mischa developed an instinct for feel and groove long before turning toward film and sync, where those same instincts found a natural home. His music is shaped less by genre and more by emotional intent—built to move with picture, enhance story, and leave space for what matters on screen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Mischa's compositions have appeared across film, games, sports, and global campaigns, bringing energy and atmosphere to projects ranging from <em>Spider-Man: Across the Spider-Verse</em> and <em>Baby Driver</em> to major brand and sports collaborations. Whether kinetic or restrained, his work is guided by a sensitivity to tone and context, allowing the music to support the moment without overpowering it.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At its core, Mischa's approach is about connection—creating music that feels alive, grounded, and emotionally honest, while fitting naturally into the world it inhabits.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">Learn More</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "23", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <span className="font-main text-4xl md:text-5xl font-medium text-primary block mb-2">
                  {stat.number}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
