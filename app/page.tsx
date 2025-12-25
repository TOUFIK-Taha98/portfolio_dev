import AnimatedBackground from '@/components/ui/animated-background';
import Navbar from '@/components/ui/navbar';
import CustomCursor from '@/components/ui/custom-cursor';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Custom Cursor - Hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>

      {/* Footer - Remplace la section Contact */}
      <Footer />
    </div>
  );
}
