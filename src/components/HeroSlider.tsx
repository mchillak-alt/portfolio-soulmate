import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";

const projects = [
  {
    id: 1,
    title: "Bauman",
    category: "Web Design",
    image: slide1,
  },
  {
    id: 2,
    title: "Iceland",
    category: "Photography",
    image: slide2,
  },
  {
    id: 3,
    title: "Tag Watch",
    category: "Product Design",
    image: slide3,
  },
  {
    id: 4,
    title: "Dance Room",
    category: "Video",
    image: slide4,
  },
  {
    id: 5,
    title: "Opulence",
    category: "Branding",
    image: slide5,
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="portfolio" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24 lg:py-0">
      {/* Marquee Background */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <div className="marquee opacity-30">
          <div className="marquee-content">
            <span className="loading-text">
              Loading Colega Website Loading Colega Website Loading Colega Website&nbsp;
            </span>
            <span className="loading-text">
              Loading Colega Website Loading Colega Website Loading Colega Website&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Main slider container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center justify-center gap-4 lg:gap-8">
          {/* Previous slide preview */}
          <div className="hidden lg:block w-24 h-36 bg-secondary/50 rounded-lg overflow-hidden opacity-40 flex-shrink-0">
            <img
              src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
              alt="Previous"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main slide */}
          <div className="relative w-full max-w-2xl xl:max-w-4xl aspect-[16/10] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0 slide-card rounded-xl overflow-hidden"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-main text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2"
                  >
                    {projects[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground text-sm md:text-base"
                  >
                    {projects[currentIndex].category}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next slide preview */}
          <div className="hidden lg:block w-24 h-36 bg-secondary/50 rounded-lg overflow-hidden opacity-40 flex-shrink-0">
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 lg:mt-16 max-w-2xl xl:max-w-4xl mx-auto">
          {/* Prev button */}
          <button onClick={prevSlide} className="slide-arrow">
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Prev Slide</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`nav-dot ${index === currentIndex ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button onClick={nextSlide} className="slide-arrow">
            <span className="hidden sm:inline">Next Slide</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Loaded percentage */}
      <div className="absolute bottom-8 right-6 lg:right-12 text-muted-foreground text-sm">
        <span>Loaded</span>
        <span className="ml-2 font-medium text-foreground">100%</span>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-6 lg:left-12">
        <div className="w-32 h-px bg-muted-foreground/30 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
