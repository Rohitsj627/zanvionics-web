import React, { useState, useEffect } from 'react';
import WhyChooseUs from '../components/ui/WhyChooseUs';

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

// Hero Section
const HeroSection = () => {
  const [ref, isInView] = useInView(0.3);

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
            <span className="text-teal-300 text-sm font-medium">About Our Company</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              We Build Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed mb-12">
            We're a team of passionate creators, developers, and strategists dedicated to transforming 
            ideas into powerful digital solutions that drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Our Story
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-300">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const [ref, isInView] = useInView(0.5);
  
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "30+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" }
  ];

  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
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

// Story Section
const StorySection = () => {
  const [ref, isInView] = useInView(0.3);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-block bg-teal-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-teal-300 text-sm font-medium">Our Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Vision to <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Reality</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2019, we started as a small team of passionate developers and designers 
              who believed technology could solve complex business challenges. What began as a 
              vision has grown into a trusted partner for businesses worldwide.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Today, we combine cutting-edge technology with creative thinking to deliver 
              solutions that not only meet requirements but exceed expectations. Our journey 
              is driven by one simple belief: great digital experiences create lasting impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Innovation-first approach to every project</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Client success is our primary measure of success</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Continuous learning and adaptation</span>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-2">2019</div>
                    <div className="text-gray-400 text-sm">Company Founded</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2021</div>
                    <div className="text-gray-400 text-sm">Team Expansion</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-2">2023</div>
                    <div className="text-gray-400 text-sm">AI Integration</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2025</div>
                    <div className="text-gray-400 text-sm">Global Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients as true partners."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We're committed to delivering the highest quality in everything we create and every service we provide."
    },
    {
      icon: "🔒",
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices are the foundation of all our relationships."
    }
  ];

  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            These principles guide every decision we make and every solution we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-6 text-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const [ref, isInView] = useInView(0.3);
  
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech innovation",
      bio: "Alex founded Zanvionics with a mission to democratize cutting-edge technology for businesses of all sizes. With a background in computer science from MIT and previous experience at Google and Microsoft, Alex brings deep technical expertise and strategic vision to every project.",
      expertise: ["Strategic Planning", "Technology Leadership", "Business Development"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Tech expert specializing in scalable architectures",
      bio: "Sarah leads our technical team with over 8 years of experience in building scalable systems. She holds a PhD in Computer Science from Stanford and has architected solutions for companies ranging from startups to Fortune 500 enterprises.",
      expertise: ["System Architecture", "Cloud Computing", "DevOps"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Creative director with award-winning design portfolio",
      bio: "Marcus brings creativity and user-centered design thinking to every project. With a background in industrial design and 6 years in digital product design, he has won multiple design awards and has worked with brands like Apple and Nike.",
      expertise: ["UI/UX Design", "Design Systems", "User Research"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Operations expert ensuring seamless project delivery",
      bio: "Emily ensures every project is delivered on time and exceeds client expectations. With PMP certification and 7 years of experience in agile project management, she has successfully delivered over 100 projects across various industries.",
      expertise: ["Project Management", "Agile Methodologies", "Client Relations"],
      linkedin: "#",
      twitter: "#"
    }
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The talented individuals behind every successful project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => {
                setSelectedMember(member);
                setIsModalOpen(true);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.twitter} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-teal-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                
                {/* Expertise Tags */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-teal-600/20 text-teal-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                      +{member.expertise.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full animate-slide-up shadow-2xl">
              <div className="relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-200 text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white font-heading">{selectedMember.name}</h3>
                  <p className="text-teal-300 font-medium">{selectedMember.role}</p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={selectedMember.linkedin} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href={selectedMember.twitter} className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [ref, isInView] = useInView(0.5);

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900/20 via-black to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-blue-600/5" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Work Together?</span>
          </h2>
          
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Let's transform your ideas into powerful digital solutions that drive real results
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-10 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />

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
    </div>
  );
}