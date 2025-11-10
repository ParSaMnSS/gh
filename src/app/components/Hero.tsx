import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white text-center py-32">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-brand-primary mb-4">
          Health & Quality Guaranteed
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          General Trade, Agricultural & Animal Feed Production Company
        </p>
        <Link
          href="/about-us"
          className="bg-brand-primary text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-brand-secondary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;