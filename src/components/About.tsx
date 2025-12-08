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
              About Us
            </span>
            <h2 className="font-main text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              We are a creative studio based in New York
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Colega is a creative studio that specializes in crafting unique digital
              experiences. We combine innovative design with cutting-edge technology
              to deliver exceptional results for our clients worldwide.
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
              { number: "45+", label: "Happy Clients" },
              { number: "12", label: "Awards Won" },
              { number: "8", label: "Years Experience" },
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
