import React from 'react';
import { getDictionary, Dictionary } from '@/lib/i18n';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollHandler from './ScrollHandler';

export default async function LocaleLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: 'en' | 'ar';
}) {
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <ScrollHandler />
      {children}
      <Footer dict={dict} locale={locale} />
    </>
  );
}