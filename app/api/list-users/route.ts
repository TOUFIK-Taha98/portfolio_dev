import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('[LIST-USERS] Connexion à la DB...');
    await client.connect();
    console.log('[LIST-USERS] Connecté avec succès');
    
    // Vérifier si la table existe
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'admins'
      );
    `);
    
    console.log('[LIST-USERS] Table admins existe:', tableCheck.rows[0].exists);
    
    if (!tableCheck.rows[0].exists) {
      await client.end();
      return NextResponse.json({
        success: false,
        error: 'Table admins does not exist',
        env: {
          postgresUrl: process.env.POSTGRES_URL?.substring(0, 50),
          nodeEnv: process.env.NODE_ENV
        }
      });
    }
    
    // Lister tous les utilisateurs
    const result = await client.query('SELECT id, username, email, created_at FROM admins ORDER BY id');
    console.log('[LIST-USERS] Utilisateurs trouvés:', result.rows.length);
    
    await client.end();
    
    return NextResponse.json({
      success: true,
      count: result.rows.length,
      users: result.rows,
      env: {
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        postgresUrlStart: process.env.POSTGRES_URL?.substring(0, 50),
        nodeEnv: process.env.NODE_ENV
      }
    });
  } catch (error: any) {
    console.error('[LIST-USERS] Erreur:', error);
    try {
      await client.end();
    } catch (e) {
      // Ignore
    }
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      stack: error.stack,
      env: {
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        postgresUrlStart: process.env.POSTGRES_URL?.substring(0, 50),
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 });
  }
}
