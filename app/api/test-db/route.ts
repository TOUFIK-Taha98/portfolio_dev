import { NextResponse } from 'next/server';
import { getAdminByUsername } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    console.log('[TEST-DB] Début du test de connexion...');
    console.log('[TEST-DB] POSTGRES_URL présent:', !!process.env.POSTGRES_URL);
    console.log('[TEST-DB] NODE_ENV:', process.env.NODE_ENV);
    
    // Test de connexion à la base de données
    console.log('[TEST-DB] Recherche de l\'utilisateur admin...');
    const testUser = await getAdminByUsername('admin');
    
    if (!testUser) {
      console.log('[TEST-DB] Utilisateur admin non trouvé');
      return NextResponse.json({
        success: false,
        error: 'User not found',
        env: {
          hasPostgresUrl: !!process.env.POSTGRES_URL,
          postgresUrlStart: process.env.POSTGRES_URL?.substring(0, 30) || 'not set',
          nodeEnv: process.env.NODE_ENV
        }
      });
    }
    
    console.log('[TEST-DB] Utilisateur trouvé:', testUser.username);
    
    // Test du hash du mot de passe
    const testPassword = 'admin123';
    const isValid = await bcrypt.compare(testPassword, testUser.password);
    console.log('[TEST-DB] Test du mot de passe admin123:', isValid);
    
    return NextResponse.json({
      success: true,
      dbConnected: true,
      userFound: true,
      passwordTest: {
        testedPassword: testPassword,
        isValid: isValid
      },
      userData: {
        id: testUser.id,
        username: testUser.username,
        email: testUser.email,
        hasPassword: !!testUser.password,
        passwordLength: testUser.password?.length || 0,
        passwordPrefix: testUser.password?.substring(0, 10)
      },
      env: {
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        postgresUrlStart: process.env.POSTGRES_URL?.substring(0, 30) || 'not set',
        nodeEnv: process.env.NODE_ENV,
        hasSessionSecret: !!process.env.SESSION_SECRET
      }
    });
  } catch (error: any) {
    console.error('[TEST-DB] Erreur:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack,
      env: {
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        postgresUrlStart: process.env.POSTGRES_URL?.substring(0, 30) || 'not set',
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 });
  }
}
