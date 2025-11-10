import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsHome = () => {
  const projects = [
    {
      iconSrc: "/svgs/icon-factory.svg",
      iconAlt: "Feed Factory",
      title: "Ghadir Babil Feed Factory",
      description:
        "We produce high-quality broiler and layer poultry feed for all stages.",
      link: "/projects/feed-factory",
    },
    {
      iconSrc: "/svgs/icon-poultry.svg",
      iconAlt: "Poultry Farms",
      title: "Ghadir Babil Poultry Farms",
      description:
        "We grow poultry without the use of drugs and antibiotics in our specialized farms.",
      link: "/projects/poultry-farms",
    },
    {
      iconSrc: "/svgs/icon-research.svg",
      iconAlt: "Research Centre",
      title: "Research Centre",
      description:
        "Our laboratories conduct experiments to make our products as healthy as possible.",
      link: "/projects/research",
    },
    {
      iconSrc: "/svgs/icon-trade.svg",
      iconAlt: "General Trade",
      title: "General Trade Centre",
      description:
        "We offer import-export services, including hatching eggs, feed additives, and raw materials.",
      link: "/projects/trade",
    },
  ];

  return (
    <section className="bg-brand-primary py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Projects
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
                className="font-medium text-brand-primary hover:text-brand-secondary"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
