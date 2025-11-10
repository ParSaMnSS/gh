import Image from 'next/image';

const logoFilenames = [
  'agravis.png',
  'betsan.png',
  'dutchman.webp',
  'jps.jpg',
  'primavet.webp',
  'rotem.png',
  'tekno.png',
  'yemtar.jpg',
];

const logos = [...logoFilenames, ...logoFilenames];

export default function PartnersMarquee() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        {/* Titles */}
        <h2 className="text-4xl font-bold text-center text-brand-primary mb-6">
          Our Valued Partners
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We are proud to collaborate with industry-leading companies to deliver
          the best products.
        </p>

        {/* This is the marquee structure.
          - 'overflow-hidden' creates the window.
          - 'marquee-container' is the wrapper that detects hover (defined in globals.css).
          - 'animate-scroll' is the track that moves (defined in globals.css).
        */}
        <div
          className="marquee-container w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="animate-scroll shrink-0">
            {logos.map((filename, index) => (
              <div
                key={index}
                className="mx-8 flex h-32 w-48 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={`/partners/${filename}`}
                  alt={`Partner logo ${index + 1}`}
                  width={150} // Set a consistent base width
                  height={80} // Set a consistent base height
                  className="object-contain" // Ensures logos fit nicely
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}