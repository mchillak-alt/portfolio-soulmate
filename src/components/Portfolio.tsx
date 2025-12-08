import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    title: "Brand Identity",
    category: "Branding",
    image: portfolio1,
  },
  {
    title: "Digital Dashboard",
    category: "UI/UX Design",
    image: portfolio2,
  },
  {
    title: "Typography Art",
    category: "Graphic Design",
    image: portfolio3,
  },
  {
    title: "Luxury Packaging",
    category: "Product Design",
    image: portfolio4,
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label block mb-6"
            >
              Our Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9]"
            >
              Selected
              <br />
              Projects
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm uppercase tracking-widest link-underline self-start md:self-end"
          >
            View All Projects
          </motion.a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="portfolio-item group aspect-square"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content w-full">
                  <span className="text-primary-foreground/70 text-sm uppercase tracking-widest font-body block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-primary-foreground uppercase">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
