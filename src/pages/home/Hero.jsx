import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated particles/dots */}
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    }}
                />
            ))}

            {/* Connecting lines */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={`line-${i}`}
                    className="absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${50 + Math.random() * 100}px`,
                        height: '1px',
                        transform: `rotate(${Math.random() * 180}deg)`,
                        animation: `pulse ${3 + Math.random() * 2}s infinite`
                    }}
                />
            ))}

            {/* Glowing orbs */}
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute top-40 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-15 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-pink-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
};

export default function AIAutomationLanding() {
    return (
        <div className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
            <AnimatedBackground />

            {/* Main content */}
            <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
                {/* New badge */}
                <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8">
                    <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        New
                    </span>
                    <span className="text-white text-sm">Automated Lead Generation</span>
                </div>

                {/* Main heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Intelligent Automation for{' '}
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Modern Businesses.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    Xtract brings AI automation to your fingertips & streamline tasks.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                        Get in touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    <button className="text-white hover:text-purple-300 font-semibold px-8 py-3 rounded-lg transition-all duration-300 border border-gray-600 hover:border-purple-500 backdrop-blur-sm">
                        View services
                    </button>
                </div>
            </div>

            {/* Floating elements for extra visual interest */}
            <div className="absolute top-1/4 left-12 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/3 right-16 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2.5s' }} />

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
        </div>
    );
}
