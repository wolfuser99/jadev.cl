import React from 'react';
import { MessageSquare, LineChart, Code2, Rocket } from 'lucide-react';
import ProcessStep from './ProcessStep';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} className="text-blue-700" />,
      number: "01",
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades y definimos objetivos claros para tu proyecto."
    },
    {
      icon: <LineChart size={32} className="text-blue-700" />,
      number: "02",
      title: "Planificación",
      description: "Diseñamos la arquitectura y creamos un plan detallado de desarrollo."
    },
    {
      icon: <Code2 size={32} className="text-blue-700" />,
      number: "03",
      title: "Desarrollo",
      description: "Implementamos la solución con metodologías ágiles y entregas incrementales."
    },
    {
      icon: <Rocket size={32} className="text-blue-700" />,
      number: "04",
      title: "Implementación",
      description: "Desplegamos tu solución y te acompañamos en la adopción y uso del sistema."
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Metodología ágil y transparente para garantizar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;