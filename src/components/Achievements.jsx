import React from 'react';
import { motion } from 'framer-motion';
import {
    FiAward,
    FiCode,
    FiFlag,
    FiShield,
    FiStar,
    FiUsers
} from 'react-icons/fi';

const achievements = [
    {
        title: '250+ Problems Solved',
        description: 'Solved 250+ algorithm and data structure problems across major coding platforms, strengthening problem-solving, consistency, and implementation speed.',
        icon: <FiCode size={24} />,
        accent: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))'
    },
    {
        title: '4 Star Problem Solving Rating',
        description: 'Earned a 4-star HackerRank rating in Problem Solving, reflecting solid analytical thinking and dependable coding fundamentals.',
        icon: <FiStar size={24} />,
        accent: 'linear-gradient(135deg, #f59e0b, #ef4444)'
    }
];

const badges = [
    {
        title: 'AWS GEN AI Trained',
        subtitle: 'Generative AI Fundamentals by Amazon Web Services',
        description: 'Demonstrates foundational knowledge of generative AI concepts, applications, and AWS services.',
        icon: <FiShield size={18} />,
        image: '/aws.png'
    },
    {
        title: 'CodeChef',
        subtitle: 'DSA and Coding Practice',
        description: 'Highlights consistency in algorithmic practice, interview preparation, and technical growth through coding challenges.',
        icon: <FiAward size={18} />,
        image: '/cc.png'
    }
];

const extracurricularPoints = [
    'Organized technical events and club initiatives',
    'Led collaborative student engagement activities',
    'Supported peer learning and knowledge sharing',
    'Built leadership and execution confidence'
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold inline-block mb-4 gradient-text" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Achievements
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            className="glass-card p-7 rounded-[24px] flex items-start gap-4"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <div
                                className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-white shadow-lg"
                                style={{ background: achievement.accent }}
                            >
                                {achievement.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    {achievement.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-7">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="glass-card rounded-[24px] p-6 md:p-8 relative overflow-hidden mb-6"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                >
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="gradient-icon-box w-12 h-12">
                                <FiUsers size={22} />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)] font-semibold">Extracurricular</p>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    President, Changemakers of Amazon Club
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 items-center">
                            <div
                                className="overflow-hidden rounded-[20px] border"
                                style={{ borderColor: 'var(--glass-border)' }}
                            >
                                <div className="aspect-[4/4.3] overflow-hidden">
                                    <img
                                        src="/janhvi.png"
                                        alt="Janhvi Nigam"
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            <div>
                                <p className="text-[var(--text-secondary)] leading-7 mb-4">
                                    I lead student-focused initiatives that encourage active learning, collaboration, and innovation across campus.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {extracurricularPoints.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border p-3.5 flex items-start gap-3"
                                            style={{ borderColor: 'var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}
                                        >
                                            <div className="mt-1 text-[var(--accent)]">
                                                <FiFlag size={16} />
                                            </div>
                                            <p className="text-sm text-[var(--text-secondary)] leading-6">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-[24px] p-6 md:p-8"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="gradient-icon-box w-12 h-12">
                            <FiAward size={22} />
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)] font-semibold">Badges</p>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                Badge Highlights
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={badge.title}
                                className="rounded-[20px] border p-4"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                style={{ borderColor: 'var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}
                            >
                                <div className="grid grid-cols-[96px_1fr] gap-4 items-center">
                                    <div className="overflow-hidden rounded-[18px] border" style={{ borderColor: 'var(--glass-border)' }}>
                                        <img src={badge.image} alt={badge.title} className="aspect-square w-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-semibold mb-1">{badge.subtitle}</p>
                                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                            {badge.title}
                                        </h4>
                                        <p className="text-sm text-[var(--text-secondary)] leading-6">
                                            {badge.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
