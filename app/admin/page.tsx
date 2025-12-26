import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AdminNavbar } from "@/components/admin/admin-navbar";
import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/30">
      <AdminNavbar username={session.username} />
      <AdminDashboardClient />
    </div>
  );
}
