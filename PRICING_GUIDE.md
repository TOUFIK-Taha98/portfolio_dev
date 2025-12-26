# 💰 Section Tarification - Guide

## 📊 Vue d'Ensemble

La section Tarification a été ajoutée au portfolio avec conversion automatique des devises selon la langue sélectionnée.

## 🎯 Fonctionnalités

### 1. Conversion Automatique des Devises

Les prix sont automatiquement convertis selon la langue :

| Langue | Devise | Taux de conversion | Symbole |
|--------|--------|-------------------|---------|
| 🇫🇷 Français | Euro | 1.00 | € |
| 🇬🇧 Anglais | Dollar US | 1.09 | $ |
| 🇸🇦 Arabe | Riyal Saoudien | 4.08 | ر.س |

### 2. Prix de Base (en Euros)

| Offre | Prix de base | EN (USD) | AR (SAR) |
|-------|-------------|----------|----------|
| **Site Vitrine** | 700€ | $763 | 2,856 ر.س |
| **E-commerce** | 1,200€ | $1,308 | 4,896 ر.س |
| **Sur Mesure** | Variable | Custom | حسب الطلب |

## 📦 Packages Inclus

### 🌐 Site Vitrine (700€)
Idéal pour présenter votre entreprise ou vos services en ligne

**Inclus :**
- Design moderne et responsive
- Jusqu'à 5 pages personnalisées
- Optimisation SEO de base
- Formulaire de contact
- Hébergement conseillé
- Formation à la gestion du site

---

### 🛒 E-commerce (1,200€) - **POPULAIRE**
Solution complète pour vendre vos produits en ligne

**Inclus :**
- Boutique en ligne complète
- Gestion des produits illimitée
- Paiement sécurisé intégré
- Tableau de bord administrateur
- Gestion des stocks
- Support prioritaire 3 mois
- Formation complète

---

### ⚡ Projet Sur Mesure (Prix variable)
Une solution unique adaptée à vos besoins spécifiques

**Inclus :**
- Analyse détaillée de vos besoins
- Architecture personnalisée
- Fonctionnalités illimitées
- Intégrations API tierces
- Évolutivité garantie
- Support technique dédié
- Maintenance continue

## 🔧 Implémentation Technique

### Fichier Principal
```tsx
components/sections/pricing.tsx
```

### Système de Conversion
```typescript
const CURRENCY_RATES = {
  EUR: 1,
  USD: 1.09,
  SAR: 4.08,
};

const CURRENCY_SYMBOLS = {
  fr: { symbol: '€', code: 'EUR' },
  en: { symbol: '$', code: 'USD' },
  ar: { symbol: 'ر.س', code: 'SAR' },
};
```

### Fonction de Formatage
```typescript
const formatPrice = (priceInEur: number) => {
  const currency = CURRENCY_SYMBOLS[language];
  const rate = CURRENCY_RATES[currency.code];
  const convertedPrice = Math.round(priceInEur * rate);
  
  if (language === 'ar') {
    return `${convertedPrice.toLocaleString('ar-SA')} ${currency.symbol}`;
  }
  return `${currency.symbol}${convertedPrice.toLocaleString()}`;
};
```

## 🌍 Traductions

### Structure JSON
```json
{
  "pricing": {
    "title": "Mes",
    "title_highlight": "Tarifs",
    "subtitle": "Des solutions adaptées à vos besoins et votre budget",
    "popular": "Populaire",
    "starting_from": "À partir de",
    "custom_price": "Sur mesure",
    "cta_button": "Démarrer mon projet",
    "note": "Tous les projets incluent un support technique de 3 mois",
    "plans": {
      "showcase": { ... },
      "ecommerce": { ... },
      "custom": { ... }
    }
  }
}
```

### Fichiers de Traduction
- `lib/translations/fr.json` - Français
- `lib/translations/en.json` - Anglais
- `lib/translations/ar.json` - Arabe

## 🎨 Design

### Cartes de Tarification
- **Card Populaire** : Bordure et ombre en indigo avec badge "Populaire"
- **Cards Standards** : Bordure grise avec hover effect
- **Icônes** : Globe (Vitrine), ShoppingCart (E-commerce), Zap (Sur Mesure)
- **Gradient** : Couleurs différentes pour chaque carte

### Animations
- Apparition en fade-in avec délai échelonné
- Hover : Scale 1.05 avec ombre
- Effet parallaxe lors du scroll

## 📍 Navigation

La section est accessible via :
- **URL** : `#pricing`
- **Menu Navigation** : 
  - FR: "Tarifs"
  - EN: "Pricing"
  - AR: "الأسعار"

## 🔄 Mise à Jour des Prix

Pour modifier les prix, éditez `components/sections/pricing.tsx` :

```typescript
const pricingPlans = [
  {
    id: 'showcase',
    priceEur: 700, // Modifiez ici
    // ...
  },
  {
    id: 'ecommerce',
    priceEur: 1200, // Modifiez ici
    // ...
  },
];
```

Pour mettre à jour les taux de conversion :

```typescript
const CURRENCY_RATES = {
  EUR: 1,
  USD: 1.09,  // Mettez à jour ici
  SAR: 4.08,  // Mettez à jour ici
};
```

## ✅ Checklist de Vérification

- [x] Composant Pricing créé
- [x] Conversion de devises implémentée
- [x] Traductions ajoutées (FR/EN/AR)
- [x] Navigation mise à jour
- [x] Section intégrée dans la page principale
- [x] Effet parallaxe appliqué
- [x] Responsive design vérifié
- [x] Support RTL pour l'arabe

## 🎯 Note Importante

💡 **Support Technique** : Tous les projets incluent 3 mois de support technique gratuit.

## 🚀 Prochaines Améliorations Possibles

- [ ] Ajouter un calculateur de prix interactif
- [ ] Intégrer un système de paiement en ligne
- [ ] Ajouter des témoignages clients par package
- [ ] Créer une page de comparaison détaillée
- [ ] Ajouter des FAQ par offre
- [ ] Intégrer un système de réservation/devis

---

Développé avec ❤️ pour présenter des offres claires et transparentes
