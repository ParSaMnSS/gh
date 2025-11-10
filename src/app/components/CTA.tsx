import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-brand-primary">
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10">
          Let us provide you with the high-quality feed and agricultural services
          you need. Get in touch with our team today.
        </p>
        <Link
          href="/contact"
          className="text-lg font-medium bg-white text-brand-primary px-8 py-4 rounded-lg 
                     hover:bg-slate-200 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
