"use client";

import { useState, useMemo } from "react";
import { tableData } from "../../lib/data";
import type { TableRow as TableRowType } from "../../lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow as ShadcnTableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 5;

export function DataTable() {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const filteredData = useMemo(() => {
    return tableData.filter((row: TableRowType) =>
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.email.toLowerCase().includes(filter.toLowerCase()) ||
      row.role.toLowerCase().includes(filter.toLowerCase()) ||
      row.status.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const paginatedData = useMemo(() => {
    const start = page * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, page]);

  const pageCount = Math.ceil(filteredData.length / PAGE_SIZE);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setPage(0);
  };

  return (
    <div className="glass-card rounded-2xl p-6 border shadow-xl w-full overflow-x-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-foreground">Users Table</h2>
        <Input
          type="text"
          placeholder="Filter by name, email, role, status..."
          value={filter}
          onChange={handleFilterChange}
          className="max-w-xs focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
        />
      </div>
      <Table>
        <TableHeader>
          <ShadcnTableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </ShadcnTableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length === 0 ? (
            <ShadcnTableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                No results found.
              </TableCell>
            </ShadcnTableRow>
          ) : (
            paginatedData.map((row: TableRowType) => (
              <ShadcnTableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <span
                    className={
                      row.status === "Active"
                        ? "inline-block px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200 text-xs font-medium"
                        : "inline-block px-2 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200 text-xs font-medium"
                    }
                  >
                    {row.status}
                  </span>
                </TableCell>
              </ShadcnTableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-muted-foreground">
          Page {page + 1} of {pageCount}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
            className="hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page >= pageCount - 1}
            aria-label="Next page"
            className="hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
