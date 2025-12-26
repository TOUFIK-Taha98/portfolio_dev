#!/usr/bin/env node

/**
 * Script pour réinitialiser le mot de passe d'un administrateur
 * Usage: node scripts/reset-password.js <username> <nouveau_mot_de_passe>
 */

const bcrypt = require('bcryptjs');
const { Client } = require('pg');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

async function resetPassword() {
  const username = process.argv[2];
  const newPassword = process.argv[3];

  if (!username || !newPassword) {
    console.error('❌ Usage: node scripts/reset-password.js <username> <nouveau_mot_de_passe>');
    console.error('   Exemple: node scripts/reset-password.js taha NouveauMotDePasse123!');
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();

    // Vérifier si l'utilisateur existe
    console.log(`🔍 Recherche de l'utilisateur "${username}"...`);
    const userCheck = await client.query(
      'SELECT id, username, email FROM admins WHERE username = $1',
      [username]
    );

    if (userCheck.rows.length === 0) {
      console.error(`\n❌ Erreur: L'utilisateur "${username}" n'existe pas`);
      await client.end();
      process.exit(1);
    }

    const user = userCheck.rows[0];
    console.log('✅ Utilisateur trouvé:');
    console.log('   ID:', user.id);
    console.log('   Username:', user.username);
    console.log('   Email:', user.email);

    // Hasher le nouveau mot de passe
    console.log('\n🔐 Hashage du nouveau mot de passe...');
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Mettre à jour le mot de passe
    console.log('📝 Mise à jour du mot de passe...');
    await client.query(
      'UPDATE admins SET password = $1 WHERE username = $2',
      [hashedPassword, username]
    );
    
    await client.end();

    console.log('\n✅ Mot de passe réinitialisé avec succès!');
    console.log(`🔗 ${user.username} peut maintenant se connecter avec le nouveau mot de passe sur: http://localhost:3000/admin/login`);
  } catch (error) {
    console.error('\n❌ Erreur lors de la réinitialisation du mot de passe:', error.message);
    await client.end();
    process.exit(1);
  }
}

resetPassword().catch((error) => {
  console.error('❌ Erreur inattendue:', error);
  process.exit(1);
});
