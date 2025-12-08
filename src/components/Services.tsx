import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We develop comprehensive brand strategies that define your unique identity and position you for success in the market.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful digital experiences that engage users and drive meaningful interactions.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Building high-performance websites and applications using cutting-edge technologies and best practices.",
  },
  {
    number: "04",
    title: "Creative Direction",
    description:
      "Guiding your creative vision from concept to execution with expert art direction and strategic thinking.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label block mb-6 text-primary-foreground/60"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9]"
          >
            Turning Agency Work Into Pure Art
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl md:text-6xl text-primary-foreground/30 group-hover:text-primary-foreground/60 transition-colors">
                  {service.number}
                </span>
                <div className="pt-3">
                  <h3 className="font-display text-2xl md:text-3xl uppercase mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-primary-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
