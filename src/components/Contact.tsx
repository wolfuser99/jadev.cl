import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { actions } from 'astro:actions';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: 'web'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const extractErrorMessage = (error: unknown): string => {
    if (error && typeof error === 'object' && 'fields' in error) {
      const fields = (error as { fields?: Record<string, string[]> }).fields;
      const first = Object.values(fields ?? {})
        .flat()
        .find(Boolean);
      if (first) return first;
    }

    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    return 'Ocurrió un error al enviar tu solicitud.';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      
      const result = await actions.contact(formDataObj);

      if (result.error) {
        const message = extractErrorMessage(result.error);
        setStatus('error');
        setErrorMessage(message);
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        projectType: 'web'
      });
    } catch (err) {
      console.error('Error sending contact request', err);
      setStatus('error');
      setErrorMessage('No pudimos enviar tu solicitud. Inténtalo nuevamente.');
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos listos para convertir tus ideas en soluciones digitales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solicita una cotización</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de proyecto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="web">Aplicación Web</option>
                  <option value="mobile">Aplicación Móvil</option>
                  <option value="desktop">Software de Escritorio</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Describe tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
              </button>

              {status === 'success' && (
                <p className="text-green-700 text-sm" role="status" aria-live="polite">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p className="text-red-600 text-sm" role="alert" aria-live="assertive">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a href="mailto:contacto@jadev.cl" className="text-gray-700 hover:text-blue-700 transition-colors">
                      contacto@jadev.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                    <a href="tel:+56912345678" className="text-gray-700 hover:text-blue-700 transition-colors">
                      +56 9 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Ubicación</h4>
                    <p className="text-gray-700">
                      Concepcion, Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Por qué trabajar con nosotros?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Más de 5 años de experiencia en el sector</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Equipo especializado en tecnologías modernas</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Compromiso con la calidad y resultados</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Soporte continuo post-implementación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;