import React, { useState } from 'react';
import useInView from '../../hook/useInView';
import { CheckCircle, Award, Users, Clock, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView(0.3);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "5+ years of experience delivering cutting-edge solutions across various industries.",
      details: "Our team has successfully completed 100+ projects, from startups to enterprise-level applications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "We prioritize your business goals and work as an extension of your team.",
      details: "95% client satisfaction rate with ongoing partnerships and referrals from satisfied customers."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule without compromising quality.",
      details: "98% on-time delivery rate with transparent project tracking and regular updates."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "We implement industry-standard security practices to protect your data and users.",
      details: "GDPR compliant, SSL encryption, secure coding practices, and regular security audits."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to build future-proof solutions.",
      details: "React, Node.js, AI/ML integration, cloud-native architecture, and modern DevOps practices."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Post-Launch Support",
      description: "Comprehensive support and maintenance to ensure your solution continues to perform.",
      details: "24/7 monitoring, regular updates, bug fixes, and feature enhancements as your business grows."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-black to-blue-900/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Why Choose Zanvionics</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Your Success is Our Priority
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We don't just build software – we build partnerships that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-teal-600/20 to-blue-600/20 border-teal-500/50 shadow-lg shadow-teal-500/20'
                    : 'bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50'
                } ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-teal-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-800/60 text-gray-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      activeFeature === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                {features[activeFeature].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                {features[activeFeature].title}
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
              {features[activeFeature].details}
            </p>

            <div className="flex justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "98%", label: "On-Time Delivery" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;