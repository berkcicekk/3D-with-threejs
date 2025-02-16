import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    image: "https://source.unsplash.com/400x300/?technology",
    link: "#",
  },
  {
    id: 2,
    title: "Launchpad Store",
    description: "An online store with advanced features and a sleek UI.",
    image: "https://source.unsplash.com/400x300/?shopping",
    link: "#",
  },
  {
    id: 3,
    title: "Crypto Task Manager",
    description: ".",
    image: "",
    link: "#",
  },
];

const Works = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-3 inline-block text-blue-500 hover:underline text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
