import React from 'react';
import Hero from "../components/Hero";
import AboutUsHome from "../components/AboutUsHome";
import ProjectsHome from "../components/ProjectsHome";
import PartnersMarquee from "../components/PartnersMarquee";
import CTA from "../components/CTA";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollHandler from '../components/ScrollHandler';
import { getDictionary } from '../../lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <ScrollHandler />
      <main>
        <Hero dict={dict} locale={locale} />
        
        <section id="about-us">
          <AboutUsHome dict={dict} locale={locale} />
        </section>
        
        <section id="projects">
          <ProjectsHome dict={dict} locale={locale} />
        </section>
        
        <section id="partners">
          <PartnersMarquee dict={dict} />
        </section>

        <CTA dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}