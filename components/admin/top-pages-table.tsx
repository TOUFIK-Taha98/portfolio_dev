"use client";

import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PageData {
  path: string;
  views: number;
  users: number;
}

interface TopPagesTableProps {
  pages: PageData[];
}

export function TopPagesTable({ pages }: TopPagesTableProps) {
  return (
    <Card className="p-6 border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold gradient-text">Pages les plus visitées</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Page</TableHead>
            <TableHead className="text-right">Vues</TableHead>
            <TableHead className="text-right">Utilisateurs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{page.path}</TableCell>
              <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
              <TableCell className="text-right">{page.users.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
