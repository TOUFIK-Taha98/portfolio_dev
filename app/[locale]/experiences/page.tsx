import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Experience from '@/components/sections/experience';
import AnimatedBackground from '@/components/ui/animated-background';
import ParallaxSection from '@/components/ui/parallax-section';

export const metadata: Metadata = {
  title: 'Expériences Professionnelles - Parcours',
  description: 'Mon parcours professionnel : Woby, Orange, Inria. Ingénieur Full-Stack avec expertise en React.js, Node.js et développement web. 3+ ans d\'expérience.',
  keywords: ['expérience développeur', 'parcours professionnel', 'ingénieur full-stack', 'Woby', 'Orange', 'Inria'],
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <AnimatedBackground />
      <Navbar />
      <main className="relative pt-24">
        <ParallaxSection speed={0.3}>
          <Experience />
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
}
