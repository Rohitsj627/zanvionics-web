import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hook/useInView';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "Working with zanvionics has been transformative for our business. Their AI solutions have increased our efficiency by 300%."
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "The team's technical expertise and commitment to excellence is unmatched. They delivered beyond our expectations."
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Global Solutions",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote: "Our digital presence has grown exponentially since partnering with zanvionics. They're truly leaders in their field."
  }
];

const TestimonialCard = ({ testimonial }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}