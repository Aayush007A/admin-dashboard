"use client";

import DashboardLayout from "./components/dashboard-layout";
import { StatCards } from "./components/stat-cards";
import { ChartPlaceholder } from "./components/chart-placeholder";
import { DataTable } from "./components/data-table";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <StatCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChartPlaceholder />
          </div>
          <div>
            <DataTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
