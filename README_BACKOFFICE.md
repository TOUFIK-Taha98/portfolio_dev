# 🎯 Backoffice Analytics - Guide Complet

## 📖 Vue d'ensemble

Ce backoffice vous permet de visualiser les statistiques de Google Analytics directement depuis votre site web, sans avoir à vous connecter à la console Google Analytics.

### ✨ Fonctionnalités

- 🔐 **Authentification sécurisée** avec Vercel Postgres
- 📊 **Dashboard Analytics complet** avec métriques en temps réel
- 📈 **Graphiques interactifs** de tendances (30 derniers jours)
- 📋 **Top 10 des pages** les plus visitées
- 🎨 **Interface moderne** et responsive
- 🔒 **Sécurité renforcée** (sessions cryptées, mots de passe hashés)

## 🚀 Installation Rapide

### 1. Variables d'Environnement

Créez `.env.local` :

```env
# Vercel Postgres
POSTGRES_URL="postgres://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NO_SSL="postgres://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb?sslmode=require"
POSTGRES_URL_NON_POOLING="postgres://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb?sslmode=require"

# Session (générez avec: openssl rand -base64 32)
SESSION_SECRET="changez-cette-cle-par-une-vraie-securisee-32-chars-minimum"

# Admin Setup (clé temporaire pour créer le premier admin)
ADMIN_SETUP_KEY="changez-aussi-cette-cle"

# Google Analytics
GA_PROPERTY_ID="123456789"
GOOGLE_ANALYTICS_CREDENTIALS='{"type":"service_account","project_id":"...","private_key":"..."}'
```

### 2. Configuration Google Analytics API

#### a) Créer un Service Account

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Sélectionnez votre projet (ou créez-en un)
3. Activez l'API : **Google Analytics Data API**
   - Menu → APIs & Services → Enable APIs and Services
   - Recherchez "Google Analytics Data API"
   - Cliquez sur "Enable"

4. Créez un Service Account :
   - Menu → IAM & Admin → Service Accounts
   - "Create Service Account"
   - Nom : `analytics-viewer` (ou autre)
   - Rôle : aucun besoin ici
   - Cliquez "Done"

5. Créez une clé JSON :
   - Cliquez sur le Service Account créé
   - Onglet "Keys" → "Add Key" → "Create new key"
   - Type : JSON
   - Téléchargez le fichier JSON

#### b) Donner accès au Service Account

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Admin (roue dentée en bas à gauche)
3. Colonne "Property" → "Property Access Management"
4. Cliquez "+ Add" (en haut à droite)
5. Collez l'email du Service Account (format : `xxx@xxx.iam.gserviceaccount.com`)
6. Rôle : **Viewer**
7. Décochez "Notify new users by email"
8. Cliquez "Add"

#### c) Obtenir le Property ID

1. Dans Google Analytics → Admin
2. Colonne "Property" → "Property Settings"
3. Copiez le **Property ID** (format numérique : `123456789`)

#### d) Configurer les variables

Ouvrez le fichier JSON téléchargé et copiez tout le contenu sur une seule ligne dans `GOOGLE_ANALYTICS_CREDENTIALS`.

Exemple :
```env
GOOGLE_ANALYTICS_CREDENTIALS='{"type":"service_account","project_id":"mon-projet-123","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIB...==\n-----END PRIVATE KEY-----\n","client_email":"analytics-viewer@mon-projet-123.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/analytics-viewer%40mon-projet-123.iam.gserviceaccount.com"}'
```

### 3. Créer le Premier Compte Admin

**Méthode 1 : Script Node.js**

```bash
node scripts/create-admin.js admin admin@example.com VotreMotDePasse123!
```

**Méthode 2 : API cURL**

```bash
curl -X POST http://localhost:3000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "VotreMotDePasse123!",
    "setupKey": "changez-aussi-cette-cle"
  }'
```

**Méthode 3 : Postman/Thunder Client**

```
POST http://localhost:3000/api/auth/setup
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@example.com",
  "password": "VotreMotDePasse123!",
  "setupKey": "changez-aussi-cette-cle"
}
```

### 4. Lancer l'Application

```bash
npm run dev
```

Ouvrez : http://localhost:3000/admin/login

## 🎨 Interface du Backoffice

### Page de Connexion (`/admin/login`)
- Design moderne avec animation
- Formulaire sécurisé
- Gestion des erreurs

### Dashboard (`/admin`)
- **4 Cartes de statistiques** :
  - 👁️ Vues de pages totales
  - 👥 Utilisateurs uniques
  - 🔄 Nombre de sessions
  - ⏱️ Durée moyenne des sessions

- **Graphique de tendances** :
  - Évolution sur 30 jours
  - Vues vs Utilisateurs
  - Interactif (Recharts)

- **Tableau des top pages** :
  - 10 pages les plus visitées
  - Nombre de vues et utilisateurs par page

## 🔐 Sécurité

### Architecture de Sécurité

1. **Authentification**
   - Sessions cryptées avec `iron-session`
   - Cookies HTTP-only et sécurisés
   - Durée : 7 jours

2. **Mots de passe**
   - Hashés avec bcrypt (10 rounds)
   - Jamais stockés en clair

3. **Protection des routes**
   - Middleware Next.js
   - Vérification de session sur chaque requête
   - Redirection automatique si non authentifié

4. **Base de données**
   - Vercel Postgres (sécurisé par défaut)
   - Connexions SSL

### Bonnes Pratiques de Sécurité

**En production, assurez-vous de :**

