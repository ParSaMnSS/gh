import Link from "next/link";
import React from "react";
import { Dictionary } from '@/lib/i18n';

const CTA = ({ dict, locale }: { dict: Dictionary, locale: 'en' | 'ar' }) => {
  return (
    <section className="bg-brand-primary py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          {dict.CTA.Title}
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {dict.CTA.Subtitle}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="bg-white text-brand-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition-colors"
        >
          {dict.CTA.GetInTouch}
        </Link>
      </div>
    </section>
  );
};

export default CTA;