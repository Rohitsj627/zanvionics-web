import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hook/useInView';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with predictive analytics",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    tags: ["React", "D3.js", "Machine Learning"]
  },
  {
    title: "Smart Home Automation App",
    description: "IoT-based home control system with voice commands",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["React Native", "IoT", "Node.js"]
  },
  {
    title: "E-commerce Platform",
    description: "Scalable online marketplace with AI recommendations",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["Next.js", "Stripe", "PostgreSQL"]
  }
];

const ProjectCard = ({ project }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function TopProjects() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Top Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most impactful solutions that have transformed businesses
            and delighted users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}