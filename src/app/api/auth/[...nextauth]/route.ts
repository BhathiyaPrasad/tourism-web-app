import NextAuth from 'next-auth';
import { authOptions } from '../../../../lib/authOptionsFile';  // Adjust the import path

// This is your NextAuth handler for the route
export const handler = NextAuth(authOptions);

// Export authOptions explicitly
export { authOptions };

// Allow GET and POST methods for NextAuth
export { handler as GET, handler as POST };
