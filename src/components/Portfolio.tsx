import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Sistema de Gestión para Retail",
      description: "Plataforma integral para administración de inventario, ventas y clientes con reportes en tiempo real.",
      image: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web App", "React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Aplicación Móvil de Logística",
      description: "App para optimización de rutas y seguimiento de envíos en tiempo real para empresa de transporte.",
      image: "https://images.pexels.com/photos/7709293/pexels-photo-7709293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Mobile", "React Native", "Firebase", "Google Maps API"]
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema LMS personalizado para institución educativa con módulos de cursos, evaluaciones y análisis de rendimiento.",
      image: "https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web App", "Angular", "Python", "MySQL"]
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Casos de Éxito
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Soluciones que han transformado los negocios de nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            <span className="font-semibold">El próximo caso de éxito podría ser el tuyo.</span> 
            <br/>Contáctanos para comenzar tu proyecto.
          </p>
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors inline-block font-medium"
          >
            Iniciar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;