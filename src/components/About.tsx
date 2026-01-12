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
              Musical Chameleon & Master of Sonic Storytelling
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Hailing from Toronto's vibrant hip-hop and R&B circles, Mischa Chillak honed his production skills before making the leap to Los Angeles to explore film scoring. It was in the dynamic world of sync music where his talent truly blossomed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              With an innate ability to craft sounds that thrill and uplift, Mischa's music seamlessly heightens the visceral and emotional journeys of visual media. His compositions have brought kinetic energy to blockbusters like <em>Spider-Man: Across the Spider-Verse</em>, <em>Road House</em>, and <em>Baby Driver</em>, while his immersive scores have amplified titles such as <em>Deathloop</em>, <em>UFC</em>, and <em>FC'24</em>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A genre-defying artist, Mischa's evocative compositions have elevated campaigns for Fortune 500 brands like Apple, Microsoft, and Samsung, as well as the NBA, NHL, MLB, and NFL—injecting emotion and electricity into their media.
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
