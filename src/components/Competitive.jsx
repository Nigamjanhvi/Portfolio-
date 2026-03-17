import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const cpPlatforms = [
    {
        name: "LeetCode",
        icon: <SiLeetcode size={32} />,
        color: "text-yellow-500",
        link: "#",
        stats: "300+ Problems Solved",
        rating: "Top 15%"
    },
    {
        name: "GeeksforGeeks",
        icon: <SiGeeksforgeeks size={32} />,
        color: "text-green-500",
        link: "#",
        stats: "150+ Problems Solved",
        rating: "Institute Rank: 50"
    },
    {
        name: "HackerRank",
        icon: <SiHackerrank size={32} />,
        color: "text-green-600",
        link: "#",
        stats: "4 Star Rating",
        rating: "Problem Solving"
    },
    {
        name: "NeetCode",
        icon: <div className="font-bold text-2xl h-8 w-8 flex items-center justify-center bg-indigo-500 text-white rounded-md">N</div>,
        color: "text-indigo-500",
        link: "#",
        stats: "Core Patterns Completed",
        rating: "DSA Mastery"
    }
];

const Competitive = () => {
    return (
        <section id="competitive" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] border-b border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <div className="max-w-5xl mx-auto w-full">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] inline-block mb-4">
                            Competitive Programming
                        </h2>
                        <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
                        <p className="mt-6 text-[var(--text-secondary)]">
                            Consistent problem solver across multiple competitive programming platforms.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cpPlatforms.map((platform, index) => (
                        <motion.a
                            href={platform.link}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            className="bg-[var(--bg-primary)] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center gap-4 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={`p-4 bg-[var(--bg-secondary)] rounded-full shadow-sm ${platform.color}`}>
                                {platform.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">{platform.name}</h3>

                            <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-2"></div>

                            <div className="w-full">
                                <p className="text-[var(--text-secondary)] font-medium mb-1">{platform.stats}</p>
                                <p className="text-[var(--accent)] text-sm font-bold">{platform.rating}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competitive;
