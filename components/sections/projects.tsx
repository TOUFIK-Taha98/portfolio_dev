"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Layers, Globe, Database, Smartphone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    titleKey: "projects.items.ecommerce.title",
    descriptionKey: "projects.items.ecommerce.description",
    longDescriptionKey: "projects.items.ecommerce.longDescription",
    category: "Full Stack",
    image: "/images/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    titleKey: "projects.items.mobile_finance.title",
    descriptionKey: "projects.items.mobile_finance.description",
    longDescriptionKey: "projects.items.mobile_finance.longDescription",
    category: "Mobile",
    image: "/images/mobile-finance.jpg",
    tags: ["React Native", "Firebase", "TypeScript", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    titleKey: "projects.items.dashboard.title",
    descriptionKey: "projects.items.dashboard.description",
    longDescriptionKey: "projects.items.dashboard.longDescription",
    category: "Frontend",
    image: "/images/dashboard-analytics.jpg",
    tags: ["React", "D3.js", "REST API", "Material-UI"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    titleKey: "projects.items.api_restful.title",
    descriptionKey: "projects.items.api_restful.description",
    longDescriptionKey: "projects.items.api_restful.longDescription",
    category: "Backend",
    image: "/images/api-restful.jpg",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    titleKey: "projects.items.social_network.title",
    descriptionKey: "projects.items.social_network.description",
    longDescriptionKey: "projects.items.social_network.longDescription",
    category: "Full Stack",
    image: "/images/reseau-social.jpg",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "AWS S3"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "CMS Headless Custom",
    category: "Backend",
    description:
      "Système de gestion de contenu headless avec API GraphQL et interface d'administration.",
    longDescription:
      "CMS headless personnalisé avec API GraphQL, gestion multi-langue, versioning de contenu, et interface admin intuitive. Déploiement automatisé avec CI/CD.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["GraphQL", "Apollo", "PostgreSQL", "React", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  // Projets GitHub - Full Stack
  {
    id: 7,
    titleKey: "projects.items.store_it.title",
    descriptionKey: "projects.items.store_it.description",
    longDescriptionKey: "projects.items.store_it.longDescription",
    category: "Full Stack",
    image: "/images/store-it.jpg",
    tags: ["TypeScript", "Next.js", "Cloud Storage", "React"],
    github: "https://github.com/TOUFIK-Taha98/store_it",
    demo: "https://cloudbox-xi.vercel.app",
  },
  {
    id: 9,
    titleKey: "projects.items.airbnb.title",
    descriptionKey: "projects.items.airbnb.description",
    longDescriptionKey: "projects.items.airbnb.longDescription",
    category: "Full Stack",
    image: "/images/airbnb-clone.jpg",
    tags: ["TypeScript", "Next.js", "React", "Booking System"],
    github: "https://github.com/TOUFIK-Taha98/airbnb_clone_nextjs",
    demo: "https://air-bnb-clone-nextjs-liard.vercel.app",
  },
  {
    id: 10,
    titleKey: "projects.items.trello.title",
    descriptionKey: "projects.items.trello.description",
    longDescriptionKey: "projects.items.trello.longDescription",
    category: "Full Stack",
    image: "/images/trello-clone.jpg",
    tags: ["TypeScript", "Next.js", "React", "Drag & Drop"],
    github: "https://github.com/TOUFIK-Taha98/trello_clone",
    demo: "https://trello-clone-chi-six.vercel.app",
  },
  {
    id: 11,
    titleKey: "projects.items.instagram.title",
    descriptionKey: "projects.items.instagram.description",
    longDescriptionKey: "projects.items.instagram.longDescription",
    category: "Full Stack",
    image: "/images/instagram-clone.jpg",
    tags: ["TypeScript", "Next.js", "React", "Social Media"],
    github: "https://github.com/TOUFIK-Taha98/In-s-tagram_clone",
    demo: "#",
  },
  {
    id: 14,
    titleKey: "projects.items.memories.title",
    descriptionKey: "projects.items.memories.description",
    longDescriptionKey: "projects.items.memories.longDescription",
    category: "Full Stack",
    image: "/images/memories-app.jpg",
    tags: ["JavaScript", "React", "MongoDB", "Memories"],
    github: "https://github.com/TOUFIK-Taha98/memoriesapp",
    demo: "#",
  },
  // Projets GitHub - Frontend
  {
    id: 8,
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    longDescriptionKey: "projects.items.portfolio.longDescription",
    category: "Frontend",
    image: "/images/my-portfolio.jpg",
    tags: ["TypeScript", "Next.js", "Portfolio", "Framer Motion"],
    github: "https://github.com/TOUFIK-Taha98/my_portfolio",
    demo: "https://my-portfolio-roan-chi-98.vercel.app",
  },
  {
    id: 12,
    titleKey: "projects.items.travel.title",
    descriptionKey: "projects.items.travel.description",
    longDescriptionKey: "projects.items.travel.longDescription",
    category: "Frontend",
    image: "/images/travel-uiux.jpg",
    tags: ["TypeScript", "Next.js", "UI/UX", "Travel"],
    github: "https://github.com/TOUFIK-Taha98/travel_ui-ux",
    demo: "https://travel-ui-ux-ten.vercel.app",
  },
  {
    id: 13,
    titleKey: "projects.items.angular.title",
    descriptionKey: "projects.items.angular.description",
    longDescriptionKey: "projects.items.angular.longDescription",
    category: "Frontend",
    image: "/images/angular-practices.jpg",
    tags: ["TypeScript", "Angular", "Learning", "Components"],
    github: "https://github.com/TOUFIK-Taha98/Angluar-practices",
    demo: "#",
  },
  // Projets Wordpress - E-commerce (triés par ordre)
  {
    id: 18,
    titleKey: "projects.items.habachiya.title",
    descriptionKey: "projects.items.habachiya.description",
    longDescriptionKey: "projects.items.habachiya.longDescription",
    category: "Wordpress",
    image: "/images/habachiya.png",
    tags: ["Wordpress", "B2B", "Huile de Nigelle", "Éthiopie"],
    github: "#",
    demo: "https://habachiya.com/",
  },
  {
    id: 15,
    titleKey: "projects.items.boucherie.title",
    descriptionKey: "projects.items.boucherie.description",
    longDescriptionKey: "projects.items.boucherie.longDescription",
    category: "Wordpress",
    image: "/images/boucherie.jpg",
    tags: ["Wordpress", "WooCommerce", "E-commerce", "PHP"],
    github: "#",
    demo: "https://www.boucherielabellerouge.fr",
  },
  {
    id: 16,
    titleKey: "projects.items.iksiir.title",
    descriptionKey: "projects.items.iksiir.description",
    longDescriptionKey: "projects.items.iksiir.longDescription",
    category: "Wordpress",
    image: "/images/iksiir.jpg",
    tags: ["Wordpress", "WooCommerce", "E-commerce", "Produits Naturels"],
    github: "#",
    demo: "https://iksiir.com",
  },
  {
    id: 17,
    titleKey: "projects.items.mazanutri.title",
    descriptionKey: "projects.items.mazanutri.description",
    longDescriptionKey: "projects.items.mazanutri.longDescription",
    category: "Wordpress",
    image: "/images/mazanutri.jpg",
    tags: ["Wordpress", "WooCommerce", "E-commerce", "Beauty"],
    github: "#",
    demo: "https://mazanutribeaute.fr",
  },
  {
    id: 19,
    titleKey: "projects.items.ecoviande.title",
    descriptionKey: "projects.items.ecoviande.description",
    longDescriptionKey: "projects.items.ecoviande.longDescription",
    category: "Wordpress",
    image: "/images/boucherie.jpg",
    tags: ["Wordpress", "Site Vitrine", "Boucherie", "E-commerce"],
    github: "#",
    demo: "https://ecoviande.fr",
  },
];

const categories = [
  "Wordpress",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "Tous",
];

// Map catégories aux icônes (comme Skills)
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend":
      return Globe;
    case "Backend":
      return Database;
    case "Full Stack":
      return Layers;
    case "Mobile":
      return Smartphone;
    case "Wordpress":
      return Layers;
    default:
      return Layers;
  }
};

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("Wordpress");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [mounted, setMounted] = useState(false);

  // Marquer le composant comme monté (pour le portal)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquer le scroll du body et html quand le modal est ouvert
  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Éviter le saut de layout
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1400px] mx-auto relative z-10" style={{ padding: '0.2rem', paddingTop: '2rem' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 lg:mb-8" style={{ textAlign: 'center' }}>
            {t("projects.title") && <span className="text-gray-900 dark:text-white">{t("projects.title")} </span>}
            <span className="gradient-text">{t("projects.title_highlight")}</span>
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 px-4" 
            style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto', width: '100%' }}
          >
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-button uppercase tracking-wide px-2 py-2 md:px-6 text-xs md:text-base rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-white border border-gray-200 dark:border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="project-card group relative bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ padding: '1rem' }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.titleKey ? t(project.titleKey) : project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                      {(() => {
                        const CategoryIcon = getCategoryIcon(project.category);
                        return <CategoryIcon className="w-3.5 h-3.5" />;
                      })()}
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.titleKey ? t(project.titleKey) : project.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-400 text-base md:text-lg mb-4 line-clamp-3 leading-relaxed">
                    {project.descriptionKey ? t(project.descriptionKey) : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-sm md:text-base text-gray-900 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal - Rendu dans un portal au niveau du body */}
      {mounted && selectedProject && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/20 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Sticky */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-2 left-full -ml-12 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                aria-label="Fermer"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <div className="aspect-video rounded-xl mb-4 relative overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.titleKey ? t(selectedProject.titleKey) : selectedProject.title || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedProject.titleKey ? t(selectedProject.titleKey) : selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
                  {selectedProject.longDescriptionKey ? t(selectedProject.longDescriptionKey) : selectedProject.longDescription}
                </p>

                {/* Avis Client - Section temporaire */}
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">💬</span>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      Avis du client
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base italic">
                    "Avis client en attente - Le client partagera bientôt son retour d'expérience sur ce projet."
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-white/10 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* WordPress projects: Show "View Project" button */}
                  {selectedProject.category === "Wordpress" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-button uppercase tracking-wider flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                      {t("projects.view_project")}
                    </a>
                  )}
                  
                  {/* Non-WordPress projects: Show "Source Code" button only */}
                  {selectedProject.category !== "Wordpress" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-button uppercase tracking-wider flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      {t("projects.source_code")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
