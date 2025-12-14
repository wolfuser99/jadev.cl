import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Desarrollo de software <span className="text-blue-700">a la medida</span> de tu negocio
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Creamos soluciones tecnológicas personalizadas que transforman y optimizan los procesos de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-center sm:text-left font-medium"
              >
                Solicitar cotización
              </a>
              <a 
                href="#portafolio" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-700 hover:text-blue-700 transition-colors flex items-center justify-center sm:justify-start gap-2 font-medium"
              >
                Ver proyectos <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Equipo de desarrollo de software" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;