import React from "react";

const PartnersHome = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-primary mb-6">
          Our Valued Partners
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We are proud to collaborate with industry-leading companies to deliver
          the best products.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {/* Partner Logo Placeholders */}
          <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500">
            <p className="text-sm font-medium">Partner Logo</p>
          </div>
          <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500">
            <p className="text-sm font-medium">Partner Logo</p>
          </div>
          <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500">
            <p className="text-sm font-medium">Partner Logo</p>
          </div>
          <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500">
            <p className="text-sm font-medium">Partner Logo</p>
          </div>
          <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500">
            <p className="text-sm font-medium">Partner Logo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHome;