1. ✅ Utiliser des secrets forts (`SESSION_SECRET`)
2. ✅ Désactiver l'API setup après la création du premier admin
3. ✅ Utiliser HTTPS uniquement (automatique sur Vercel)
4. ✅ Changer le mot de passe par défaut
5. ✅ Ne jamais commit les fichiers `.env*`
6. ✅ Configurer les variables d'environnement sur Vercel Dashboard

## 📊 API Endpoints

### Authentification

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/api/auth/login` | POST | Connexion admin |
| `/api/auth/logout` | POST | Déconnexion |
| `/api/auth/session` | GET | Vérifier la session |
| `/api/auth/setup` | POST | Créer premier admin (à désactiver en prod) |

### Analytics

| Endpoint | Méthode | Paramètres | Description |
|----------|---------|------------|-------------|
| `/api/analytics/overview` | GET | `startDate`, `endDate` | Métriques globales |
| `/api/analytics/pages` | GET | `startDate`, `endDate`, `limit` | Top pages |
| `/api/analytics/timeseries` | GET | `startDate`, `endDate` | Données temporelles |

**Exemple :**
```bash
curl http://localhost:3000/api/analytics/overview?startDate=7daysAgo&endDate=today \
  -H "Cookie: admin_session=xxx"
```

## 🚀 Déploiement sur Vercel

### 1. Push sur GitHub

```bash
git add .
git commit -m "Add backoffice analytics"
git push origin main
```

### 2. Importer dans Vercel

1. Allez sur [vercel.com](https://vercel.com/)
2. "Import Project"
3. Sélectionnez votre repository

### 3. Configurer les Variables

Dans Vercel Dashboard → Settings → Environment Variables, ajoutez :

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_URL_NON_POOLING`
- `SESSION_SECRET`
- `ADMIN_SETUP_KEY`
- `GA_PROPERTY_ID`
- `GOOGLE_ANALYTICS_CREDENTIALS`

### 4. Déployer

Vercel déploie automatiquement à chaque push !

### 5. Créer l'Admin en Production

Une fois déployé, créez l'admin :

```bash
curl -X POST https://votre-domaine.vercel.app/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "MotDePasseSecurise123!",
    "setupKey": "votre-cle-setup"
  }'
```

**Important :** Désactivez ensuite l'API setup en ajoutant :
```env
DISABLE_SETUP_API=true
```

## 🐛 Dépannage

### Erreur : "Failed to fetch analytics data"

**Causes possibles :**
- ❌ `GA_PROPERTY_ID` incorrect
- ❌ `GOOGLE_ANALYTICS_CREDENTIALS` mal formaté
- ❌ Service Account sans accès à la propriété GA
- ❌ API Google Analytics Data pas activée

**Solutions :**
1. Vérifiez le Property ID dans GA
2. Vérifiez que le JSON est sur une ligne
3. Vérifiez l'accès du Service Account dans GA Admin
4. Activez l'API dans Google Cloud Console

### Erreur : "Unauthorized" sur /admin

**Causes :**
- ❌ Session expirée
- ❌ `SESSION_SECRET` manquant ou changé

**Solutions :**
1. Reconnectez-vous via `/admin/login`
2. Effacez les cookies du navigateur
3. Vérifiez `SESSION_SECRET` dans `.env.local`

### Erreur : "Database connection failed"

**Causes :**
- ❌ Variables `POSTGRES_*` incorrectes
- ❌ Base de données non créée sur Vercel

**Solutions :**
1. Vérifiez toutes les variables `POSTGRES_*`
2. Créez une database Postgres sur Vercel Dashboard

### Erreur : "Admin already exists"

**C'est normal !** Un admin existe déjà. Utilisez-le pour vous connecter.

## 📈 Personnalisation

### Changer la période des données

Par défaut, le dashboard affiche les 30 derniers jours. Pour changer :

**Dans `app/admin/page.tsx` :**

```typescript
const analyticsData = await getAnalyticsData("7daysAgo", "today"); // 7 jours
const topPages = await getTopPages("90daysAgo", "today", 20); // 90 jours, top 20
```

### Ajouter des métriques

**Dans `lib/analytics.ts` :**

Ajoutez des métriques Google Analytics :

```typescript
metrics: [
  { name: 'screenPageViews' },
  { name: 'totalUsers' },
  { name: 'sessions' },
  { name: 'bounceRate' },
  { name: 'averageSessionDuration' },
  { name: 'conversions' }, // Nouvelle métrique
],
```

Liste complète : [Google Analytics Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics)

## 📚 Stack Technique

- **Frontend** : Next.js 16, React 19, TypeScript
- **Styling** : Tailwind CSS, shadcn/ui
- **Charts** : Recharts
- **Auth** : iron-session, bcryptjs
- **Database** : Vercel Postgres
- **API** : Google Analytics Data API v1beta
- **Déploiement** : Vercel

## 📝 Notes Importantes

1. **Données en temps réel** : Les données GA ont un délai de ~24-48h
2. **Limites API** : Google Analytics Data API a des quotas (généreux pour usage normal)
3. **Session** : La session admin expire après 7 jours d'inactivité
4. **Sécurité** : Ne partagez jamais vos credentials ou secrets

## 🆘 Support

En cas de problème :
1. Vérifiez les logs dans la console du navigateur (F12)
2. Vérifiez les logs du serveur (`npm run dev`)
3. Consultez `BACKOFFICE_SETUP.md` pour plus de détails

---

**Bravo ! Votre backoffice analytics est prêt ! 🎉**
