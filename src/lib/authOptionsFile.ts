import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt'; // Import JWT type from NextAuth

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Ensure your return object matches NextAuth's expected types
        const user = {
          id: '1', // id must be a string
          name: "Admin",
          email: "admin@example.com"
        };

        // Example authentication logic (replace with actual DB query)
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return user;
        }

        // Return null if authentication fails
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // JWT callback to include user id and email in the token
    async jwt({ token, user }) {
      // Ensure token is of the correct type
      if (user) {
        token.id = (user.id as string) || '';  // Make sure user.id is treated as string
        token.email = (user.email as string) || '';
      }
      return token;
    },
    // Session callback to include token data in session.user
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string || '';  // Ensure token.id is a string
        session.user.email = token.email as string || '';
      }
      return session;
    },
  },
};
