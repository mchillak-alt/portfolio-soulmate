import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "150+", label: "Projects Completed" },
  { number: "45+", label: "Happy Clients" },
  { number: "12", label: "Awards Won" },
];

const exhibitions = [
  "The Design Award 2024",
  "Creative Excellence NY",
  "Director Club Europe",
  "Nature & Identity Berlin",
  "Digital Arts Festival",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label block mb-6"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-8"
            >
              Over 10 Years
              <br />
              In The Game
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-body leading-relaxed mb-10"
            >
              We are a creative agency that transforms visions into digital
              realities. Our passion lies in crafting unique experiences that
              resonate with audiences and elevate brands to new heights. Every
              project is an opportunity to push creative boundaries.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <span className="font-display text-4xl md:text-5xl block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="section-label block mb-6"
            >
              Exhibitions
            </motion.span>

            <div className="space-y-0">
              {exhibitions.map((exhibition, index) => (
                <motion.a
                  key={exhibition}
                  href="#"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group flex items-center justify-between py-5 border-b border-foreground/10 hover:border-foreground/30 transition-colors"
                >
                  <span className="font-body text-lg group-hover:translate-x-2 transition-transform">
                    {exhibition}
                  </span>
                  <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
