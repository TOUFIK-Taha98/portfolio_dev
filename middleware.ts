import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en', 'ar'];
const defaultLocale = 'fr';

// Arabic-speaking countries
const arabicCountries = [
  'SA', // Saudi Arabia
  'AE', // United Arab Emirates
  'EG', // Egypt
  'MA', // Morocco
  'DZ', // Algeria
  'TN', // Tunisia
  'LY', // Libya
  'SD', // Sudan
  'IQ', // Iraq
  'YE', // Yemen
  'SY', // Syria
  'JO', // Jordan
  'LB', // Lebanon
  'KW', // Kuwait
  'OM', // Oman
  'QA', // Qatar
  'BH', // Bahrain
  'PS', // Palestine
  'MR', // Mauritania
  'SO', // Somalia
  'DJ', // Djibouti
  'KM', // Comoros
];

// English-speaking countries (major ones)
const englishCountries = [
  'US', // United States
  'GB', // United Kingdom
  'CA', // Canada
  'AU', // Australia
  'NZ', // New Zealand
  'IE', // Ireland
  'ZA', // South Africa
  'IN', // India
  'PK', // Pakistan
  'NG', // Nigeria
  'KE', // Kenya
  'GH', // Ghana
  'UG', // Uganda
  'ZW', // Zimbabwe
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is an admin route (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Check for session cookie
    const sessionCookie = request.cookies.get('admin_session');

    if (!sessionCookie) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Skip middleware for static files and API routes
  if (pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.startsWith('/admin') ||
      pathname.includes('.')) {
    return NextResponse.next();
  }

  // Handle locale-based routing
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has locale, just continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale based on geolocation and browser preferences
  function getPreferredLocale(): string {
    // Check if user already has a preferred language cookie
    const savedLocale = request.cookies.get('preferred-language')?.value;
    if (savedLocale && locales.includes(savedLocale)) {
      return savedLocale;
    }

    // Try to get country from Vercel's geolocation headers
    // Vercel automatically adds this header when deployed
    const country = request.headers.get('x-vercel-ip-country');
    
    if (country) {
      // Check if it's an Arabic-speaking country
      if (arabicCountries.includes(country)) {
        return 'ar';
      }
      // Check if it's an English-speaking country
      if (englishCountries.includes(country)) {
        return 'en';
      }
    }

    // Fallback to Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      // Parse Accept-Language header (e.g., "en-US,en;q=0.9,fr;q=0.8")
      const languages = acceptLanguage.split(',').map(lang => {
        const [code] = lang.trim().split(';')[0].split('-');
        return code.toLowerCase();
      });

      // Check if preferred language is in our supported locales
      for (const lang of languages) {
        if (lang === 'ar' || lang === 'en' || lang === 'fr') {
          return lang;
        }
      }
    }

    // Default to French
    return defaultLocale;
  }

  // For root path, redirect to detected locale
  if (pathname === '/') {
    const preferredLocale = getPreferredLocale();
    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url));
  }

  // For any other path without locale, redirect to detected locale
  if (!pathnameHasLocale) {
    const preferredLocale = getPreferredLocale();
    return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.).*)'],
};
