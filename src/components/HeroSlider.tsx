import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import babyDriverSlide from "@/assets/baby-driver-slide.png";
import spiderverseSlide from "@/assets/spiderverse-slide.png";
import deathloopSlide from "@/assets/deathloop-slide.png";
import murdaughSlide from "@/assets/murdaugh-slide.png";
import blackeningSlide from "@/assets/blackening-slide.png";
import appleIphoneSlide from "@/assets/apple-iphone-slide.png";
import microsoftSurfaceSlide from "@/assets/microsoft-surface-slide.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  { 
    id: 1, 
    title: "Baby Driver", 
    category: "Film Trailer and OST", 
    image: babyDriverSlide, 
    youtubeId: "zTvJJnoWIPk"
  },
  { id: 2, title: "Spiderverse Across The Universe - OST", category: "Film", image: spiderverseSlide, youtubeId: "jWSmXLAeFFw", youtubeStart: 60 },
  { id: 3, title: "Death Loop", category: "Video Game", image: deathloopSlide, youtubeId: "RhYd69gscl8" },
  { id: 4, title: "Murdaugh: Death In The Family", category: "Film Trailer", image: murdaughSlide, youtubeId: "ARUjuqwA-98" },
  { id: 5, title: "The Blackening - Opening Theme", category: "Film", image: blackeningSlide, youtubeId: "5XpHOkrFYbA" },
  { id: 6, title: "Apple Iphone Launch", category: "Commercial", image: appleIphoneSlide, youtubeId: "-rAeqN-Q7x4", youtubeStart: 2908 },
  { id: 7, title: "Microsoft Surface Ad", category: "Commercial", image: microsoftSurfaceSlide, youtubeId: "TaAlizedT7o" },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ id: string; start?: number } | null>(null);
  const [slideHovered, setSlideHovered] = useState(false);

  const handleSlideClick = (project: typeof projects[0]) => {
    if (project.youtubeId) {
      setActiveVideo({ id: project.youtubeId, start: project.youtubeStart });
      setVideoOpen(true);
    }
  };

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

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-center gap-6 lg:gap-10 w-full max-w-[1600px]">
          
          {/* Previous slide preview */}
          <motion.div 
            className="hidden lg:block w-20 xl:w-28 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer flex-shrink-0 group"
            onClick={prevSlide}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
          >
            <img
              src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
              alt="Previous"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
                onClick={() => handleSlideClick(projects[currentIndex])}
                onMouseEnter={() => setSlideHovered(true)}
                onMouseLeave={() => setSlideHovered(false)}
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Slide-out description panel for projects with descriptions */}
                {'description' in projects[currentIndex] && projects[currentIndex].description && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: slideHovered ? 0 : "100%" }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 lg:w-2/5 bg-background/95 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center border-l border-border/50"
                  >
                    <p className="text-foreground/90 text-sm lg:text-base leading-relaxed">
                      {(projects[currentIndex] as { description?: string }).description}
                    </p>
                    <p className="text-primary text-xs mt-4 uppercase tracking-wider">
                      Click to watch trailer
                    </p>
                  </motion.div>
                )}
                
                {/* Content - Title slides from left, category from right */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 overflow-hidden">
                  <div className="overflow-hidden">
                    <motion.h2
                      key={`title-${currentIndex}`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold uppercase tracking-[0.15em] text-foreground"
                    >
                      {projects[currentIndex].title}
                    </motion.h2>
                  </div>
                  <div className="overflow-hidden">
                    <motion.p
                      key={`cat-${currentIndex}`}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                      className="text-muted-foreground text-xs lg:text-sm mt-4 uppercase tracking-[0.3em]"
                    >
                      {projects[currentIndex].category}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next slide preview */}
          <motion.div 
            className="hidden lg:block w-20 xl:w-28 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer flex-shrink-0 group"
            onClick={nextSlide}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
          >
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 px-4 sm:px-8 lg:px-16 z-20">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Prev with progress bar */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-px bg-foreground/10 relative overflow-hidden hidden sm:block">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
            <button 
              onClick={prevSlide} 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">Prev</span>
            </button>
          </div>

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

          {/* Next with loaded indicator */}
          <div className="flex items-center gap-6">
            <button 
              onClick={nextSlide} 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">Next</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-muted-foreground tracking-wide">Loaded</span>
              <span className="text-xs text-foreground font-medium">100%</span>
            </div>
          </div>
        </div>
      </div>
      {/* YouTube Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-background border-border overflow-hidden">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          <div className="relative aspect-video w-full">
            {activeVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1${activeVideo.start ? `&start=${activeVideo.start}` : ''}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
