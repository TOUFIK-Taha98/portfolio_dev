import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Taha TOUFIK - Développeur Web Freelance',
    short_name: 'Taha TOUFIK',
    description: 'Création de sites web professionnels, e-commerce et applications sur mesure. Expert WordPress, React.js et Next.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
