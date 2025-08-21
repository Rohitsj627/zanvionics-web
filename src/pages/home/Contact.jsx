import React from 'react';
import { useState } from 'react';
import useInView from '../../hook/useInView';
import { useFormValidation, validationRules, FormField, SubmitStatus } from '../../components/ui/FormValidation';

export default function ContactSection() {
  const [ref, isInView] = useInView(0.2);

  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  const formValidationRules = {
    firstName: [validationRules.required],
    lastName: [validationRules.required],
    email: [validationRules.required, validationRules.email],
    message: [validationRules.required, validationRules.minLength(10)]
  };

  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitStatus
  } = useFormValidation(initialFormState, formValidationRules);

  const submitForm = async (formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Get In Touch</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 max-w-lg">
              Ready to transform your business with cutting-edge technology solutions? 
              Contact us today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📍</span>
                <span>85 Great Portland Street, First Floor, London, United Kingdom, W1W 7LT</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📧</span>
                <span>info@zanvionics.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">⏰</span>
                <span>Response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          <div
            ref={ref}
            className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(submitForm); }} className="space-y-6">
              <SubmitStatus status={submitStatus} onClose={() => setSubmitStatus(null)} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your first name"
                  required
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              
              <FormField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email address"
                required
              />
              
              <FormField
                label="Message"
                name="message"
                type="textarea"
                value={values.message}
                error={errors.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your project requirements..."
                rows={4}
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:shadow-lg hover:shadow-teal-500/25 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}