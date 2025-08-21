import React from "react";
import { motion } from "framer-motion";
import { InfiniteScroll } from "./InfiniteScroll.jsx"; // Ensure this exists

const brands = [
    { id: "1", name: "TechCorp Solutions", icon: "🚀", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=100&h=60&fit=crop" },
    { id: "2", name: "InnovateLab", icon: "🧬", logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=100&h=60&fit=crop" },
    { id: "3", name: "Digital Dynamics", icon: "🎓", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?w=100&h=60&fit=crop" },
    { id: "4", name: "CloudFirst Systems", icon: "☁️", logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?w=100&h=60&fit=crop" },
    { id: "5", name: "AI Ventures", icon: "🤖", logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?w=100&h=60&fit=crop" },
    { id: "6", name: "StartupHub", icon: "🏢", logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?w=100&h=60&fit=crop" },
];

function BrandBadge({ brand }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="mr-6 flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 transition-all duration-300 hover:shadow-lg hover:bg-white/20 hover:border-white/30"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 overflow-hidden">
                <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">{brand.name}</span>
                <span className="text-xs text-gray-300">Trusted Partner</span>
            </div>
        </motion.div>
    );
}

export function Brands() {
    const renderScrollBlocks = (items, Component, duration, directions) =>
        directions.map((direction, i) => (
            <InfiniteScroll key={i} duration={duration} direction={direction}>
                {items.map((item) => (
                    <Component
                        key={item.id}
                        {...{ [Component === BrandBadge ? "brand" : "testimonial"]: item }}
                    />
                ))}
            </InfiniteScroll>
        ));

    return (
        <div className="z-30 w-full max-w-full flex flex-col items-center gap-12 bg-black py-8">
            <section className="px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Over 50+ Brands Trusts Us</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
                {renderScrollBlocks(brands, BrandBadge, 25000, ["normal"])}
            </section>
        </div>

    );
}
