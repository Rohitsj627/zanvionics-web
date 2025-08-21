import React from 'react';
import { X, Check, ArrowRight, Play } from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-bounce-slow">{service.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">{service.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Professional {service.title.toLowerCase()} services</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Demo Video Placeholder */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl h-48 flex items-center justify-center group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play size={24} className="text-teal-600 ml-1" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Watch {service.title} Demo</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">See how we deliver results</p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed border-l-4 border-teal-500 pl-4">
            {service.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">What's Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Check size={16} className="text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          {service.process && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">Our Process:</h3>
              <div className="space-y-3">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {service.technologies && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">Technologies We Use:</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Hint */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-teal-200 dark:border-teal-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Investment Range</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Projects typically range from $2,000 - $50,000+ depending on complexity and requirements. 
              Get a personalized quote during your free consultation.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight size={16} />
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;