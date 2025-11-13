import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../lib/i18n';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { i18n } from '../../../../lib/i18n';

const projectSlugs = ['feed-factory', 'poultry-farms', 'research', 'trade'];

export async function generateStaticParams({ params }: { params: { locale: 'en' | 'ar' } }) {
  // we need to generate for both locales
  const allPaths = i18n.locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      slug: slug,
      locale: locale,
    }))
  );

  return allPaths;
}

export default async function ProjectPage({ params }: { params: { slug: string, locale: 'en' | 'ar' } }) {
  const { slug, locale } = await (params as unknown as Promise<{ slug: string, locale: 'en' | 'ar' }>);
  const dict = await getDictionary(locale);
  
  const project = dict.ProjectsPage[slug as keyof typeof dict.ProjectsPage];

  if (!project || typeof project === 'string') {
    return notFound();
  }

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <header className="bg-brand-primary py-24 text-white text-center">
        <h1 className="text-5xl font-bold">{project.title}</h1>
      </header>

      <main className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left Column (Placeholders) */}
            <div className="flex flex-col gap-4">
              <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center text-slate-500 text-lg">
                Image Placeholder
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
              </div>
            </div>

            {/* Right Column (Details) */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                {dict.ProjectsPage.ProjectDescription}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {project.description}
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                {dict.ProjectsPage.KeyFeatures}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {(project.features as string[]).map((feature: string) => (
                  <li key={feature} className="text-lg text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href={`/${locale}`} className="inline-block mt-16 text-lg font-medium text-brand-primary hover:text-brand-secondary">
            {dict.ProjectsPage.BackToHome}
          </Link>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}