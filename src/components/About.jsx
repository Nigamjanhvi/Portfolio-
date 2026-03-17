import React from 'react';
import { motion } from 'framer-motion';
import {
    FiActivity,
    FiCloud,
    FiCode,
    FiCompass,
    FiCpu,
    FiHeadphones,
    FiLayers,
    FiTrendingUp,
    FiWifi
} from 'react-icons/fi';

const About = () => {
    const highlights = [
        {
            icon: <FiCloud size={22} />,
            title: 'Cloud & DevOps',
            text: 'AWS, cloud workflows, and deployment fundamentals.',
            color: 'from-cyan-500 via-sky-500 to-blue-600'
        },
        {
            icon: <FiCpu size={22} />,
            title: 'Docker & Kubernetes',
            text: 'Containerization and orchestration for scalable apps.',
            color: 'from-fuchsia-500 via-violet-500 to-indigo-600'
        },
        {
            icon: <FiLayers size={22} />,
            title: 'MERN Stack Development',
            text: 'React, Node.js, Express.js, and MongoDB projects.',
            color: 'from-emerald-500 via-teal-500 to-cyan-500'
        },
        {
            icon: <FiActivity size={22} />,
            title: 'DSA & System Design',
            text: '250+ DSA problems and growing system design basics.',
            color: 'from-amber-500 via-orange-500 to-rose-500'
        }
    ];

    const learningItems = [
        'Advanced DevOps practices',
        'Kubernetes and cloud architecture',
        'System design fundamentals',
        'Scalable full-stack applications'
    ];

    const hobbies = [
        {
            icon: <FiWifi size={18} />,
            text: 'Exploring new technologies and tech trends'
        },
        {
            icon: <FiHeadphones size={18} />,
            text: 'Listening to music'
        }
    ];

    const keywordClass = 'font-semibold text-[var(--text-primary)]';

    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold inline-block mb-4 gradient-text" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        About Me
                    </h2>
                    <div className="gradient-divider mx-auto"></div>
                        
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-stretch">
                    <motion.div
                        className="glass-card rounded-[28px] p-6 md:p-8 lg:p-10 relative overflow-hidden h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="absolute inset-x-0 top-0 h-1"
                            style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' }}
                        ></div>
                        <div
                            className="absolute -top-20 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl"
                            style={{ background: 'linear-gradient(135deg, var(--gradient-mid), transparent)' }}
                        ></div>

                        <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                            {['AWS', 'Docker', 'Kubernetes', 'MERN', 'DSA'].map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 rounded-full text-sm font-semibold border"
                                    style={{
                                        color: 'var(--text-primary)',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderColor: 'var(--glass-border)'
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="gradient-icon-box w-12 h-12 flex-shrink-0">
                                        <FiTrendingUp size={20} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                        My Journey
                                    </h3>
                                </div>
                                <div className="space-y-4 text-[var(--text-secondary)] text-base md:text-lg leading-8">
                                    <p>
                                        I&apos;m <span className={keywordClass}>Janhvi Nigam</span>, a Computer Science Engineering student at Lovely Professional University with a strong focus on <span className={keywordClass}>Cloud Computing</span> and <span className={keywordClass}>DevOps</span>. I have been building hands-on knowledge in <span className={keywordClass}>AWS</span>, <span className={keywordClass}>Docker</span>, and <span className={keywordClass}>Kubernetes</span> while learning how scalable and containerized applications are built.
                                    </p>
                                    <p>
                                        Alongside cloud and DevOps, I build full-stack projects using the <span className={keywordClass}>MERN</span> stack and strengthen my fundamentals through <span className={keywordClass}>250+ DSA problems</span>. As <span className={keywordClass}>President of Changemakers of Amazon Club</span>, I continue to grow through leadership, collaboration, and continuous learning.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <motion.div
                                    className="rounded-2xl p-6 border"
                                    whileHover={{ y: -6, boxShadow: '0 20px 45px rgba(99, 102, 241, 0.12)' }}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        borderColor: 'var(--glass-border)'
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="gradient-icon-box w-11 h-11 flex-shrink-0">
                                            <FiCompass size={18} />
                                        </div>
                                        <h4 className="text-xl font-bold text-[var(--text-primary)]">My Approach</h4>
                                    </div>
                                    <p className="text-[var(--text-secondary)] leading-7">
                                        I focus on building <span className={keywordClass}>scalable systems</span> with clean, maintainable code while deepening my interest in <span className={keywordClass}>DevOps</span> workflows and cloud architecture. I treat every project as an opportunity to learn, refine, and build better.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="rounded-2xl p-6 border"
                                    whileHover={{ y: -6, boxShadow: '0 20px 45px rgba(6, 182, 212, 0.12)' }}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        borderColor: 'var(--glass-border)'
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="gradient-icon-box w-11 h-11 flex-shrink-0">
                                            <FiCode size={18} />
                                        </div>
                                        <h4 className="text-xl font-bold text-[var(--text-primary)]">Currently Learning</h4>
                                    </div>
                                    <ul className="space-y-3 text-[var(--text-secondary)]">
                                        {learningItems.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span
                                                    className="mt-2 w-2 h-2 rounded-full"
                                                    style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
                                                ></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-5 h-full flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {highlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    className="glass-card rounded-[24px] p-6 flex flex-col h-full relative overflow-hidden group"
                                    whileHover={{ y: -10, scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                >
                                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}></div>
                                    <div className={`absolute -right-10 -top-8 w-28 h-28 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-30`}></div>

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg flex items-center justify-center mb-5`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-7 flex-grow">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="glass-card rounded-[24px] p-6 relative overflow-hidden flex-1"
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                        >
                            <div className="absolute inset-x-0 top-0 h-1"
                                style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))' }}></div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="gradient-icon-box w-11 h-11 flex-shrink-0">
                                    <FiHeadphones size={18} />
                                </div>
                                <h4 className="text-xl font-bold text-[var(--text-primary)]">Hobbies</h4>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {hobbies.map((item) => (
                                    <div
                                        key={item.text}
                                        className="rounded-2xl p-4 border flex items-start gap-3 transition-all duration-300 hover:-translate-y-1"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            borderColor: 'var(--glass-border)'
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                            style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
                                            {item.icon}
                                        </div>
                                        <p className="text-[var(--text-secondary)] leading-7">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
