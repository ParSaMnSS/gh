import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-slate-50 text-center py-40">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-primary mb-6 md:text-6xl">
          Health & Quality Guaranteed
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          General Trade, Agricultural & Animal Feed Production Company
        </p>
        <Link
          href="/about-us"
          className="bg-brand-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-secondary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
