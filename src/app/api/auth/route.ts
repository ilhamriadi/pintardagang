import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory user storage for testing (replace with real DB later)
const users: Array<{
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
}> = [];

const JWT_SECRET = 'pintardagang-secret-key';

export async function POST(request: NextRequest) {
  try {
    console.log('Auth API called');
    
    const { email, password, action } = await request.json();
    console.log('Request data:', { email, action, passwordLength: password?.length });

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email dan password harus diisi' },
        { status: 400 }
      );
    }

    if (action === 'register') {
      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        return NextResponse.json(
          { error: 'Email sudah terdaftar' },
          { status: 400 }
        );
      }

      // Create new user (simplified - no password hashing for now)
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In production, hash this!
        name: email.split('@')[0],
        role: 'USER',
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      console.log('User created:', { id: newUser.id, email: newUser.email });

      // Create simple token
      const token = Buffer.from(`${newUser.id}:${newUser.email}`).toString('base64');

      return NextResponse.json({
        message: 'Registrasi berhasil',
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role
        },
        token
      });

    } else if (action === 'login') {
      // Find user
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        return NextResponse.json(
          { error: 'Email atau password salah' },
          { status: 401 }
        );
      }

      console.log('User logged in:', { id: user.id, email: user.email });

      // Create simple token
      const token = Buffer.from(`${user.id}:${user.email}`).toString('base64');

      return NextResponse.json({
        message: 'Login berhasil',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        },
        token
      });

    } else {
      return NextResponse.json(
        { error: 'Action tidak valid' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Auth error details:', error);
    return NextResponse.json(
      { 
        error: 'Terjadi kesalahan server',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}