#!/usr/bin/env node

/**
 * Script pour générer un hash de mot de passe pour ADMIN_PASSWORD_HASH
 * Usage: node scripts/generate-password-hash.js <password>
 */

const bcrypt = require('bcryptjs');

async function generateHash() {
  const password = process.argv[2];

  if (!password) {
    console.error('❌ Usage: node scripts/generate-password-hash.js <password>');
    console.error('   Exemple: node scripts/generate-password-hash.js admin123');
    process.exit(1);
  }

  console.log('🔐 Génération du hash pour le mot de passe...\n');

  const hash = await bcrypt.hash(password, 10);

  console.log('✅ Hash généré avec succès!\n');
  console.log('📋 Variables d\'environnement à ajouter sur Vercel:\n');
  console.log('ADMIN_USERNAME=admin');
  console.log('ADMIN_EMAIL=admin@tahadev.com');
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log('\n💡 Copiez ces 3 variables dans Vercel > Settings > Environment Variables');
  console.log('   Puis redéployez l\'application.\n');
}

generateHash().catch((error) => {
  console.error('❌ Erreur:', error);
  process.exit(1);
});
