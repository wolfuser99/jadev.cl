import React from 'react';

interface ProcessStepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, number, title, description, isLast }) => {
  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-100 h-full">
        <div className="mb-4 flex items-center">
          <div className="bg-blue-50 p-3 rounded-full">
            {icon}
          </div>
          <span className="ml-auto text-3xl font-bold text-blue-200">{number}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-2 bg-blue-200 z-10"></div>
      )}
    </div>
  );
};

export default ProcessStep;