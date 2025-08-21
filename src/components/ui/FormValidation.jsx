import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

export const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    for (const rule of rules) {
      const error = rule(value);
      if (error) return error;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, values[field] || '');
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (submitFunction) => {
    if (!validateAll()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitFunction(values);
      setSubmitStatus('success');
      setValues(initialState); // Reset form
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitStatus
  };
};

// Validation rules
export const validationRules = {
  required: (value) => !value?.trim() ? 'This field is required' : '',
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return value && !emailRegex.test(value) ? 'Please enter a valid email address' : '';
  },
  minLength: (min) => (value) => 
    value && value.length < min ? `Must be at least ${min} characters` : '',
  phone: (value) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return value && !phoneRegex.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : '';
  }
};

// Form field component with validation
export const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  error, 
  onChange, 
  onBlur, 
  placeholder,
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full p-3 bg-white dark:bg-gray-800 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-gray-400 dark:hover:border-gray-600 ${
            error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 dark:border-gray-700'
          } text-gray-800 dark:text-white`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full p-3 bg-white dark:bg-gray-800 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-gray-400 dark:hover:border-gray-600 ${
            error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 dark:border-gray-700'
          } text-gray-800 dark:text-white`}
          {...props}
        />
      )}
      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm animate-fade-in">
          <AlertCircle size={16} />
          {error}
        </div>
      )}
    </div>
  );
};

// Submit status component
export const SubmitStatus = ({ status, onClose }) => {
  if (!status) return null;

  const isSuccess = status === 'success';
  
  return (
    <div className={`flex items-center gap-2 p-4 rounded-lg animate-slide-up ${
      isSuccess ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' : 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
    }`}>
      {isSuccess ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      <span>
        {isSuccess 
          ? 'Message sent successfully! We\'ll get back to you soon.' 
          : 'Failed to send message. Please try again.'
        }
      </span>
      <button 
        onClick={onClose}
        className="ml-auto text-current hover:opacity-70 transition-opacity"
      >
        ×
      </button>
    </div>
  );
};