import { Client } from 'pg';

// Get database connection config
function getDbConfig() {
  return {
    connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };
}

// Helper function to execute queries with a new client
async function executeQuery<T>(callback: (client: Client) => Promise<T>): Promise<T> {
  const client = new Client(getDbConfig());
  try {
    await client.connect();
    const result = await callback(client);
    return result;
  } finally {
    await client.end();
  }
}

export async function createAdminTable() {
  try {
    await executeQuery(async (client) => {
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
    });
    console.log('Admin table created successfully');
  } catch (error) {
    console.error('Error creating admin table:', error);
    throw error;
  }
}

export async function getAdminByUsername(username: string) {
  try {
    return await executeQuery(async (client) => {
      const result = await client.query(
        'SELECT * FROM admins WHERE username = $1',
        [username]
      );
      return result.rows[0];
    });
  } catch (error) {
    console.error('Error getting admin:', error);
    return null;
  }
}

export async function createAdmin(username: string, email: string, hashedPassword: string) {
  try {
    return await executeQuery(async (client) => {
      const result = await client.query(
        'INSERT INTO admins (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
        [username, email, hashedPassword]
      );
      return result.rows[0];
    });
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
}

export async function updateLastLogin(username: string) {
  try {
    await executeQuery(async (client) => {
      await client.query(
        'UPDATE admins SET last_login = CURRENT_TIMESTAMP WHERE username = $1',
        [username]
      );
    });
  } catch (error) {
    console.error('Error updating last login:', error);
  }
}
