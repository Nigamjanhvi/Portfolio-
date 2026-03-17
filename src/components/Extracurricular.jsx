import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const Extracurricular = () => {
    return (
        <section id="extracurricular" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] inline-block mb-4">
                            Extracurricular Activities
                        </h2>
                        <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-[var(--bg-secondary)] p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <FiUsers size={160} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="bg-[var(--accent)]/10 text-[var(--accent)] p-6 rounded-2xl">
                            <FiUsers size={48} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">President</h3>
                            <p className="text-[var(--accent)] font-medium text-lg mb-4">
                                Changemakers of Amazon Club, LPU
                            </p>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl">
                                Organizing technical events, hackathons, podcasts, and student initiatives to promote active learning and cross-collaboration in technology and innovation within the university community.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Extracurricular;
