import React from "react";
import Link from "next/link";
import { Dictionary } from '@/lib/i18n';

const Hero = ({ dict, locale }: { dict: Dictionary, locale: 'en' | 'ar' }) => {
  return (
    <section className="bg-slate-50 text-center py-40">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-primary mb-6 md:text-6xl">
          {dict.Hero.Title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {dict.Hero.Subtitle}
        </p>
        <Link
          href={`/${locale}/#about-us`}
          className="bg-brand-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-secondary transition-colors"
        >
          {dict.Hero.LearnMore}
        </Link>
      </div>
    </section>
  );
};

export default Hero;