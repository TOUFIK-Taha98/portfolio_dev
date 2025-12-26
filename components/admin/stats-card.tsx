"use client";

import { Card } from "@/components/ui/card";
import { Eye, Users, Activity, Clock, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  iconName: "Eye" | "Users" | "Activity" | "Clock";
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Users,
  Activity,
  Clock,
};

export function StatsCard({ title, value, iconName, description, trend }: StatsCardProps) {
  const Icon = iconMap[iconName];
  return (
    <Card className="p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2 gradient-text">{value}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
}
