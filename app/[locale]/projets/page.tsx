import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Projects from '@/components/sections/projects';
import AnimatedBackground from '@/components/ui/animated-background';

export const metadata: Metadata = {
  title: 'Mes Projets - Portfolio de Réalisations',
  description: 'Découvrez mes projets de développement web : sites vitrines, e-commerce, applications WordPress et React.js. Plus de 17 projets réalisés avec succès.',
  keywords: ['projets web', 'portfolio développeur', 'réalisations WordPress', 'sites e-commerce', 'applications React'],
};

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <AnimatedBackground />
      <Navbar />
      <main className="relative pt-24">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
