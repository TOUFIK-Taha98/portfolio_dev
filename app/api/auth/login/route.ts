import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth-env';
import { getSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    console.log('[LOGIN] Tentative de connexion pour:', username);
    console.log('[LOGIN] Auth basée sur ENV vars');

    if (!username || !password) {
      console.log('[LOGIN] Erreur: username ou password manquant');
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    console.log('[LOGIN] Authentification...');
    const admin = await authenticateUser(username, password);

    if (!admin) {
      console.log('[LOGIN] Erreur: Authentification échouée');
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create session
    console.log('[LOGIN] Création de la session...');
    const session = await getSession();
    session.userId = 1; // ID fixe pour l'admin ENV
    session.username = admin.username;
    session.email = admin.email;
    session.isLoggedIn = true;
    await session.save();

    console.log('[LOGIN] Connexion réussie pour:', username);
    return NextResponse.json({
      success: true,
      user: {
        id: 1,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error: any) {
    console.error('[LOGIN] Erreur complète:', error);
    console.error('[LOGIN] Message:', error?.message);
    console.error('[LOGIN] Stack:', error?.stack);
    return NextResponse.json(
      { error: 'Internal server error', details: error?.message },
      { status: 500 }
    );
  }
}
