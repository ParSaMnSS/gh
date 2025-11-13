import 'server-only';
import { notFound } from 'next/navigation';

// Type for the language files (to ensure type safety)
export type Dictionary = typeof import('../../locales/en.json');

// List of supported languages and their properties
const dictionaries = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  ar: () => import('../../locales/ar.json').then((module) => module.default),
};

// List of available locales
export const i18n = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
} as const;

// Utility function to get the dictionary based on locale
export const getDictionary = async (locale: 'en' | 'ar') => {
  if (!i18n.locales.includes(locale)) {
    // If the locale is invalid, Next.js notFound() will show the 404 page.
    notFound();
  }
  return dictionaries[locale]();
};

// Utility function to get text direction (RTL/LTR)
export const getDirection = (locale: 'en' | 'ar'): 'ltr' | 'rtl' => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};