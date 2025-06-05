import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const CareersHero = () => {
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
            <span className="text-purple-300 text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build the Future with Us
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our team of innovators and help shape the future of technology. We're always looking for talented individuals to join our mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: "💪",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "🎓",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "Above-market compensation and equity packages"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building and social activities"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career progression and mentorship"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Work With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenPositions = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced full-stack developer to join our engineering team."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our design team to create beautiful and intuitive user experiences."
    },
    {
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      description: "Help build the next generation of AI-powered solutions."
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure and deployment pipelines."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Open Positions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Current Opportunities
          </h2>
        </div>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Culture = () => {
  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and new ideas"
    },
    {
      title: "Collaboration",
      description: "Work together to achieve common goals"
    },
    {
      title: "Growth",
      description: "Continuous learning and development"
    },
    {
      title: "Impact",
      description: "Make a difference in the world"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Culture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Life at zanvionics
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Careers() {
  return (
    <div className="bg-black">
      <CareersHero />
      <Benefits />
      <OpenPositions />
      <Culture />
    </div>
  );
}