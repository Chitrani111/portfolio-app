import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Password Generator",
      description: "A GUI for generating different Password.",
      link: "https://github.com/Chitrani111/CODSOFT/blob/main/Password_Generator.ipynb",
      technologies: ["Python", "Tkinter"],
    },
    {
      id: 2,
      title: "To-Do List",
      description: "A simple task manager.",
      link: "https://github.com/Chitrani111/CODSOFT/blob/main/To_Do_List.ipynb",
      technologies: ["Python", "Tkinter"],
    },
    {
      id: 3,
      title: "Basic Calculator",
      description: "Basic calculator operations using only Python.",
      link: "https://github.com/Chitrani111/CODSOFT/blob/main/calculator_project.ipynb",
      technologies: ["Python"],
    },
    {
      id: 4,
      title: "Machine Learning Assignments",
      description: "Machine learning assignments on Linear Regression.",
      link: "https://github.com/Chitrani111/ML-Assignment/tree/main",
      technologies: ["Python", "Pandas", "numpy", "sklearn", "matplotlib"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
