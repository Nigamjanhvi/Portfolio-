import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCloud } from 'react-icons/fi';
import {
    SiC,
    SiCplusplus,
    SiCss,
    SiDocker,
    SiExpress,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillItems = [
    { name: 'C', category: 'Programming Languages', level: 70, icon: <SiC size={26} />, accent: '#3cb4e7' },
    { name: 'C++', category: 'Programming Languages', level: 75, icon: <SiCplusplus size={26} />, accent: '#6ea8ff' },
    { name: 'Java', category: 'Programming Languages', level: 85, icon: <FaJava size={26} />, accent: '#f39c6b' },
    { name: 'Python', category: 'Programming Languages', level: 75, icon: <SiPython size={26} />, accent: '#ffd54a' },
    { name: 'React', category: 'Frontend', level: 90, icon: <SiReact size={26} />, accent: '#27d2f5' },
    { name: 'HTML', category: 'Frontend', level: 95, icon: <SiHtml5 size={26} />, accent: '#ff8652' },
    { name: 'CSS', category: 'Frontend', level: 85, icon: <SiCss size={26} />, accent: '#4fb2ff' },
    { name: 'JavaScript', category: 'Frontend', level: 90, icon: <SiJavascript size={26} />, accent: '#ffe14d' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 85, icon: <SiTailwindcss size={26} />, accent: '#5ee8ff' },
    { name: 'Node.js', category: 'Backend', level: 85, icon: <SiNodedotjs size={26} />, accent: '#9fe870' },
    { name: 'Express.js', category: 'Backend', level: 80, icon: <SiExpress size={26} />, accent: '#d4d8e8' },
    { name: 'MongoDB', category: 'Databases', level: 82, icon: <SiMongodb size={26} />, accent: '#5bd878' },
    { name: 'AWS', category: 'Cloud', level: 78, icon: <FiCloud size={26} />, accent: '#ffb84d' },
    { name: 'Docker', category: 'Tools', level: 80, icon: <SiDocker size={26} />, accent: '#47b3ff' },
    { name: 'Kubernetes', category: 'Tools', level: 74, icon: <SiKubernetes size={26} />, accent: '#6c8dff' },
    { name: 'Git', category: 'Tools', level: 82, icon: <SiGit size={26} />, accent: '#ff8b66' }
];

const filters = ['All Skills', 'Programming Languages', 'Frontend', 'Backend', 'Databases', 'Cloud', 'Tools'];

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('All Skills');

    const filteredSkills = useMemo(() => {
        if (activeFilter === 'All Skills') {
            return skillItems;
        }

        return skillItems.filter((skill) => skill.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-[32px] px-5 py-10 md:px-8 lg:px-10 relative overflow-hidden"
                    style={{ background: 'rgba(15, 23, 42, 0.82)', borderColor: 'rgba(99, 102, 241, 0.18)' }}
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-12 left-1/4 w-56 h-56 rounded-full opacity-20 blur-3xl"
                            style={{ background: 'linear-gradient(135deg, #6366f1, transparent)' }}></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-15 blur-3xl"
                            style={{ background: 'linear-gradient(135deg, #06b6d4, transparent)' }}></div>
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <h2
                                className="text-4xl md:text-5xl font-extrabold gradient-text inline-block"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                Technical Arsenal
                            </h2>
                            <div className="gradient-divider mx-auto mt-4"></div>
                            <p className="mt-6 text-[#aeb7d4] max-w-2xl mx-auto text-base md:text-lg">
                                A showcase of technologies I&apos;ve mastered on my journey as a developer.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {filters.map((filter) => {
                                const isActive = activeFilter === filter;

                                return (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                                        style={isActive ? {
                                            background: 'linear-gradient(135deg, #5b5cf0, #8b5cf6)',
                                            color: '#ffffff',
                                            boxShadow: '0 10px 24px rgba(99, 102, 241, 0.25)'
                                        } : {
                                            background: 'rgba(40, 51, 78, 0.82)',
                                            color: '#cbd5e1',
                                            border: '1px solid rgba(120, 137, 173, 0.16)'
                                        }}
                                    >
                                        {filter}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="rounded-[22px] border overflow-hidden p-4 md:p-5"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    transition={{ duration: 0.35, delay: index * 0.03 }}
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(25, 35, 58, 0.96), rgba(21, 29, 47, 0.98))',
                                        borderColor: 'rgba(110, 130, 170, 0.16)',
                                        boxShadow: '0 16px 36px rgba(5, 10, 24, 0.2)'
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                                            style={{
                                                background: 'linear-gradient(180deg, rgba(77, 92, 125, 0.92), rgba(54, 66, 92, 0.9))',
                                                color: skill.accent
                                            }}
                                        >
                                            {skill.icon}
                                        </div>

                                        <div className="flex-grow min-w-0">
                                            <div className="flex items-center justify-between gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-white truncate" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                                    {skill.name}
                                                </h3>
                                                <span className="text-sm font-semibold" style={{ color: '#7c8cff' }}>
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            <div className="h-2 rounded-full overflow-hidden mb-3" style={{ background: 'rgba(91, 105, 138, 0.35)' }}>
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        background: 'linear-gradient(90deg, #5865f2, #8b5cf6)'
                                                    }}
                                                ></div>
                                            </div>

                                            <p className="text-right text-xs font-medium tracking-wide" style={{ color: '#7f8ba9' }}>
                                                {skill.category}
                                            </p>
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

export default Skills;
