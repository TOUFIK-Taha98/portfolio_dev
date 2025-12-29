import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Tajawal,
  Inter,
  Playfair_Display,
  Bodoni_Moda,
} from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Taha TOUFIK - Création Site Web, E-commerce & Maintenance | Développeur Web Freelance",
    template: "%s | Taha TOUFIK - Développeur Web"
  },
  description:
    "Création de sites web professionnels : site vitrine à partir de 799€, e-commerce dès 1299€, maintenance 99€/mois. Développeur web freelance expert WordPress, React.js et Next.js. Accompagnement 20€/h. Devis gratuit.",
  keywords: [
    "création site web",
    "développeur web freelance",
    "site vitrine",
    "site e-commerce",
    "création site internet",
    "WordPress",
    "WooCommerce",
    "React.js",
    "Next.js",
    "développeur freelance Paris",
    "création boutique en ligne",
    "site internet professionnel",
    "refonte site web",
    "maintenance site web",
    "SEO",
    "référencement naturel",
    "développeur full-stack",
    "accompagnement développement web",
    "Taha TOUFIK",
    "portfolio développeur",
  ],
  authors: [{ name: "Taha TOUFIK" }],
  creator: "Taha TOUFIK",
  publisher: "Taha TOUFIK",
  metadataBase: new URL('https://tahatoufik.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tahatoufik.dev',
    title: 'Taha TOUFIK - Création Site Web, E-commerce & Maintenance',
    description: 'Développeur web freelance expert en création de sites vitrines, e-commerce et applications web sur mesure. WordPress, React.js, Next.js. Devis gratuit.',
    siteName: 'Taha TOUFIK - Développeur Web',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taha TOUFIK - Développeur Web Freelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taha TOUFIK - Création Site Web & E-commerce',
    description: 'Développeur web freelance spécialisé en WordPress, React.js et Next.js. Création de sites professionnels.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'S7VXF8X2KK',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' },
    { locale: 'ar' },
  ];
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YYW531ZJ2W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YYW531ZJ2W');
            `,
          }}
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Taha TOUFIK - Développeur Web Freelance",
              "image": "https://tahatoufik.dev/og-image.jpg",
              "description": "Création de sites web professionnels : site vitrine, e-commerce, applications web. Expert WordPress, React.js et Next.js.",
              "url": "https://tahatoufik.dev",
              "telephone": "+33766491893",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
                "addressRegion": "Île-de-France"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "FR"
              },
              "sameAs": [
                "https://github.com/TOUFIK-Taha98",
                "https://www.linkedin.com/in/taha-toufik"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Création Site Vitrine",
                    "description": "Création de site vitrine professionnel avec design moderne et responsive"
                  },
                  "price": "799",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Création E-commerce",
                    "description": "Création de boutique en ligne complète avec paiement sécurisé"
                  },
                  "price": "1299",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Maintenance Site Web",
                    "description": "Maintenance mensuelle de votre site web avec mises à jour et sauvegardes"
                  },
                  "price": "99",
                  "priceCurrency": "EUR",
                  "unitCode": "MON"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} ${inter.variable} ${playfair.variable} ${bodoni.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
