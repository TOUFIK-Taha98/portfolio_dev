# 🚀 Portfolio Moderne - Développeur Full Stack

Un portfolio moderne et unique développé avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

## ✨ Fonctionnalités

- 🎨 **Design Dark Mode élégant** avec gradients vibrants et effets subtils
- 🌟 **Animations fluides** optimisées avec Framer Motion
- 💫 **Arrière-plan animé** avec système de particules connectées
- 🖱️ **Curseur personnalisé** (desktop uniquement)
- 📱 **100% Responsive** - parfait sur tous les appareils
- ⚡ **Performances optimisées** avec Next.js 14
- 🎯 **Sections complètes** :
  - Hero avec présentation dynamique
  - Compétences avec barres de progression animées
  - Galerie de projets avec filtres et modal détaillé
  - Timeline d'expériences professionnelles
  - Carousel de témoignages interactif
  - Formulaire de contact avec validation
- 🔍 **SEO-friendly** avec metadata optimisée

## 🛠️ Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utils**: clsx, tailwind-merge

## 📋 Prérequis

⚠️ **Important**: Ce projet nécessite Node.js >= 20.9.0

Vérifiez votre version :
```bash
node --version
```

Si vous avez une version inférieure, installez la dernière version LTS depuis [nodejs.org](https://nodejs.org/)

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🎨 Personnalisation Rapide

### 1. **Informations personnelles** (5 min)

**Hero Section** - `components/sections/hero.tsx` (lignes 30-40)
```typescript
<h1>Votre Nom</h1>  // Remplacez "Votre Nom"
<h2>Développeur Full Stack</h2>  // Votre titre
<p>Votre description...</p>  // Votre pitch
```

**Contact** - `components/sections/contact.tsx` (lignes 70-72)
```typescript
{ icon: Mail, value: 'votre@email.com' }
{ icon: Phone, value: '+33 6 12 34 56 78' }
{ icon: MapPin, value: 'Votre Ville, France' }
```

**Liens sociaux** - `components/sections/hero.tsx` (lignes 75-79)
```typescript
{ icon: Github, href: 'https://github.com/votre-username' }
{ icon: Linkedin, href: 'https://linkedin.com/in/votre-profil' }
{ icon: Mail, href: 'mailto:votre@email.com' }
```

### 2. **Compétences** (10 min)

`components/sections/skills.tsx` - Modifiez l'array `skillCategories`
```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },  // 0-100
      // Ajoutez vos compétences...
    ],
  },
  // Ajoutez vos catégories...
];
```

### 3. **Projets** (15 min)

`components/sections/projects.tsx` - Modifiez l'array `projects`
```typescript
const projects = [
  {
    title: 'Nom du Projet',
    category: 'Full Stack',  // Full Stack, Frontend, Backend, Mobile
    description: 'Description courte',
    longDescription: 'Description détaillée',
    tags: ['Next.js', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
];
```

### 4. **Expériences** (10 min)

`components/sections/experience.tsx` - Modifiez l'array `experiences`
```typescript
const experiences = [
  {
    company: 'Nom Entreprise',
    logo: '🚀',  // Emoji
    position: 'Votre Poste',
    period: '2022 - Présent',
    description: 'Description du poste',
    achievements: [
      'Réalisation 1',
      'Réalisation 2',
    ],
    tags: ['Tech1', 'Tech2'],
  },
];
```

### 5. **Témoignages** (5 min)

`components/sections/testimonials.tsx` - Modifiez l'array `testimonials`
```typescript
const testimonials = [
  {
    name: 'Nom Client',
    position: 'Poste',
    company: 'Entreprise',
    avatar: '👩‍💼',  // Emoji
    testimonial: 'Le témoignage...',
    rating: 5,
  },
];
```

### 6. **Couleurs du thème** (2 min)

`app/globals.css` - Modifiez les variables CSS
```css
:root {
  --primary: #6366f1;    /* Couleur principale (Indigo) */
  --secondary: #8b5cf6;  /* Couleur secondaire (Purple) */
  --accent: #ec4899;     /* Couleur d'accent (Pink) */
}
```

## 📁 Structure du Projet

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx            # Page d'accueil (assemblage)
│   └── globals.css         # Styles globaux et variables
├── components/
│   ├── sections/           # Sections du portfolio
│   │   ├── hero.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── testimonials.tsx
│   │   └── contact.tsx
│   └── ui/                 # Composants UI réutilisables
│       ├── navbar.tsx
│       ├── footer.tsx
│       ├── custom-cursor.tsx
│       └── animated-background.tsx
├── lib/
│   └── utils.ts            # Fonctions utilitaires
└── public/                 # Fichiers statiques (images)
```

## 📦 Build & Déploiement

### Build local
```bash
npm run build
npm start
```

### Déploiement sur Vercel (Recommandé)
1. Push votre code sur GitHub
2. Importez sur [Vercel](https://vercel.com)
3. Déployez automatiquement ! ✨

### Autres plateformes
- **Netlify**: Connectez votre repo GitHub
- **AWS Amplify**: Suivez le guide AWS
- **Self-hosted**: Build puis déployez le dossier `.next`

## 🎯 Prochaines Étapes

1. ✅ Personnalisez toutes les sections avec vos informations
2. 📸 Ajoutez vos vraies images de projets dans `/public`
3. 🔗 Configurez vos vrais liens (GitHub, LinkedIn, etc.)
4. 📧 Intégrez un backend pour le formulaire de contact (optionnel)
5. 🚀 Déployez sur Vercel
6. 📊 Ajoutez Google Analytics (optionnel)
7. 🌐 Connectez un nom de domaine personnalisé

## 💡 Conseils

- **Images de projets**: Utilisez des screenshots ou créez des mockups sur [Figma](https://figma.com)
- **Formulaire de contact**: Intégrez [Formspree](https://formspree.io/) ou [EmailJS](https://www.emailjs.com/) pour recevoir les messages
- **Analytics**: Ajoutez Google Analytics ou [Vercel Analytics](https://vercel.com/analytics)
- **Optimisation**: Next.js optimise automatiquement vos images et performances

## 🐛 Problèmes Courants

**Le serveur ne démarre pas**
- Vérifiez votre version de Node.js (>= 20.9.0)
- Supprimez `node_modules` et `package-lock.json`, puis réinstallez

**Les animations ne fonctionnent pas**
- Vérifiez que Framer Motion est bien installé
- Les composants animés doivent avoir la directive `'use client'`

**Erreurs Tailwind**
- Tailwind CSS 4 utilise une nouvelle syntaxe
- Consultez la [documentation officielle](https://tailwindcss.com/docs)

## 📄 Licence

Ce projet est open source sous licence MIT.

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à ouvrir une issue ou PR.

## 💬 Support

Questions ? Ouvrez une issue sur GitHub ou contactez-moi directement.

---

Fait avec ❤️ par un développeur Full Stack | Propulsé par [Next.js](https://nextjs.org)
