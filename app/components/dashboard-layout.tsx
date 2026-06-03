import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border-b border-white/10 dark:border-zinc-800/30">
          <h1 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            Admin Dashboard
          </h1>
          <ThemeToggle />
        </header>
        <main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
