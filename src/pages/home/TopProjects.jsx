import React, { useState, useEffect } from 'react';

// Simple intersection observer hook
const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView];
};

const projects = [
  
  {
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and development of a multi-vendor e-commerce platform serving 10,000+ daily users.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Development",
    problem: "Legacy platform with poor performance and user experience",
    solution: "Modern React-based SPA with microservices architecture",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    results: ["40% increase in conversion rate", "60% faster page load times", "25% reduction in bounce rate"],
    client: "RetailCorp",
    duration: "4 months",
    teamSize: "5 developers"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant mobile application for patient management and telemedicine consultations.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    tags: ["React Native", "HIPAA", "Telemedicine"],
    category: "Development",
    problem: "Manual patient management causing inefficiencies and compliance issues",
    solution: "Secure mobile app with integrated video consultations and patient records",
    technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "AWS HIPAA"],
    results: ["50% reduction in administrative time", "95% patient satisfaction", "100% HIPAA compliance"],
    client: "MedHealth Solutions",
    duration: "6 months",
    teamSize: "6 developers"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence dashboard with predictive analytics and automated reporting.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tags: ["AI/ML", "Analytics", "Python"],
    category: "Development",
    problem: "Manual reporting processes taking weeks to generate insights",
    solution: "AI-powered dashboard with real-time data processing and predictive models",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Apache Kafka"],
    results: ["90% reduction in reporting time", "35% improvement in forecast accuracy", "$2M cost savings"],
    client: "DataCorp Industries",
    duration: "8 months",
    teamSize: "4 developers"
  },
  {
    title: "Fintech Security Platform",
    description: "Multi-layered security platform for financial transactions with fraud detection and compliance monitoring.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    tags: ["Fintech", "Security", "Blockchain"],
    category: "Development",
    problem: "Increasing fraud attempts and regulatory compliance challenges",
    solution: "AI-driven fraud detection with blockchain-based transaction verification",
    technologies: ["Node.js", "Python", "Blockchain", "TensorFlow", "AWS Security"],
    results: ["99.8% fraud detection accuracy", "Zero compliance violations", "30% faster transaction processing"],
    client: "SecureFinance Ltd",
    duration: "10 months",
    teamSize: "8 developers"
  },
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-200 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-bold text-white font-heading mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>Client: {project.client}</span>
              <span>Duration: {project.duration}</span>
              <span>Team: {project.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-heading">Project Overview</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
              <h4 className="text-xl font-semibold text-red-800 dark:text-red-400 mb-3">The Challenge</h4>
              <p className="text-red-700 dark:text-red-300">{project.problem}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-3">Our Solution</h4>
              <p className="text-green-700 dark:text-green-300">{project.solution}</p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium border border-teal-200 dark:border-teal-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Measurable Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-teal-200 dark:border-teal-800 text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">✓</div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in similar results for your business?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView(0.2);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 transition-all duration-700 ease-out hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10 hover:scale-[1.02] cursor-pointer
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* View Case Study Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200">
              View Case Study
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client & Duration */}
          <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
            <span>Client: {project.client}</span>
            <span>{project.duration}</span>
          </div>
          
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 transition-all duration-300 group-hover:bg-teal-600/20 group-hover:border-teal-500/30 group-hover:text-teal-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
          
          {/* Results Preview */}
          <div className="mt-4 pt-4 border-t border-gray-800/50">
            <p className="text-xs text-gray-500 mb-2">Key Results:</p>
            <p className="text-sm text-teal-400 font-medium">{project.results[0]}</p>
          </div>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 ring-1 ring-teal-500/0 group-hover:ring-teal-500/20 rounded-2xl transition-all duration-300" />

        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
      </div>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg shadow-teal-500/25'
        : 'bg-gray-800/60 text-gray-400 border border-gray-700/50 hover:bg-gray-700/60 hover:text-gray-300 hover:border-gray-600/50'
    }`}
  >
    {label}
  </button>
);

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView(0.3);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Design', 'Development'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 via-black to-blue-900/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Featured Projects</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Our Latest Work
            </span>
          </h2> */}
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our most impactful solutions that have transformed businesses and delighted users worldwide
          </p>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isActive={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              />
            ))}
          </div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${activeFilter}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}