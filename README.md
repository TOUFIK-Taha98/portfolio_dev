# 💼 Portfolio Personnel - Taha TOUFIK

Portfolio professionnel d'un Ingénieur en Développement Informatique, développé avec Next.js 16, TypeScript et Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4)

## ✨ Caractéristiques

- 🌍 **Multilingue** - Support complet FR/EN/AR avec changement de direction (RTL pour l'arabe)
- 🎨 **Design moderne** avec Dark/Light Mode
- 💫 **Animations fluides** optimisées avec Framer Motion
- 📱 **Entièrement Responsive** - Optimisé pour tous les écrans
- ⚡ **Performance maximale** avec Next.js 16 et optimisations SSG
- 🎯 **Sections professionnelles** :
  - Présentation dynamique
  - Showcase de projets avec détails
  - Compétences techniques
  - Expériences professionnelles
  - Informations de contact
- 🔍 **SEO optimisé** pour une meilleure visibilité

## 🛠️ Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **3D Graphics**: React Three Fiber
- **Internationalisation**: Custom Context API (FR/EN/AR)
- **Theme**: next-themes (Dark/Light Mode)
- **Icons**: Lucide React, React Icons

## 📋 Prérequis

⚠️ **Important**: Ce projet nécessite Node.js >= 20.9.0

```bash
node --version  # Vérifiez votre version
```

## 🚀 Installation & Développement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Architecture du Projet

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal + Metadata SEO
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux Tailwind
├── components/
│   ├── sections/          # Sections principales
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   └── ui/                # Composants réutilisables
│       ├── navbar.tsx
│       ├── footer.tsx
│       ├── animated-background.tsx
│       └── custom-cursor.tsx
├── contexts/
│   └── LanguageContext.tsx  # Gestion multilingue
├── lib/
│   ├── utils.ts           # Utilitaires
│   └── translations/      # Fichiers de traduction (FR/EN/AR)
└── public/                # Assets statiques
    └── images/            # Images de projets
```

## 📦 Déploiement

### Production Build
```bash
npm run build
npm start
```

### Déploiement sur Vercel
Ce projet est optimisé pour Vercel avec configuration automatique :
- Push sur la branche `main` déclenche un déploiement automatique
- Node.js 20+ utilisé automatiquement
- Variables d'environnement configurables via dashboard Vercel

## 🌐 Fonctionnalités Multilingues

Le portfolio supporte 3 langues avec changement automatique de direction :
- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **Anglais**
- 🇸🇦 **Arabe** (avec support RTL)

Les traductions sont gérées via des fichiers JSON dans `lib/translations/`.

## 🎨 Thèmes

- **Dark Mode** (par défaut) : Optimisé pour la lecture prolongée
- **Light Mode** : Disponible via le toggle dans la navbar
- Préférence sauvegardée automatiquement dans le localStorage

## ⚡ Performances

- ✅ Static Site Generation (SSG) pour temps de chargement ultra-rapide
- ✅ Images optimisées automatiquement par Next.js Image
- ✅ Code splitting et lazy loading
- ✅ Fonts Google optimisées avec next/font

## 📄 Licence

© 2024 Taha TOUFIK. Tous droits réservés.

## 📞 Contact

Pour toute question professionnelle ou opportunité de collaboration :
- Portfolio : [En ligne prochainement]
- LinkedIn : [Votre profil LinkedIn]
- GitHub : [@TOUFIK-Taha98](https://github.com/TOUFIK-Taha98)
- Email : taha.toufik@example.com

---

Développé avec ❤️ et Next.js
