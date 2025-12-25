# 🎨 Guide de Personnalisation

Ce guide vous aide à personnaliser rapidement votre portfolio.

## ⏱️ Personnalisation en 30 minutes

### Étape 1: Informations de Base (5 min)

#### 1.1 Hero Section
Fichier: `components/sections/hero.tsx`

```typescript
// Ligne 30
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
  <span className="gradient-text">Votre Nom Complet</span>
</h1>

// Ligne 38
<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 mb-8">
  Développeur Full Stack  // Changez votre titre
</h2>

// Ligne 48
<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
  Votre description personnelle en 2-3 lignes
</p>

// Ligne 75 - Liens sociaux
{ icon: Github, href: 'https://github.com/votre-username', label: 'GitHub' },
{ icon: Linkedin, href: 'https://linkedin.com/in/votre-profil', label: 'LinkedIn' },
{ icon: Mail, href: 'mailto:votre@email.com', label: 'Email' },
```

#### 1.2 Contact
Fichier: `components/sections/contact.tsx`

```typescript
// Ligne 70
{ icon: Mail, label: 'Email', value: 'votre@email.com', href: 'mailto:votre@email.com' },
{ icon: Phone, label: 'Téléphone', value: '+33 6 12 34 56 78', href: 'tel:+33612345678' },
{ icon: MapPin, label: 'Localisation', value: 'Paris, France', href: null },

// Ligne 94 - Réseaux sociaux
{ name: 'GitHub', url: 'https://github.com/votre-username', icon: '💻' },
{ name: 'LinkedIn', url: 'https://linkedin.com/in/votre-profil', icon: '💼' },
{ name: 'Twitter', url: 'https://twitter.com/votre-username', icon: '🐦' },
```

### Étape 2: Compétences (10 min)

Fichier: `components/sections/skills.tsx`

```typescript
// Ligne 6
const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 95 },    // Ajustez les niveaux 0-100
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 85 },
      // Ajoutez vos propres compétences
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python / Django', level: 85 },
      // Modifiez selon votre stack
    ],
  },
  // Ajoutez ou supprimez des catégories
];
```

**Icônes disponibles** (de lucide-react):
- Frontend: `Globe`, `Layout`, `Palette`
- Backend: `Database`, `Server`, `Cloud`
- DevOps: `Cog`, `Settings`, `GitBranch`
- Mobile: `Smartphone`, `Tablet`

### Étape 3: Projets (15 min)

Fichier: `components/sections/projects.tsx`

```typescript
// Ligne 8
const projects = [
  {
    id: 1,
    title: 'Nom de Votre Projet',
    category: 'Full Stack',  // Options: 'Full Stack', 'Frontend', 'Backend', 'Mobile'
    description: 'Description courte (1-2 lignes)',
    longDescription: 'Description détaillée avec contexte et résultats (3-4 lignes)',
    image: '/placeholder-project.jpg',  // Ajoutez vos images dans /public
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],  // Technologies utilisées
    github: 'https://github.com/username/projet',
    demo: 'https://votre-projet.com',
  },
  // Ajoutez autant de projets que nécessaire
];
```

**Catégories disponibles**:
- `'Full Stack'` - Applications complètes
- `'Frontend'` - Interfaces et design
- `'Backend'` - APIs et serveurs
- `'Mobile'` - Applications mobiles

### Étape 4: Expériences (10 min)

Fichier: `components/sections/experience.tsx`

```typescript
// Ligne 6
const experiences = [
  {
    company: 'Nom de l\'Entreprise',
    logo: '🚀',  // Choisissez un emoji représentatif
    position: 'Votre Poste',
    period: '2022 - Présent',
    description: 'Description de votre rôle et responsabilités principales',
    achievements: [
      'Réalisation majeure 1 avec résultats quantifiables',
      'Réalisation majeure 2',
      'Réalisation majeure 3',
    ],
    tags: ['Next.js', 'Node.js', 'AWS'],  // Technologies utilisées
  },
  // Ajoutez toutes vos expériences (plus récentes en premier)
];
```

