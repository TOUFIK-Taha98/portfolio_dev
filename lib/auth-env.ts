import bcrypt from 'bcryptjs';

/**
 * Système d'authentification basé sur les variables d'environnement
 * Simple et sans base de données
 */

export interface AdminUser {
  username: string;
  email: string;
  passwordHash: string;
}

/**
 * Récupère les credentials admin depuis les variables d'environnement
 */
export function getAdminCredentials(): AdminUser | null {
  const username = process.env.ADMIN_USERNAME;
  const email = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!username || !email || !passwordHash) {
    console.error('[AUTH-ENV] Variables d\'environnement manquantes');
    return null;
  }

  return {
    username,
    email,
    passwordHash
  };
}

/**
 * Authentifie un utilisateur avec username et password
 */
export async function authenticateUser(username: string, password: string): Promise<AdminUser | null> {
  const admin = getAdminCredentials();
  
  if (!admin) {
    console.error('[AUTH-ENV] Aucun admin configuré');
    return null;
  }

  // Vérifier le username
  if (admin.username !== username) {
    console.log('[AUTH-ENV] Username invalide');
    return null;
  }

  // Vérifier le mot de passe
  const isValidPassword = await bcrypt.compare(password, admin.passwordHash);
  
  if (!isValidPassword) {
    console.log('[AUTH-ENV] Mot de passe invalide');
    return null;
  }

  console.log('[AUTH-ENV] Authentification réussie pour:', username);
  return admin;
}

/**
 * Génère un hash de mot de passe (pour créer ADMIN_PASSWORD_HASH)
 */
export async function generatePasswordHash(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
