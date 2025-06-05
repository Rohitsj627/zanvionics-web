import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hook/useInView';

const blogs = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes...",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    date: "Mar 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Learn the best practices for creating robust and scalable web applications...",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    date: "Mar 12, 2024",
    readTime: "8 min read"
  },
  {
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of successful digital transformation initiatives...",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    date: "Mar 10, 2024",
    readTime: "6 min read"
  }
];

const BlogCard = ({ blog }) => {
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
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
        <p className="text-gray-400 mb-4">{blog.excerpt}</p>
        <button className="text-purple-400 hover:text-purple-300 transition-colors">
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

export default function TopBlogs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Latest Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Top Blog Posts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, innovation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}