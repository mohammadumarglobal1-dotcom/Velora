import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Velora | We Build Digital Experiences That Move Businesses Forward",
  description: "Premium web development agency for startups, established businesses, and luxury brands.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const isAdmin = !!session;

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-white selection:text-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header isAdmin={isAdmin} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
