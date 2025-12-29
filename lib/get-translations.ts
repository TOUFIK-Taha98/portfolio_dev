// Server-side translation loader
export async function getTranslations(locale: string) {
  try {
    const translations = await import(`@/lib/translations/${locale}.json`);
    return translations.default;
  } catch (error) {
    // Fallback to French if locale not found
    const translations = await import(`@/lib/translations/fr.json`);
    return translations.default;
  }
}
