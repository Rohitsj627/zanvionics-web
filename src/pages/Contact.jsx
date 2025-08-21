import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hook/useInView';

const ContactHero = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-black to-blue-900/10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Get in Touch</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Let's Build Something 
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed mb-12">
                        Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-300">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
    // <section className="min-h-[80vh] bg-black relative flex items-center">
    //   <div className="max-w-7xl mx-auto px-6 py-20">
    //     <motion.div
    //       ref={ref}
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //       transition={{ duration: 0.5 }}
    //       className="text-center"
    //     >
    //       <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
    //         <span className="text-purple-300 text-sm font-medium">Get in Touch</span>
    //       </div>
    //       <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
    //         Let's Build Something Amazing Together
    //       </h1>
    //       <p className="text-gray-300 text-lg max-w-3xl mx-auto">
    //         Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
    //       </p>
    //     </motion.div>
    //   </div>
    // </section>
  );
};

const ContactForm = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300">
                Fill out the form and we'll get back to you shortly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📍</span>
                <span>85 Great Portland Street, First Floor, London, United Kingdom, W1W 7LT</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📧</span>
                <span>info@zanvionics.com</span>
              </div>
              {/* <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">📞</span>
                <span>+1 (555) 123-4567</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00B4A8] hover:bg-[#007399] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including web development, mobile app development, AI solutions, cloud services, and digital marketing."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements based on your needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-teal-300 text-sm font-medium">FAQ</span>
            </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Contact() {
  return (
    <div className="bg-black">
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  );
}