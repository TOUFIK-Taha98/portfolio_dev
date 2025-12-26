const bcrypt = require('bcryptjs');
const { Client } = require('pg');

async function listAndCreateAdmin() {
  const client = new Client({
    connectionString: "postgresql://postgres:rZy8HusD7sNtDwgA@db.fsmytpxrkusajclibqjy.supabase.co:5432/postgres",
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    console.log('✅ Connecté à Supabase\n');

    // Vérifier si la table existe
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'admins'
      );
    `);
    
    console.log('📋 Table admins existe:', tableCheck.rows[0].exists);
    
    if (!tableCheck.rows[0].exists) {
      console.log('⚠️  Création de la table admins...');
      await client.query(`
        CREATE TABLE admins (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          last_login TIMESTAMP
        );
      `);
      console.log('✅ Table créée\n');
    }

    // Lister tous les utilisateurs
    console.log('📋 Liste de tous les utilisateurs:');
    const allUsers = await client.query('SELECT id, username, email, created_at FROM admins ORDER BY id');
    
    if (allUsers.rows.length === 0) {
      console.log('   Aucun utilisateur trouvé\n');
    } else {
      console.table(allUsers.rows);
    }

    // Créer l'utilisateur admin
    console.log('\n📝 Création de l\'utilisateur admin...');
    const username = 'admin';
    const email = 'admin@tahadev.com';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Supprimer l'ancien si existe
    await client.query('DELETE FROM admins WHERE username = $1', [username]);
    
    // Créer le nouveau
    const result = await client.query(
      'INSERT INTO admins (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, hashedPassword]
    );

    console.log('✅ Utilisateur créé:');
    console.log('   ID:', result.rows[0].id);
    console.log('   Username:', result.rows[0].username);
    console.log('   Email:', result.rows[0].email);

    // Vérifier que ça marche
    console.log('\n🔍 Vérification...');
    const verify = await client.query('SELECT * FROM admins WHERE username = $1', [username]);
    const isValid = await bcrypt.compare(password, verify.rows[0].password);
    
    console.log('   Utilisateur trouvé:', !!verify.rows[0]);
    console.log('   Mot de passe valide:', isValid);
    
    console.log('\n🎉 Identifiants:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    
    await client.end();
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    await client.end();
    process.exit(1);
  }
}

listAndCreateAdmin();
