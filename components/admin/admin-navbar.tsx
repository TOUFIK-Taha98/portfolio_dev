"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, BarChart3 } from "lucide-react";

interface AdminNavbarProps {
  username?: string;
}

export function AdminNavbar({ username }: AdminNavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="border-b bg-white/90 dark:bg-black/90 backdrop-blur-xl border-gray-200 dark:border-white/20 shadow-lg dark:shadow-indigo-500/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold text-lg gradient-text">
            <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>Admin Dashboard</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group">
              Analytics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="/" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group">
              Retour au site
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all group-hover:w-full" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {username && <span className="text-sm text-muted-foreground">Bonjour, <span className="font-semibold gradient-text">{username}</span></span>}
          <Button onClick={handleLogout} variant="outline" size="sm" className="border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400">
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </nav>
  );
}
