// src/types/next-auth.d.ts
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string; // Add the 'id' field to the user object in the session
    } & DefaultSession['user']; // Ensure to keep the existing fields like 'name', 'email', etc.
  }

  interface JWT {
    id: string; // Add 'id' to the JWT token
  }
}
