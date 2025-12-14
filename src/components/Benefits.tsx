import React from 'react';
import { Code, Zap, UsersRound, Lock } from 'lucide-react';
import BenefitCard from './BenefitCard';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Code size={36} className="text-blue-700" />,
      title: "Soluciones Personalizadas",
      description: "Desarrollamos software específicamente adaptado a las necesidades y procesos únicos de tu empresa."
    },
    {
      icon: <Zap size={36} className="text-blue-700" />,
      title: "Optimización de Procesos",
      description: "Automatizamos y mejoramos tus flujos de trabajo para aumentar la eficiencia y reducir costos operativos."
    },
    {
      icon: <UsersRound size={36} className="text-blue-700" />,
      title: "Equipo Especializado",
      description: "Contamos con desarrolladores experimentados y certificados en las tecnologías más recientes del mercado."
    },
    {
      icon: <Lock size={36} className="text-blue-700" />,
      title: "Seguridad Garantizada",
      description: "Implementamos los más altos estándares de seguridad para proteger tus datos y la información de tus clientes."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestros servicios?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas que marcan la diferencia en tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;