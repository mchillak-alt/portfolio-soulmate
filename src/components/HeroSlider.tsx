import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";

const projects = [
  { id: 1, title: "Bauman", category: "Web Design", image: slide1 },
  { id: 2, title: "Iceland", category: "Photography", image: slide2 },
  { id: 3, title: "Tag Watch", category: "Product Design", image: slide3 },
  { id: 4, title: "Dance Room", category: "Video", image: slide4 },
  { id: 5, title: "Opulence", category: "Branding", image: slide5 },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section 
      id="portfolio" 
      className="h-screen flex flex-col justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Marquee Background - More subtle */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <div className="marquee opacity-[0.03]">
          <div className="marquee-content">
            <span className="text-[20vw] font-light uppercase tracking-tight whitespace-nowrap text-foreground">
              Loading Colega Website&nbsp;&nbsp;&nbsp;Loading Colega Website&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[20vw] font-light uppercase tracking-tight whitespace-nowrap text-foreground">
              Loading Colega Website&nbsp;&nbsp;&nbsp;Loading Colega Website&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-center gap-6 lg:gap-10 w-full max-w-[1600px]">
          
          {/* Previous slide preview */}
          <motion.div 
            className="hidden lg:block w-20 xl:w-28 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            onClick={prevSlide}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
          >
            <img
              src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
              alt="Previous"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main slide */}
          <div className="relative w-full max-w-4xl xl:max-w-5xl aspect-[16/9] overflow-hidden rounded-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.6, ease: [0.32, 0.72, 0, 1] },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0 cursor-pointer group"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground"
                  >
                    {projects[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    key={`cat-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="text-muted-foreground text-sm lg:text-base mt-3 tracking-wide"
                  >
                    {projects[currentIndex].category}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next slide preview */}
          <motion.div 
            className="hidden lg:block w-20 xl:w-28 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            onClick={nextSlide}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
          >
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 px-4 sm:px-8 lg:px-16 z-20">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Prev */}
          <button 
            onClick={prevSlide} 
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">Prev</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-1 bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button 
            onClick={nextSlide} 
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">Next</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-8 lg:bottom-12 left-4 sm:left-8 lg:left-16 z-20">
        <div className="w-24 h-px bg-foreground/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          />
        </div>
      </div>

      {/* Loaded indicator */}
      <div className="absolute bottom-8 lg:bottom-12 right-4 sm:right-8 lg:right-16 z-20 flex items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-wide">Loaded</span>
        <span className="text-xs text-foreground font-medium">100%</span>
      </div>
    </section>
  );
}
