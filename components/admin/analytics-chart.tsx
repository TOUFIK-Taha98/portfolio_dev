"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { TrendingUp } from "lucide-react";

interface TimeSeriesData {
  date: string;
  views: number;
  users: number;
}

interface AnalyticsChartProps {
  data: TimeSeriesData[];
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    date: format(
      new Date(
        item.date.slice(0, 4) +
          "-" +
          item.date.slice(4, 6) +
          "-" +
          item.date.slice(6, 8)
      ),
      "dd/MM"
    ),
  }));

  return (
    <Card className="p-6 border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold gradient-text">Tendances des visites</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="date" stroke="#6366f1" />
          <YAxis stroke="#6366f1" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e0e7ff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(99, 102, 241, 0.1)',
              color: '#0a0a0a'
            }}
            itemStyle={{
              color: '#0a0a0a'
            }}
            labelStyle={{
              color: '#0a0a0a',
              fontWeight: 'bold'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="url(#colorViews)"
            name="Vues"
            strokeWidth={3}
            dot={{ fill: "#6366f1", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="url(#colorUsers)"
            name="Utilisateurs"
            strokeWidth={3}
            dot={{ fill: "#a855f7", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
