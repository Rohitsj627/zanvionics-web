import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">X</span>
                        </div>
                        <span className="text-xl font-bold transition-colors duration-300 text-white">
                            zanvionics
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="font-medium transition-colors duration-300 hover:text-purple-400 text-gray-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white md:hidden focus:outline-none text-2xl"
                        >
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/80 rounded-lg p-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full text-center"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
