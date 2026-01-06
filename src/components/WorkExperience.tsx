import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Designer",
    company: "Studio Creative",
    period: "2022 — Present",
    description: "Leading brand identity projects for Fortune 500 clients.",
  },
  {
    id: 2,
    role: "Art Director",
    company: "Design Agency",
    period: "2019 — 2022",
    description: "Directed creative campaigns and managed design teams.",
  },
  {
    id: 3,
    role: "UI/UX Designer",
    company: "Tech Startup",
    period: "2017 — 2019",
    description: "Designed user interfaces for mobile and web applications.",
  },
  {
    id: 4,
    role: "Graphic Designer",
    company: "Freelance",
    period: "2015 — 2017",
    description: "Worked with various clients on branding and print design.",
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mt-4">
            Work History
          </h2>
        </motion.div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1] 
              }}
              className="group border-t border-border py-8 lg:py-10 cursor-pointer hover:bg-secondary/30 transition-colors duration-300 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Left side - Role & Company */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Middle - Description */}
                <div className="flex-1 lg:max-w-md">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Right side - Period */}
                <div className="lg:text-right">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}