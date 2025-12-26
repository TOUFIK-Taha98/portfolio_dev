"use client";

import { useState, useEffect } from "react";
import { StatsCard } from "@/components/admin/stats-card";
import { AnalyticsChart } from "@/components/admin/analytics-chart";
import { TopPagesTable } from "@/components/admin/top-pages-table";
import { CountryTable } from "@/components/admin/country-table";
import { DateRangeFilter } from "@/components/admin/date-range-filter";

interface AnalyticsData {
  pageViews: number;
  users: number;
  sessions: number;
  bounceRate: number;
  avgSessionDuration: number;
}

interface PageData {
  path: string;
  views: number;
  users: number;
}

interface TimeSeriesData {
  date: string;
  views: number;
  users: number;
}

interface CountryData {
  country: string;
  users: number;
  sessions: number;
  pageViews: number;
}

export function AdminDashboardClient() {
  const [startDate, setStartDate] = useState("30daysAgo");
  const [endDate, setEndDate] = useState("today");
  const [loading, setLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [topPages, setTopPages] = useState<PageData[]>([]);
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData[]>([]);
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}m ${secs}s`;
  };

  const fetchAnalytics = async (start: string, end: string) => {
    setLoading(true);
    try {
      // Fetch all data in parallel
      const [analyticsRes, pagesRes, timeSeriesRes, countryRes] = await Promise.all([
        fetch(`/api/analytics/overview?startDate=${start}&endDate=${end}`),
        fetch(`/api/analytics/pages?startDate=${start}&endDate=${end}`),
        fetch(`/api/analytics/timeseries?startDate=${start}&endDate=${end}`),
        fetch(`/api/analytics/countries?startDate=${start}&endDate=${end}`),
      ]);

      if (analyticsRes.ok) {
        const data = await analyticsRes.json();
        setAnalyticsData(data);
      }

      if (pagesRes.ok) {
        const data = await pagesRes.json();
        setTopPages(data);
      }

      if (timeSeriesRes.ok) {
        const data = await timeSeriesRes.json();
        setTimeSeriesData(data);
      }

      if (countryRes.ok) {
        const data = await countryRes.json();
        setCountryData(data);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics(startDate, endDate);
  }, []);

  const handleFilterChange = (newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    fetchAnalytics(newStartDate, newEndDate);
  };

  const getPeriodLabel = () => {
    if (startDate === "7daysAgo") return "7 derniers jours";
    if (startDate === "30daysAgo") return "30 derniers jours";
    if (startDate === "90daysAgo") return "3 derniers mois";
    if (startDate === "365daysAgo") return "12 derniers mois";
    return "Période personnalisée";
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text">Dashboard Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Vue d&apos;ensemble des statistiques de votre site ({getPeriodLabel()})
        </p>
      </div>

      {/* Date Range Filter */}
      <DateRangeFilter onFilterChange={handleFilterChange} />

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {!loading && analyticsData ? (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Vues de pages"
              value={analyticsData.pageViews.toLocaleString()}
              iconName="Eye"
              description="Total des pages vues"
            />
            <StatsCard
              title="Utilisateurs"
              value={analyticsData.users.toLocaleString()}
              iconName="Users"
              description="Visiteurs uniques"
            />
            <StatsCard
              title="Sessions"
              value={analyticsData.sessions.toLocaleString()}
              iconName="Activity"
              description="Nombre de sessions"
            />
            <StatsCard
              title="Durée moyenne"
              value={formatDuration(analyticsData.avgSessionDuration)}
              iconName="Clock"
              description="Par session"
            />
          </div>

          {/* Chart */}
          {timeSeriesData.length > 0 && (
            <div className="mb-8">
              <AnalyticsChart data={timeSeriesData} />
            </div>
          )}

          {/* Top Pages Table */}
          {topPages.length > 0 && (
            <div className="mb-8">
              <TopPagesTable pages={topPages} />
            </div>
          )}

          {/* Country Table */}
          {countryData.length > 0 && (
            <div className="mb-8">
              <CountryTable countries={countryData} />
            </div>
          )}
        </>
      ) : !loading ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Configuration requise
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            Les données analytics ne sont pas disponibles. Assurez-vous que les variables d&apos;environnement
            GOOGLE_ANALYTICS_CREDENTIALS et GA_PROPERTY_ID sont correctement configurées.
          </p>
        </div>
      ) : null}
    </main>
  );
}
