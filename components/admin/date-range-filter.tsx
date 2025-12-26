"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface DateRangeFilterProps {
  onFilterChange: (startDate: string, endDate: string) => void;
}

type FilterType = "7days" | "30days" | "90days" | "year" | "custom";

export function DateRangeFilter({ onFilterChange }: DateRangeFilterProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("30days");
  const [showCustom, setShowCustom] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

  const filters = [
    { id: "7days" as FilterType, label: "7 jours", startDate: "7daysAgo", endDate: "today" },
    { id: "30days" as FilterType, label: "30 jours", startDate: "30daysAgo", endDate: "today" },
    { id: "90days" as FilterType, label: "3 mois", startDate: "90daysAgo", endDate: "today" },
    { id: "year" as FilterType, label: "1 an", startDate: "365daysAgo", endDate: "today" },
  ];

  const handleFilterClick = (filter: typeof filters[0]) => {
    setActiveFilter(filter.id);
    setShowCustom(false);
    onFilterChange(filter.startDate, filter.endDate);
  };

  const handleCustomClick = () => {
    setActiveFilter("custom");
    setShowCustom(true);
  };

  const handleCustomApply = () => {
    if (customStartDate && customEndDate) {
      // Format: YYYY-MM-DD
      onFilterChange(customStartDate, customEndDate);
    }
  };

  return (
    <Card className="p-4 mb-6 border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold gradient-text">Période d'analyse</h3>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => handleFilterClick(filter)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              className={
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
                  : "border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
              }
            >
              {filter.label}
            </Button>
          ))}
          <Button
            onClick={handleCustomClick}
            variant={activeFilter === "custom" ? "default" : "outline"}
            size="sm"
            className={
              activeFilter === "custom"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
                : "border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
            }
          >
            Personnalisé
          </Button>
        </div>

        {showCustom && (
          <div className="flex flex-col sm:flex-row gap-3 p-4 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                Date de début
              </label>
              <Input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className="border-indigo-200 dark:border-indigo-800"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                Date de fin
              </label>
              <Input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className="border-indigo-200 dark:border-indigo-800"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleCustomApply}
                disabled={!customStartDate || !customEndDate}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/50"
              >
                Appliquer
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
