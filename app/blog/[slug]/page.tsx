'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogArticle {
  slug: string;
  titleKey: string;
  contentKey: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  author: string;
}

const articles: Record<string, BlogArticle> = {
  'pourquoi-choisir-wordpress-2025': {
    slug: 'pourquoi-choisir-wordpress-2025',
    titleKey: 'blog.articles.wordpress_2025.title',
    contentKey: 'blog.articles.wordpress_2025.content',
    date: '2025-01-15',
    readTime: 5,
    category: 'WordPress',
    tags: ['WordPress', 'CMS', 'Site Web', 'Création'],
    author: 'Taha TOUFIK',
  },
  'ecommerce-tendances-2025': {
    slug: 'ecommerce-tendances-2025',
    titleKey: 'blog.articles.ecommerce_trends.title',
    contentKey: 'blog.articles.ecommerce_trends.content',
    date: '2025-01-10',
    readTime: 7,
    category: 'E-commerce',
    tags: ['E-commerce', 'Tendances', 'Business', 'Vente en ligne'],
    author: 'Taha TOUFIK',
  },
  'optimisation-seo-site-web': {
    slug: 'optimisation-seo-site-web',
    titleKey: 'blog.articles.seo_optimization.title',
    contentKey: 'blog.articles.seo_optimization.content',
    date: '2025-01-05',
    readTime: 6,
    category: 'SEO',
    tags: ['SEO', 'Google', 'Référencement', 'Optimisation'],
    author: 'Taha TOUFIK',
  },
};

export default function BlogArticlePage() {
  const params = useParams();
  const { t } = useLanguage();
  const slug = params.slug as string;
  
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article non trouvé
          </h1>
          <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Navbar />
      
      <main className="relative pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/20 rounded-full mb-4">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t(article.titleKey)}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.date).toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} min de lecture</span>
              </div>
              <div className="font-medium text-indigo-600 dark:text-indigo-400">
                Par {article.author}
              </div>
            </div>
          </motion.header>

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">📝</span>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-xl prose-gray dark:prose-invert max-w-none mb-12"
          >
            <div 
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: t(article.contentKey) }}
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                <Tag className="w-3.5 h-3.5" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Besoin d'aide pour votre projet web ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Je peux vous aider à créer votre site vitrine, e-commerce ou application web sur mesure.
            </p>
            <a
              href="https://wa.me/33766491893?text=Bonjour%2C%20j'ai%20lu%20votre%20article%20et%20je%20souhaite%20discuter%20de%20mon%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Contactez-moi sur WhatsApp
            </a>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
