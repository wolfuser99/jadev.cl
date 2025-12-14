import React from 'react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Python", "Java", "PHP", "C#", ".NET Core"]
    },
    {
      title: "Bases de Datos",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "SQL Server"]
    },
    {
      title: "DevOps",
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD"]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologías que utilizamos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trabajamos con las herramientas más modernas y eficientes del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-800">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Nos adaptamos a las necesidades específicas de cada proyecto, utilizando las tecnologías más adecuadas para cada solución.
          </p>
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors inline-block font-medium"
          >
            Consulta por tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technologies;