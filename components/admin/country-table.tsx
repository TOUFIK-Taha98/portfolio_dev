"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Globe } from "lucide-react";

interface CountryTableProps {
  countries: {
    country: string;
    users: number;
    sessions: number;
    pageViews: number;
  }[];
}

// Map des codes pays vers emojis de drapeaux
const countryFlags: Record<string, string> = {
  "United States": "🇺🇸",
  "France": "🇫🇷",
  "Morocco": "🇲🇦",
  "Canada": "🇨🇦",
  "United Kingdom": "🇬🇧",
  "Germany": "🇩🇪",
  "Spain": "🇪🇸",
  "Italy": "🇮🇹",
  "Belgium": "🇧🇪",
  "Switzerland": "🇨🇭",
  "Netherlands": "🇳🇱",
  "Algeria": "🇩🇿",
  "Tunisia": "🇹🇳",
  "India": "🇮🇳",
  "China": "🇨🇳",
  "Japan": "🇯🇵",
  "Australia": "🇦🇺",
  "Brazil": "🇧🇷",
  "Mexico": "🇲🇽",
  "Argentina": "🇦🇷",
};

export function CountryTable({ countries }: CountryTableProps) {
  return (
    <Card className="p-6 border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-xl font-bold gradient-text">Visiteurs par Pays</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Top 10 des pays d&apos;où proviennent vos visiteurs
      </p>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Pays</TableHead>
              <TableHead className="text-right">Utilisateurs</TableHead>
              <TableHead className="text-right">Sessions</TableHead>
              <TableHead className="text-right">Pages vues</TableHead>
              <TableHead className="text-right">Pages/Session</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  Aucune donnée disponible
                </TableCell>
              </TableRow>
            ) : (
              countries.map((country, index) => {
                const pagesPerSession = country.sessions > 0 
                  ? (country.pageViews / country.sessions).toFixed(2)
                  : '0';
                
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          {countryFlags[country.country] || "🌍"}
                        </span>
                        <span className="font-medium">{country.country}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {country.users.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {country.sessions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {country.pageViews.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {pagesPerSession}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
