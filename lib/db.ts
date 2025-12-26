import { Pool } from 'pg';

// Create a connection pool with SSL configuration for Supabase
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function createAdminTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP
      );
    `);
    console.log('Admin table created successfully');
  } catch (error) {
    console.error('Error creating admin table:', error);
    throw error;
  }
}

export async function getAdminByUsername(username: string) {
  try {
    const result = await pool.query(
      'SELECT * FROM admins WHERE username = $1',
      [username]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error getting admin:', error);
    return null;
  }
}

export async function createAdmin(username: string, email: string, hashedPassword: string) {
  try {
    const result = await pool.query(
      'INSERT INTO admins (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, hashedPassword]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
}

export async function updateLastLogin(username: string) {
  try {
    await pool.query(
      'UPDATE admins SET last_login = CURRENT_TIMESTAMP WHERE username = $1',
      [username]
    );
  } catch (error) {
    console.error('Error updating last login:', error);
  }
}
