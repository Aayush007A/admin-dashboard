import { Home, Users, BarChart2, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Overview", icon: Home, href: "#" },
  { label: "Users", icon: Users, href: "#" },
  { label: "Analytics", icon: BarChart2, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col glass-sidebar border-r border-white/10 dark:border-zinc-800/30 min-h-screen">
      <nav className="flex-1 flex flex-col gap-2 p-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
