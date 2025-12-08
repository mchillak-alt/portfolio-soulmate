import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with this team has been an absolute game-changer for our brand. Their creative vision and attention to detail exceeded all expectations.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures",
  },
  {
    quote:
      "The level of professionalism and creativity they bring to every project is unmatched. They truly understand how to bring ideas to life.",
    author: "David Chen",
    role: "Founder, Innovate Labs",
  },
  {
    quote:
      "Their strategic approach to design thinking helped us completely transform our digital presence. Exceptional work from start to finish.",
    author: "Emma Williams",
    role: "Marketing Director, Nexus Co",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label block mb-12"
          >
            Testimonials
          </motion.span>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.1] mb-10">
              "{testimonials[current].quote}"
            </blockquote>

            <div className="font-body">
              <span className="block text-lg font-medium">
                {testimonials[current].author}
              </span>
              <span className="text-muted-foreground">
                {testimonials[current].role}
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "bg-foreground w-8"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
