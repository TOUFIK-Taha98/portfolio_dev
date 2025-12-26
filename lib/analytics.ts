import { google } from 'googleapis';

export interface AnalyticsData {
  pageViews: number;
  users: number;
  sessions: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface PageData {
  path: string;
  views: number;
  users: number;
}

export interface TimeSeriesData {
  date: string;
  views: number;
  users: number;
}

export interface CountryData {
  country: string;
  users: number;
  sessions: number;
  pageViews: number;
}

async function getAuthClient() {
  const credentialsStr = process.env.GOOGLE_ANALYTICS_CREDENTIALS;
  if (!credentialsStr) {
    throw new Error('GOOGLE_ANALYTICS_CREDENTIALS is not set');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentialsStr),
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });

  return auth;
}

export async function getAnalyticsData(
  startDate: string = '30daysAgo',
  endDate: string = 'today'
): Promise<AnalyticsData | null> {
  try {
    const auth = await getAuthClient();
    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth,
    });
    
    const propertyId = process.env.GA_PROPERTY_ID;

    if (!propertyId) {
      console.error('GA_PROPERTY_ID is not set');
      return null;
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
      },
    });

    const row = response.data.rows?.[0];
    if (!row || !row.metricValues) {
      return null;
    }

    return {
      pageViews: parseInt(row.metricValues[0].value || '0'),
      users: parseInt(row.metricValues[1].value || '0'),
      sessions: parseInt(row.metricValues[2].value || '0'),
      bounceRate: parseFloat(row.metricValues[3].value || '0'),
      avgSessionDuration: parseFloat(row.metricValues[4].value || '0'),
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return null;
  }
}

export async function getTopPages(
  startDate: string = '30daysAgo',
  endDate: string = 'today',
  limit: number = 10
): Promise<PageData[]> {
  try {
    const auth = await getAuthClient();
    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth,
    });
    
    const propertyId = process.env.GA_PROPERTY_ID;

    if (!propertyId) {
      return [];
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'totalUsers' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: limit.toString(),
      },
    });

    return (response.data.rows || []).map(row => ({
      path: row.dimensionValues?.[0].value || '',
      views: parseInt(row.metricValues?.[0].value || '0'),
      users: parseInt(row.metricValues?.[1].value || '0'),
    }));
  } catch (error) {
    console.error('Error fetching top pages:', error);
    return [];
  }
}

export async function getTimeSeriesData(
  startDate: string = '30daysAgo',
  endDate: string = 'today'
): Promise<TimeSeriesData[]> {
  try {
    const auth = await getAuthClient();
    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth,
    });
    
    const propertyId = process.env.GA_PROPERTY_ID;

    if (!propertyId) {
      return [];
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'date' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'totalUsers' },
        ],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }],
      },
    });

    return (response.data.rows || []).map(row => ({
      date: row.dimensionValues?.[0].value || '',
      views: parseInt(row.metricValues?.[0].value || '0'),
      users: parseInt(row.metricValues?.[1].value || '0'),
    }));
  } catch (error) {
    console.error('Error fetching time series data:', error);
    return [];
  }
}

export async function getCountryData(
  startDate: string = '30daysAgo',
  endDate: string = 'today',
  limit: number = 10
): Promise<CountryData[]> {
  try {
    const auth = await getAuthClient();
    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth,
    });
    
    const propertyId = process.env.GA_PROPERTY_ID;

    if (!propertyId) {
      return [];
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'country' }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
        ],
        orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }],
        limit: limit.toString(),
      },
    });

    return (response.data.rows || []).map(row => ({
      country: row.dimensionValues?.[0].value || '',
      users: parseInt(row.metricValues?.[0].value || '0'),
      sessions: parseInt(row.metricValues?.[1].value || '0'),
      pageViews: parseInt(row.metricValues?.[2].value || '0'),
    }));
  } catch (error) {
    console.error('Error fetching country data:', error);
    return [];
  }
}
