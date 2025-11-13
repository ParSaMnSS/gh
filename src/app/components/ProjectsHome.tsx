import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from '@/lib/i18n';

const ProjectsHome = ({ dict, locale }: { dict: Dictionary, locale: 'en' | 'ar' }) => {
  const projects = [
    {
      iconSrc: "/svgs/icon-factory.svg",
      iconAlt: "Feed Factory",
      title: dict.ProjectsHome.FeedFactoryTitle,
      description: dict.ProjectsHome.FeedFactoryDescription,
      link: `/${locale}/projects/feed-factory`,
    },
    {
      iconSrc: "/svgs/icon-poultry.svg",
      iconAlt: "Poultry Farms",
      title: dict.ProjectsHome.PoultryFarmsTitle,
      description: dict.ProjectsHome.PoultryFarmsDescription,
      link: `/${locale}/projects/poultry-farms`,
    },
    {
      iconSrc: "/svgs/icon-research.svg",
      iconAlt: "Research Centre",
      title: dict.ProjectsHome.ResearchCentreTitle,
      description: dict.ProjectsHome.ResearchCentreDescription,
      link: `/${locale}/projects/research`,
    },
    {
      iconSrc: "/svgs/icon-trade.svg",
      iconAlt: "General Trade",
      title: dict.ProjectsHome.GeneralTradeTitle,
      description: dict.ProjectsHome.GeneralTradeDescription,
      link: `/${locale}/projects/trade`,
    },
  ];

  return (
    <section className="bg-brand-primary py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          {dict.ProjectsHome.Title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col text-center md:text-left"
            >
              <Image
                src={project.iconSrc}
                alt={project.iconAlt}
                width={48}
                height={48}
                className="text-brand-primary mb-4 mx-auto md:mx-0"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-block text-center bg-white text-brand-primary px-6 py-3 rounded-lg border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              >
                {dict.ProjectsHome.ReadMore}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;