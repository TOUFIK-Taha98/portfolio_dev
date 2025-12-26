import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createAdminTable, createAdmin, getAdminByUsername } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // This route should be protected or disabled in production
    const { username, email, password, setupKey } = await request.json();

    // Simple setup key validation (you should use a strong secret)
    if (setupKey !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json(
        { error: 'Invalid setup key' },
        { status: 403 }
      );
    }

    // Create table if it doesn't exist
    await createAdminTable();

    // Check if admin already exists
    const existingAdmin = await getAdminByUsername(username);
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = await createAdmin(username, email, hashedPassword);

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully',
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
