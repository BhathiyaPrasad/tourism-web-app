import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", username: "jagathtravels", password: "jagathtravelsgu391vq9m5" }; // Example user

        // Verify username and password
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user; // Return user object if valid credentials
        }
        return null; // Return null if invalid credentials
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET, // Define this in your .env file
  session: {
    strategy: "jwt", // Use JWT for session handling
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
