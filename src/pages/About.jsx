import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const AboutHero = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="min-h-[80vh] bg-black relative flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-300 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovating the Future of Technology
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We're a team of passionate technologists, innovators, and problem-solvers dedicated to transforming businesses through cutting-edge solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Mission = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empowering Digital Innovation
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership."
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in our work."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Drives Us
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

const Team = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Emily Davis",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet the Innovators
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="bg-black">
      <AboutHero />
      <Mission />
      <Values />
      <Team />
    </div>
  );
}