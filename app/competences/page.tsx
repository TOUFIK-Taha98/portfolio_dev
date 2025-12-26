import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Skills from '@/components/sections/skills';
import AnimatedBackground from '@/components/ui/animated-background';

export const metadata: Metadata = {
  title: 'Compétences - Technologies & Expertise',
  description: 'Expert en développement web : React.js, Next.js, WordPress, Node.js, TypeScript, PostgreSQL. Frontend, Backend et DevOps. Plus de 15 technologies maîtrisées.',
  keywords: ['compétences développeur', 'React.js expert', 'Next.js', 'WordPress développeur', 'full-stack developer', 'TypeScript'],
};

export default function CompetencesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <AnimatedBackground />
      <Navbar />
      <main className="relative pt-24">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
