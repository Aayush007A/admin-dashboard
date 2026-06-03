export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: string; // lucide icon name
  color: string; // Tailwind gradient or color
}

export interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}
