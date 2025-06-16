import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hook/useInView';
import { Link } from 'react-router-dom';

const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "AI/ML Engineer",
    department: "Research & Development",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time"
  }
];

const JobCard = ({ position }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
    >
      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#00B4A8]">Department:</span>
          <span>{position.department}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#00B4A8]">Location:</span>
          <span>{position.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#00B4A8]">Type:</span>
          <span>{position.type}</span>
        </div>
      </div>
      <Link
        to="/careers"
        className="inline-block bg-[#00B4A8] hover:bg-[#007399] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
      >
        Apply Now
      </Link>
    </motion.div>
  );
};

export default function CareersSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Join Our Team</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Career Opportunities
          </h2> */}
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our team of innovators and help shape the future of technology.
            We're always looking for talented individuals to join our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <JobCard key={index} position={position} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-[#00B4A8] hover:text-[#007399] transition-colors"
          >
            View All Positions
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}