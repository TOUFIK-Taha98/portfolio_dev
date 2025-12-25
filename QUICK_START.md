# 🚀 Quick Start - Démarrage Rapide

## ⚠️ Prérequis IMPORTANT

Ce projet nécessite **Node.js version 20.9.0 ou supérieure**.

### Vérifier votre version de Node.js
```bash
node --version
```

### Si votre version est < 20.9.0
1. Téléchargez la dernière version LTS sur [nodejs.org](https://nodejs.org/)
2. Ou utilisez [nvm](https://github.com/nvm-sh/nvm) :
   ```bash
   nvm install 20
   nvm use 20
   ```

---

## 📦 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans votre navigateur
# http://localhost:3000
```

---

## ✏️ Personnalisation en 5 étapes (30 min)

### 1️⃣ Informations personnelles (5 min)

**Fichier: `components/sections/hero.tsx`**

Remplacez ligne 33:
```typescript
<span className="gradient-text">Votre Nom</span>
```

Remplacez ligne 41:
```typescript
Développeur Full Stack  // Votre titre
```

Remplacez ligne 51:
```typescript
Passionné par la création d'expériences web...  // Votre description
```

**Fichier: `components/sections/contact.tsx`**

Remplacez lignes 70-72:
```typescript
value: 'contact@votre-email.com'
value: '+33 6 12 34 56 78'
value: 'Paris, France'
```

---

### 2️⃣ Compétences (10 min)

**Fichier: `components/sections/skills.tsx`**

Modifiez l'array `skillCategories` (ligne 6):
```typescript
skills: [
  { name: 'React / Next.js', level: 95 },  // Changez les noms et niveaux
  { name: 'TypeScript', level: 90 },
  // Ajoutez vos compétences...
]
```

---

### 3️⃣ Projets (15 min)

**Fichier: `components/sections/projects.tsx`**

Modifiez l'array `projects` (ligne 8):
```typescript
{
  title: 'Nom de Votre Projet',
  category: 'Full Stack',  // Full Stack, Frontend, Backend, ou Mobile
  description: 'Description courte',
  longDescription: 'Description détaillée',
  tags: ['Next.js', 'TypeScript'],
  github: 'https://github.com/username/projet',
  demo: 'https://votre-demo.com',
}
```

---

### 4️⃣ Expériences (5 min)

**Fichier: `components/sections/experience.tsx`**

Modifiez l'array `experiences` (ligne 6):
```typescript
{
  company: 'Nom de l\'Entreprise',
  position: 'Votre Poste',
  period: '2022 - Présent',
  description: 'Description de votre rôle',
  achievements: ['Réalisation 1', 'Réalisation 2'],
  tags: ['Next.js', 'Node.js'],
}
```

---

### 5️⃣ Liens sociaux (5 min)

**Fichier: `components/sections/hero.tsx`** (ligne 75)
```typescript
{ icon: Github, href: 'https://github.com/VOTRE_USERNAME' }
{ icon: Linkedin, href: 'https://linkedin.com/in/VOTRE_PROFIL' }
{ icon: Mail, href: 'mailto:VOTRE_EMAIL@example.com' }
```

---

## 🎨 Changer les Couleurs (Optionnel)

**Fichier: `app/globals.css`** (ligne 3)

```css
:root {
  --primary: #6366f1;    /* Indigo par défaut */
  --secondary: #8b5cf6;  /* Purple par défaut */
  --accent: #ec4899;     /* Pink par défaut */
}
```

**Palettes suggérées:**

```css
/* Bleu Professionnel */
--primary: #3b82f6;
--secondary: #60a5fa;
--accent: #93c5fd;

/* Vert Modern */
--primary: #10b981;
--secondary: #34d399;
--accent: #6ee7b7;

/* Violet Créatif */
--primary: #8b5cf6;
--secondary: #a78bfa;
--accent: #c4b5fd;
```

---

## 📁 Où trouver quoi ?

```
portfolio/
├── components/sections/
│   ├── hero.tsx          ← Nom, titre, description
│   ├── skills.tsx        ← Vos compétences
│   ├── projects.tsx      ← Vos projets
│   ├── experience.tsx    ← Vos expériences
│   ├── testimonials.tsx  ← Témoignages clients
│   └── contact.tsx       ← Email, téléphone, localisation
├── components/ui/
│   ├── navbar.tsx        ← Menu de navigation
│   └── footer.tsx        ← Pied de page
└── app/
    ├── globals.css       ← Couleurs et styles globaux
    └── layout.tsx        ← Titre de la page et metadata
```

---

## 🚀 Déploiement sur Vercel (Gratuit)

1. **Push sur GitHub**
   ```bash
   git add .
   git commit -m "Mon portfolio personnalisé"
   git push
   ```

2. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "Import Project"
   - Sélectionnez votre repo GitHub
   - Cliquez "Deploy"

3. **C'est en ligne ! 🎉**
   - Vercel vous donnera une URL (ex: `votre-portfolio.vercel.app`)
   - Vous pouvez connecter votre propre domaine

---

## ✅ Checklist Avant Déploiement

- [ ] Nom et description personnalisés dans Hero
- [ ] Email, téléphone et localisation dans Contact
- [ ] Liens GitHub, LinkedIn, Email mis à jour
- [ ] Au moins 3 compétences ajoutées
- [ ] Au moins 2 projets ajoutés
- [ ] Au moins 1 expérience ajoutée
- [ ] Titre de la page changé dans `app/layout.tsx`
- [ ] Testé sur mobile (responsive)

---

## 🆘 Problèmes Courants

### Le serveur ne démarre pas
```bash
# Vérifier la version Node.js
node --version  # Doit être >= 20.9.0

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Erreur "Module not found"
```bash
# Réinstaller une dépendance spécifique
npm install framer-motion
```

### Les animations ne marchent pas
- Vérifiez que `'use client'` est présent en haut des composants animés
- Les composants dans `components/sections/` ont déjà cette directive

---

## 📚 Ressources Utiles

- 📖 [Guide de personnalisation détaillé](./CUSTOMIZATION.md)
- 📖 [Documentation Next.js](https://nextjs.org/docs)
- 🎨 [Choisir des couleurs](https://coolors.co/)
- 🖼️ [Créer des mockups](https://figma.com)
- ✉️ [Formulaire de contact](https://formspree.io/)

---

## 🎯 Prochaines Étapes

1. ✅ Personnaliser toutes les sections (30 min)
2. 📸 Ajouter vos vraies images de projets
3. 🚀 Déployer sur Vercel
4. 🌐 Partager votre portfolio !

---

**Besoin d'aide ?** Consultez `CUSTOMIZATION.md` pour des instructions détaillées.

**Prêt à déployer ?** Suivez les étapes de déploiement ci-dessus.

Bonne chance avec votre portfolio ! 🚀✨
