import React from 'react';
import Image from 'next/image';

// We now use an array of objects with the correct, user-provided links
const partnersData = [
  { src: 'agravis.png', alt: 'Agravis', href: 'https://www.agravis.de/de/unsere-leistungen' },
  { src: 'betsan.png', alt: 'Betsan', href: 'https://www.betsanltd.com/' },
  { src: 'dutchman.webp', alt: 'Dutchman', href: 'https://www.bigdutchman.com/en/homepage/' },
  { src: 'jps.jpg', alt: 'JPS', href: 'http://jordanpapersacks.com/' },
  { src: 'primavet.webp', alt: 'Primavet', href: 'https://prima-vet.de/' },
  { src: 'rotem.png', alt: 'Rotem', href: 'https://rotem.com.tr/' },
  { src: 'tekno.png', alt: 'Tekno', href: 'https://www.teknopanel.com.tr/tr-tr' },
  { src: 'yemtar.jpg', alt: 'Yemtar', href: 'https://www.yemtar.com/en' },
];

// We still duplicate the list for the seamless loop
const duplicatedPartners = [...partnersData, ...partnersData];

export default function PartnersMarquee() {
  return (
    <section className="bg-white py-32 overflow-hidden"> {/* overflow-hidden is still needed */}
      <div className="container mx-auto px-4">
        {/* Titles */}
        <h2 className="text-4xl font-bold text-center text-brand-primary mb-6">
          Our Valued Partners
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We are proud to collaborate with industry-leading companies to deliver
          the best products.
        </p>

        {/* --- Marquee (Desktop Only) --- */}
        {/* We hide this on mobile, and show it on medium screens and up */}
        <div
          className="marquee-container w-full overflow-hidden hidden md:block"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="animate-scroll flex-shrink-0">
            {duplicatedPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-8 flex-shrink-0"
              >
                <div
                  className="flex w-48 items-center justify-center rounded-lg py-4 
                             transition-transform duration-300 
                             hover:scale-110 hover:relative hover:z-10"
                >
                  <Image
                    src={`/partners/${partner.src}`}
                    alt={partner.alt}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- Mobile Grid (Mobile Only) --- */}
        {/* We show this on mobile, and hide it on medium screens and up */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {partnersData.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-32 w-full items-center justify-center rounded-lg bg-slate-50 p-4"
            >
              <Image
                src={`/partners/${partner.src}`}
                alt={partner.alt}
                width={150}
                height={80}
                className="object-contain"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
