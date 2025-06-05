import React from "react";
import { motion } from "framer-motion";
import { InfiniteScroll } from "./InfiniteScroll.jsx"; // Ensure this exists

const brands = [
    { id: "1", name: "Hypernex Technologies", icon: "🚀" },
    { id: "2", name: "Xyphramin Technologies", icon: "🧬" },
    { id: "3", name: "BMS Academy", icon: "🎓" },
    { id: "4", name: "LDPS", icon: "🏫" },
    { id: "5", name: "Poornima University", icon: "🏛️" },
];

function BrandBadge({ brand }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="mr-4 flex items-center gap-3 rounded-xl   px-5 py-3 backdrop-blur-sm transition-shadow hover:shadow-lg"
        >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-xl">
                {brand.icon}
            </span>
            <span className="text-sm font-semibold text-white">{brand.name}</span>
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
            <section className="px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto">
                <div className="mb-6">
                    <p className="text-sm text-white font-bold text-center mb-2">
                        Over 50+ brands trust us 
                    </p>
                </div>
                {renderScrollBlocks(brands, BrandBadge, 25000, ["normal"])}
            </section>
        </div>

    );
}
