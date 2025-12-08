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
    <section id="contact" className="py-32" ref={ref}>
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
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-8"
            >
              Let's Work
              <br />
              Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-body leading-relaxed mb-12 max-w-md"
            >
              Have a project in mind? We'd love to hear about it. Drop us a
              line and let's create something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <span className="section-label block mb-2">Email</span>
                <a
                  href="mailto:hello@manon.studio"
                  className="font-body text-lg link-underline"
                >
                  hello@manon.studio
                </a>
              </div>
              <div>
                <span className="section-label block mb-2">Phone</span>
                <a href="tel:+1234567890" className="font-body text-lg link-underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <span className="section-label block mb-2">Location</span>
                <span className="font-body text-lg">
                  New York, NY 10001
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label htmlFor="name" className="section-label block mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-b-2 border-foreground/20 py-4 font-body text-lg focus:border-foreground outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="section-label block mb-3">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border-b-2 border-foreground/20 py-4 font-body text-lg focus:border-foreground outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="section-label block mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full bg-transparent border-b-2 border-foreground/20 py-4 font-body text-lg focus:border-foreground outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Send Message
              <span className="text-lg">→</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
