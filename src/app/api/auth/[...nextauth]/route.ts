import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@velora.global" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In a real application, you should hash the password and compare against the database
        // For this secure setup, we use environment variables for the initial admin access
        const adminEmail = process.env.ADMIN_EMAIL || "Velora.global@gmail.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "velora-admin-secure";

        if (credentials?.email === adminEmail && credentials?.password === adminPassword) {
          return { id: "1", name: "Admin", email: adminEmail, role: "ADMIN" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
