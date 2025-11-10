import React from "react";
import Link from "next/link";

const AboutUsHome = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder Column */}
          <div className="rounded-lg h-96 bg-slate-200 flex items-center justify-center">
            <p className="text-slate-500">Image Placeholder</p>
          </div>

          {/* Text Content Column */}
          <div>
            <p className="text-brand-primary font-semibold mb-3">About Us</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Ghadir Babil
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ghadir Babil began in 2004 by establishing an animal feed
              factory, and now it is one of the competing companies in Iraq. We
              are an Iraqi company specialized in general trade, agricultural,
              and animal feed production.
            </p>
            <Link
              href="/about-us"
              className="text-lg font-medium text-brand-primary border-2 border-brand-primary px-6 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
