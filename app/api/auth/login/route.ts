import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getAdminByUsername, updateLastLogin } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    console.log('[LOGIN] Tentative de connexion pour:', username);
    console.log('[LOGIN] POSTGRES_URL présent:', !!process.env.POSTGRES_URL);

    if (!username || !password) {
      console.log('[LOGIN] Erreur: username ou password manquant');
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    console.log('[LOGIN] Recherche de l\'utilisateur dans la DB...');
    const admin = await getAdminByUsername(username);

    if (!admin) {
      console.log('[LOGIN] Erreur: Utilisateur non trouvé');
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('[LOGIN] Utilisateur trouvé:', admin.username);
    console.log('[LOGIN] Hash présent:', !!admin.password);
    console.log('[LOGIN] Vérification du mot de passe...');
    
    const isValidPassword = await bcrypt.compare(password, admin.password);
    console.log('[LOGIN] Mot de passe valide:', isValidPassword);

    if (!isValidPassword) {
      console.log('[LOGIN] Erreur: Mot de passe incorrect');
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    console.log('[LOGIN] Mise à jour du last_login...');
    await updateLastLogin(username);

    // Create session
    console.log('[LOGIN] Création de la session...');
    const session = await getSession();
    session.userId = admin.id;
    session.username = admin.username;
    session.email = admin.email;
    session.isLoggedIn = true;
    await session.save();

    console.log('[LOGIN] Connexion réussie pour:', username);
    return NextResponse.json({
      success: true,
      user: {
        id: admin.id,
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
