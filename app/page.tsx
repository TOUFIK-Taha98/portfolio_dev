import AnimatedBackground from '@/components/ui/animated-background';
import Navbar from '@/components/ui/navbar';
import CustomCursor from '@/components/ui/custom-cursor';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Pricing from '@/components/sections/pricing';
import Footer from '@/components/ui/footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import ParallaxSection from '@/components/ui/parallax-section';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Custom Cursor - Hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        <Hero />
        <ParallaxSection speed={0.3}>
          <Projects />
        </ParallaxSection>
        <Pricing />
        <Skills />
        <ParallaxSection speed={0.3}>
          <Experience />
        </ParallaxSection>
      </main>

      {/* Footer - Remplace la section Contact */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
