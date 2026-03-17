import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology – Computer Science and Engineering",
        score: "CGPA: 7.7",
        date: "Aug 2023 – Present",
        location: "Phagwara, Punjab"
    },
    {
        institution: "St. Michael's Sr. Sec School",
        degree: "Intermediate",
        score: "Percentage: 81%",
        date: "Jun 2022 – Apr 2023",
        location: "Satna, Madhya Pradesh"
    },
    {
        institution: "St. Michael's Sr. Sec School",
        degree: "Matriculation",
        score: "Percentage: 91%",
        date: "Jun 2020 – Apr 2021",
        location: "Satna, Madhya Pradesh"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold inline-block mb-4 gradient-text" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Education
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Gradient timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
                            style={{ background: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' }}></div>

                        <div className="space-y-10 ml-6 md:ml-0">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative md:w-[calc(50%-24px)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[29px] md:left-auto top-6 w-3 h-3 rounded-full shadow-lg z-10"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))',
                                            boxShadow: '0 0 12px var(--glow-color)',
                                            ...(index % 2 === 0
                                                ? { right: '-30px', left: 'auto' }
                                                : { left: '-30px' })
                                        }}></div>

                                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                                        {/* Gradient top accent */}
                                        <div className="absolute top-0 left-0 right-0 h-1"
                                            style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' }}></div>

                                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 pb-4 border-b"
                                            style={{ borderColor: 'var(--glass-border)' }}>
                                            <div>
                                                <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.institution}</h3>
                                                <p className="font-medium text-lg gradient-text">{item.degree}</p>
                                            </div>
                                            <div className="text-left md:text-right mt-2 md:mt-0 text-[var(--text-secondary)] text-sm">
                                                <p className="font-semibold">{item.date}</p>
                                                <p>{item.location}</p>
                                            </div>
                                        </div>

                                        <div className="text-[var(--text-primary)] font-semibold flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}></span>
                                            {item.score}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
