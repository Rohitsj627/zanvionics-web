import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const ServicesHero = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="min-h-[80vh] bg-black relative flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From web development to AI integration, we offer end-to-end solutions to help your business thrive in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
        <span className="text-2xl">{service.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-400">
            <span className="text-purple-400">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const MainServices = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web solutions built with modern technologies.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Integration"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps"
      ]
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      description: "Intelligent automation and machine learning integration.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and solutions.",
      features: [
        "Cloud Migration",
        "AWS Solutions",
        "Azure Integration",
        "Cloud Security"
      ]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Big Data Processing",
        "Real-time Analytics"
      ]
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Protect your digital assets with robust security solutions.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Security Training"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We analyze your needs and define project objectives."
    },
    {
      title: "Planning",
      description: "Detailed project planning and resource allocation."
    },
    {
      title: "Development",
      description: "Agile development with regular updates and feedback."
    },
    {
      title: "Testing",
      description: "Thorough testing and quality assurance."
    },
    {
      title: "Deployment",
      description: "Smooth deployment and system integration."
    },
    {
      title: "Support",
      description: "Ongoing maintenance and technical support."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How We Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Services() {
  return (
    <div className="bg-black">
      <ServicesHero />
      <MainServices />
      <Process />
    </div>
  );
}