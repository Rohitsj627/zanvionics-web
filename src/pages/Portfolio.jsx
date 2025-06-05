import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const PortfolioHero = () => {
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
            <span className="text-purple-300 text-sm font-medium">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions that have helped businesses transform and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="text-purple-400 hover:text-purple-300 transition-colors">
          View Case Study →
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online marketplace with AI-powered recommendations.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Healthcare App",
      description: "Mobile application for patient management and telemedicine.",
      image: "https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg",
      technologies: ["React Native", "Firebase", "WebRTC"]
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization and predictive analytics platform.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"]
    },
    {
      title: "Smart Home System",
      description: "IoT-based home automation system with voice control.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["IoT", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Financial Platform",
      description: "Secure banking and investment management system.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
      technologies: ["Angular", "Java", "PostgreSQL", "Docker"]
    },
    {
      title: "Education Platform",
      description: "Online learning management system with interactive features.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg",
      technologies: ["Next.js", "GraphQL", "MongoDB", "AWS"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed"
    },
    {
      number: "50+",
      label: "Happy Clients"
    },
    {
      number: "95%",
      label: "Client Satisfaction"
    },
    {
      number: "24/7",
      label: "Support"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-black">
      <PortfolioHero />
      <Projects />
      <Stats />
    </div>
  );
}