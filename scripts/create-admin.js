#!/usr/bin/env node

/**
 * Script pour créer un compte administrateur
 * Usage: node scripts/create-admin.js <username> <email> <password>
 */

const bcrypt = require('bcryptjs');
const { Client } = require('pg');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

async function createAdmin() {
  const username = process.argv[2];
  const email = process.argv[3];
  const password = process.argv[4];

  if (!username || !email || !password) {
    console.error('❌ Usage: node scripts/create-admin.js <username> <email> <password>');
    console.error('   Exemple: node scripts/create-admin.js admin admin@example.com MonMotDePasse123!');
    process.exit(1);
  }

  console.log('🔄 Création de la table admins si elle n\'existe pas...');

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();

    // Créer la table si elle n'existe pas
    await client.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP
      );
    `);

    console.log('✅ Table créée ou déjà existante');

    // Hasher le mot de passe
    console.log('🔐 Hashage du mot de passe...');
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérer l'admin
    console.log('📝 Création du compte admin...');
    const result = await client.query(
      'INSERT INTO admins (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, hashedPassword]
    );
    
    await client.end();

    console.log('\n✅ Admin créé avec succès!');
    console.log('📋 Détails:');
    console.log('   ID:', result.rows[0].id);
    console.log('   Username:', result.rows[0].username);
    console.log('   Email:', result.rows[0].email);
    console.log('   Créé le:', result.rows[0].created_at);
    console.log('\n🔗 Vous pouvez maintenant vous connecter sur: http://localhost:3000/admin/login');
  } catch (error) {
    if (error.message.includes('duplicate key')) {
      console.error('\n❌ Erreur: Un admin avec ce nom d\'utilisateur ou cet email existe déjà');
    } else {
      console.error('\n❌ Erreur lors de la création de l\'admin:', error.message);
    }
    await client.end();
    process.exit(1);
  }
}

createAdmin().catch((error) => {
  console.error('❌ Erreur inattendue:', error);
  process.exit(1);
});
