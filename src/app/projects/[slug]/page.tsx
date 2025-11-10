import React from "react";
import Link from "next/link";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const projectData = {
    "feed-factory": {
      title: "Ghadir Babil Feed Factory",
      description:
        "This is our first project, where we produce high quality chicken feed for all stages.",
      features: [
        "Broiler poultry feed production",
        "Layer poultry feed production",
      ],
    },
    "poultry-farms": {
      title: "Ghadir Babil Poultry Farms",
      description:
        "We grow poultry without the use of drugs and antibiotics in our poultry farms, prioritizing consumer health and a safe production chain.",
      features: [
        "Drug and antibiotic-free",
        "Focus on consumer health",
        "Adherence to European Union standards",
      ],
    },
    research: {
      title: "Research Centre",
      description:
        "We have laboratories where we conduct experiments to make our products as healthy and high quality as possible.",
      features: [
        "Max quality pre-starter development",
        "Max quality starter development",
        "Ongoing feed optimization",
      ],
    },
    trade: {
      title: "General Trade Centre",
      description:
        "We offer import-export services in our general trade centre.",
      features: [
        "Importing hatching eggs",
        "Importing feed industrial machines & equipment",
        "Importing feed additives",
        "Importing raw materials",
      ],
    },
  };

  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <header className="bg-brand-primary py-24 text-white text-center">
        <h1 className="text-5xl font-bold">{project.title}</h1>
      </header>

      <main className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column (Placeholders) */}
            <div>
              <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center text-slate-500 text-lg">
                Image Placeholder
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
                <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center text-slate-500"></div>
              </div>
            </div>

            {/* Right Column (Details) */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Project Description
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {project.description}
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-lg text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block mt-16 text-lg font-medium text-brand-primary hover:text-brand-secondary"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;