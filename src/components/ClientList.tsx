import { motion } from "framer-motion";

const credits = [
  {
    id: 1,
    title: "Nike - Just Do It Campaign",
    category: "Commercial",
    year: "2024",
  },
  {
    id: 2,
    title: "Stranger Things Season 5",
    category: "TV Show",
    year: "2024",
  },
  {
    id: 3,
    title: "The Last of Us Part III",
    category: "Video Game",
    year: "2023",
  },
  {
    id: 4,
    title: "Oppenheimer",
    category: "Film",
    year: "2023",
  },
  {
    id: 5,
    title: "Apple - Shot on iPhone",
    category: "Commercial",
    year: "2023",
  },
  {
    id: 6,
    title: "The Bear Season 3",
    category: "TV Show",
    year: "2023",
  },
  {
    id: 7,
    title: "Cyberpunk 2077: Phantom Liberty",
    category: "Video Game",
    year: "2023",
  },
  {
    id: 8,
    title: "Mercedes-Benz - The Journey",
    category: "Commercial",
    year: "2022",
  },
];

export function ClientList() {
  return (
    <section id="credits" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
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
            Credits
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mt-4">
            Selected Work
          </h2>
        </motion.div>

        {/* Credits list */}
        <div className="space-y-0">
          {credits.map((credit, index) => (
            <motion.div
              key={credit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.32, 0.72, 0, 1] 
              }}
              className="group border-t border-border py-6 lg:py-8 cursor-pointer hover:bg-secondary/30 transition-colors duration-300 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16"
            >
              <div className="flex items-center justify-between gap-4">
                {/* Left side - Title */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {credit.title}
                  </h3>
                </div>

                {/* Right side - Category & Year */}
                <div className="flex items-center gap-6 lg:gap-12">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {credit.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground w-12 text-right">
                    {credit.year}
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