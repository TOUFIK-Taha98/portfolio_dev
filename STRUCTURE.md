# 📐 Structure du Projet

## Vue d'ensemble

```
portfolio/
├── app/                    # Next.js App Router
│   ├── favicon.ico        # Icône du site
│   ├── globals.css        # Styles globaux + variables CSS
│   ├── layout.tsx         # Layout principal + metadata SEO
│   └── page.tsx           # Page d'accueil (assemblage des sections)
│
├── components/
│   ├── sections/          # Sections principales du portfolio
│   │   ├── hero.tsx       # Section Hero avec présentation
│   │   ├── skills.tsx     # Compétences avec animations
│   │   ├── projects.tsx   # Galerie de projets + modal
│   │   ├── experience.tsx # Timeline d'expériences
│   │   ├── testimonials.tsx # Carousel de témoignages
│   │   └── contact.tsx    # Formulaire de contact
│   │
│   └── ui/                # Composants UI réutilisables
│       ├── navbar.tsx     # Barre de navigation
│       ├── footer.tsx     # Pied de page
│       ├── custom-cursor.tsx  # Curseur personnalisé
│       └── animated-background.tsx  # Particules animées
│
├── lib/
│   └── utils.ts           # Fonctions utilitaires (cn)
│
├── public/                # Fichiers statiques
│   ├── *.svg             # Icônes par défaut Next.js
│   └── (ajoutez vos images ici)
│
├── .env.example          # Variables d'environnement
├── package.json          # Dépendances du projet
├── tsconfig.json         # Configuration TypeScript
├── next.config.ts        # Configuration Next.js
├── postcss.config.mjs    # Configuration PostCSS
├── eslint.config.mjs     # Configuration ESLint
│
└── Documentation/
    ├── README.md         # Documentation principale
    ├── QUICK_START.md    # Guide de démarrage rapide
    ├── CUSTOMIZATION.md  # Guide de personnalisation détaillé
    └── STRUCTURE.md      # Ce fichier
```

## Détails des Composants

### 🎯 Sections (`components/sections/`)

#### `hero.tsx`
- **Rôle**: Première impression, présentation
- **Contient**: Nom, titre, description, CTA, liens sociaux
- **Personnalisable**: Textes, liens, animations

#### `skills.tsx`
- **Rôle**: Showcase des compétences techniques
- **Contient**: 4 catégories (Frontend, Backend, DevOps, Mobile)
- **Personnalisable**: Compétences, niveaux (0-100), catégories

#### `projects.tsx`
- **Rôle**: Portfolio de projets réalisés
- **Contient**: Galerie avec filtres, modal de détails
- **Personnalisable**: Projets, catégories, tags, liens

#### `experience.tsx`
- **Rôle**: Parcours professionnel
- **Contient**: Timeline avec entreprises, postes, réalisations
- **Personnalisable**: Expériences, dates, achievements

#### `testimonials.tsx`
- **Rôle**: Témoignages clients/managers
- **Contient**: Carousel interactif avec navigation
- **Personnalisable**: Témoignages, avatars, ratings

#### `contact.tsx`
- **Rôle**: Formulaire de contact
- **Contient**: Formulaire + infos de contact
- **Personnalisable**: Email, téléphone, localisation, liens sociaux

### 🎨 UI (`components/ui/`)

#### `navbar.tsx`
- **Rôle**: Navigation principale
- **Contient**: Logo, menu desktop/mobile
- **Personnalisable**: Liens de navigation

#### `footer.tsx`
- **Rôle**: Pied de page
- **Contient**: Copyright, liens, réseaux sociaux
- **Personnalisable**: Textes, liens

#### `custom-cursor.tsx`
- **Rôle**: Curseur personnalisé (desktop)
- **Contient**: Curseur animé avec Framer Motion
- **Personnalisable**: Couleurs, taille, animations

#### `animated-background.tsx`
- **Rôle**: Arrière-plan avec particules
- **Contient**: Canvas avec particules connectées
- **Personnalisable**: Nombre de particules, couleurs, vitesse

## Technologies par Composant

| Composant | Technologies |
|-----------|-------------|
| `hero.tsx` | Framer Motion, Lucide Icons |
| `skills.tsx` | Framer Motion, Lucide Icons |
| `projects.tsx` | Framer Motion, AnimatePresence, Lucide Icons |
| `experience.tsx` | Framer Motion, Lucide Icons |
| `testimonials.tsx` | Framer Motion, useState, Lucide Icons |
| `contact.tsx` | Framer Motion, useState, Lucide Icons |
| `navbar.tsx` | Framer Motion, useState, useEffect |
| `footer.tsx` | Framer Motion, Lucide Icons |
| `custom-cursor.tsx` | Framer Motion, useState, useEffect |
| `animated-background.tsx` | Canvas API, useEffect, useRef |

## Flux de Données

```
app/page.tsx (assemblage)
    ↓
components/sections/* (sections)
    ↓
components/ui/* (composants réutilisables)
    ↓
lib/utils.ts (utilitaires)
```

## Points d'Entrée pour Personnalisation

### Rapide (< 30 min)
1. `components/sections/hero.tsx` - Nom, titre, description
2. `components/sections/contact.tsx` - Email, téléphone
3. `app/globals.css` - Couleurs du thème

### Moyen (30-60 min)
4. `components/sections/skills.tsx` - Compétences
5. `components/sections/projects.tsx` - Projets
6. `components/sections/experience.tsx` - Expériences

### Avancé (> 1h)
7. `components/sections/testimonials.tsx` - Témoignages
8. `components/ui/navbar.tsx` - Navigation
9. Ajouter des images dans `/public`
10. Intégrer un backend pour le formulaire

## Commandes NPM

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Build pour la production
npm start        # Démarrer le serveur de production
npm run lint     # Vérifier les erreurs ESLint
```

## Variables d'Environnement

Créez un fichier `.env.local` (copie de `.env.example`):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Pour intégrer un formulaire de contact:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## Performances

### Optimisations incluses
- ✅ Next.js 14 avec App Router
- ✅ Lazy loading des composants
- ✅ Images optimisées (Next/Image)
- ✅ CSS minifié avec Tailwind
- ✅ Animations performantes (Framer Motion)
- ✅ Canvas optimisé (particules)

### Lighthouse Score attendu
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## Support des Navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Android)

## Responsive Breakpoints

```css
sm: 640px   /* Petits téléphones */
md: 768px   /* Tablettes */
lg: 1024px  /* Petits écrans */
xl: 1280px  /* Écrans moyens */
2xl: 1536px /* Grands écrans */
```

---

**Besoin d'aide ?**
- Guide de démarrage: `QUICK_START.md`
- Guide de personnalisation: `CUSTOMIZATION.md`
- Documentation complète: `README.md`
