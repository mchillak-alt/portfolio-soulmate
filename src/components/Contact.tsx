import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium mb-6 block">
              Get In Touch
            </span>
            <h2 className="font-main text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-10">
              Let's work together
            </h2>

            <div className="space-y-6">
              <div>
                <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">
                  Email
                </span>
                <a
                  href="mailto:info@mischachillak.com"
                  className="text-foreground text-lg hover:text-primary transition-colors"
                >
                  info@mischachillak.com
                </a>
              </div>
              <div>
                <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">
                  Location
                </span>
                <span className="text-foreground text-lg">Los Angeles, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="text-muted-foreground text-sm uppercase tracking-widest block mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border py-4 text-foreground text-lg focus:border-primary outline-none transition-colors placeholder:text-muted-foreground/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-muted-foreground text-sm uppercase tracking-widest block mb-3"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border py-4 text-foreground text-lg focus:border-primary outline-none transition-colors placeholder:text-muted-foreground/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-muted-foreground text-sm uppercase tracking-widest block mb-3"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border py-4 text-foreground text-lg focus:border-primary outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Send Message
              <span>→</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
