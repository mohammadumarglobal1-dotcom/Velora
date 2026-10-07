import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, FolderKanban, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    // Full-screen overlay covering the public header completely
    <div className="fixed inset-0 z-[100] bg-black flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#0a0a0a] border-r border-white/10 flex flex-col p-6 gap-6 overflow-y-auto">
        <div className="pt-2">
          <Link href="/" className="flex items-baseline gap-0.5 group hover:opacity-80 transition-opacity">
            <span className="text-xl font-serif font-bold tracking-[0.12em] text-white uppercase leading-none">
              Velora
            </span>
            <span className="text-amber-400 text-xl leading-none font-serif"></span>
          </Link>
          <p className="text-white/30 text-xs mt-3 tracking-widest uppercase ml-1">Admin Portal</p>
        </div>

        <nav className="flex-1 flex flex-col gap-1 mt-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-all text-sm font-medium"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/leads"
            className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-all text-sm font-medium"
          >
            <Users className="w-4 h-4" />
            Leads
          </Link>
          <Link
            href="/admin/portfolio"
            className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-all text-sm font-medium"
          >
            <FolderKanban className="w-4 h-4" />
            Portfolio
          </Link>
        </nav>

        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center gap-3 px-4 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
              {(session.user?.name || session.user?.email || "A").charAt(0).toUpperCase()}
            </div>
            <div className="text-xs text-white/50 overflow-hidden text-ellipsis whitespace-nowrap">
              {session.user?.email}
            </div>
          </div>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 text-red-400/70 hover:text-red-400 hover:bg-red-400/5 px-4 py-3 rounded-sm transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-black p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}