**Emojis suggérés pour les entreprises**:
- Startups: 🚀 ⚡ 💡
- Tech/IT: 💻 🖥️ ⚙️
- Innovation: 🌟 ✨ 🎯
- Corporate: 💼 🏢 📊

### Étape 5: Témoignages (5 min)

Fichier: `components/sections/testimonials.tsx`

```typescript
// Ligne 6
const testimonials = [
  {
    name: 'Nom du Client/Manager',
    position: 'Poste',
    company: 'Entreprise',
    avatar: '👩‍💼',  // Emoji représentatif
    testimonial: 'Le témoignage complet ici. Gardez-le concis mais impactant.',
    rating: 5,  // Note sur 5
  },
  // Ajoutez 3-5 témoignages
];
```

**Emojis suggérés pour les avatars**:
- Hommes: 👨‍💼 👨‍💻 👨‍🎨
- Femmes: 👩‍💼 👩‍💻 👩‍🎨
- Général: 👤 🧑‍💼 🧑‍💻

## 🎨 Personnalisation Avancée

### Changer les Couleurs

Fichier: `app/globals.css`

```css
:root {
  --primary: #6366f1;    /* Couleur principale (boutons, accents) */
  --secondary: #8b5cf6;  /* Couleur secondaire (dégradés) */
  --accent: #ec4899;     /* Couleur d'accent (highlights) */
}
```

**Palettes suggérées**:

**Bleu Professionnel**:
```css
--primary: #3b82f6;
--secondary: #60a5fa;
--accent: #93c5fd;
```

**Vert Nature**:
```css
--primary: #10b981;
--secondary: #34d399;
--accent: #6ee7b7;
```

**Violet Créatif**:
```css
--primary: #8b5cf6;
--secondary: #a78bfa;
--accent: #c4b5fd;
```

**Orange Dynamique**:
```css
--primary: #f97316;
--secondary: #fb923c;
--accent: #fdba74;
```

### Ajouter des Images de Projets

1. **Préparez vos images** (format recommandé: 1200x800px)
   - Screenshots d'applications
   - Mockups de designs
   - Captures d'écran

2. **Ajoutez-les dans `/public`**:
   ```
   public/
   ├── projects/
   │   ├── projet1.jpg
   │   ├── projet2.jpg
   │   └── projet3.jpg
   ```

3. **Mettez à jour les chemins** dans `projects.tsx`:
   ```typescript
   image: '/projects/projet1.jpg',
   ```

### Modifier la Navigation

Fichier: `components/ui/navbar.tsx`

```typescript
// Ligne 6
const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  // Ajoutez/supprimez des liens
];
```

### Personnaliser le Footer

Fichier: `components/ui/footer.tsx`

```typescript
// Ligne 16 - Texte du copyright
<span>© {currentYear} Votre Nom.</span>
```

## 🚀 Intégrations Utiles

### Formulaire de Contact avec Formspree

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Obtenez votre endpoint
3. Modifiez `components/sections/contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/VOTRE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  }

  setIsSubmitting(false);
};
```

### Google Analytics

1. Installez le package:
```bash
npm install @next/third-parties
```

2. Ajoutez dans `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## ✅ Checklist Finale

Avant de déployer, vérifiez que vous avez:

- [ ] Remplacé "Votre Nom" dans le Hero
- [ ] Mis à jour tous les liens sociaux (GitHub, LinkedIn, Email)
- [ ] Personnalisé les compétences avec vos technologies
- [ ] Ajouté vos vrais projets avec descriptions
- [ ] Complété vos expériences professionnelles
- [ ] Ajouté des témoignages (si disponibles)
- [ ] Mis à jour les informations de contact
- [ ] Changé le titre et la description dans `app/layout.tsx`
- [ ] Ajouté vos images de projets (optionnel)
- [ ] Testé le formulaire de contact
- [ ] Vérifié la version mobile

## 🆘 Besoin d'Aide ?

- Consultez la [documentation Next.js](https://nextjs.org/docs)
- Visitez la [documentation Framer Motion](https://www.framer.com/motion/)
- Regardez les [exemples Tailwind](https://tailwindcss.com/docs)

Bon courage avec votre portfolio ! 🚀
