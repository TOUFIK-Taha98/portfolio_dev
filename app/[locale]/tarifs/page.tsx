import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Pricing from '@/components/sections/pricing';
import AnimatedBackground from '@/components/ui/animated-background';

export const metadata: Metadata = {
  title: 'Tarifs - Création Site Web & E-commerce',
  description: 'Tarifs transparents : Site vitrine 799€, E-commerce 1299€, Maintenance 99€/mois, Accompagnement 20€/h. Devis gratuit. Paiement sécurisé.',
  keywords: ['tarif site web', 'prix création site', 'devis site internet', 'coût e-commerce', 'prix développeur web'],
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <AnimatedBackground />
      <Navbar />
      <main className="relative pt-24">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
