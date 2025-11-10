export default function ContactPage() {
  return (
    <main>
      {/* Page Header (Redesigned) */}
      <header className="bg-white border-b border-gray-200 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-brand-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;d love to hear from you.
          </p>
        </div>
      </header>

      {/* Main Content: Form + Map */}
      <section className="bg-white py-32">
        <div className="container mx-auto grid grid-cols-1 gap-16 px-4 md:grid-cols-2">
          
          {/* Column 1: Contact Form */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">
              Send Us a Message
            </h2>
            {/* We will add the 'action' to this form later */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="block w-full rounded-lg border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring-brand-primary text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-lg border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring-brand-primary text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Question about poultry feed"
                  className="block w-full rounded-lg border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring-brand-primary text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message here..."
                  className="block w-full rounded-lg border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring-brand-primary text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-brand-primary px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-brand-secondary"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Map and Details */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">
              Our Location
            </h2>
            
            {/* Contact Details */}
            <div className="mb-8 space-y-4 text-lg">
              <p className="text-gray-600">
                <strong>Address:</strong> Baghdad, Iraq
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> 
                <a href="mailto:info@ghadirbabil.com" className="ml-2 text-brand-primary hover:underline">
                  info@ghadirbabil.com
                </a>
              </p>
              {/* Add Phone if available */}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
              {/* Using a static image of a map as a placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426564.309028014!2d44.07721832167195!3d33.3152411910606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74115%3A0x6268109036364635!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2sus!4v1731238950345!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}