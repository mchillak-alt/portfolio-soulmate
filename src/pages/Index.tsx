import { useState } from "react";
import { Header, FullscreenMenu } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HeroSlider />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
