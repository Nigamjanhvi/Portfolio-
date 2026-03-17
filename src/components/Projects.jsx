import React from 'react';
import { motion } from 'framer-motion';
import {
    FiExternalLink,
    FiGithub,
    FiLayers,
    FiTarget,
    FiTrendingUp
} from 'react-icons/fi';

const projectsData = [
    {
        title: 'Campus Resource Exchange Platform',
        period: "Mar '26",
        description: 'A MERN-based student marketplace for buying, selling, renting, and exchanging academic essentials inside a campus-focused community.',
        objective: 'Make study resources more affordable and easier to access.',
        implementation: 'Secure MERN platform with JWT auth, listing workflows, and Socket.IO chat.',
        impact: 'Helps students reduce resource costs by around 30% while encouraging reuse.',
        techStack: ['React', 'Express', 'MongoDB', 'Node.js', 'Socket.IO', 'JWT'],
        github: 'https://github.com/Nigamjanhvi/resourcesharing',
        live: 'https://resourcesharing-five.vercel.app/',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Students collaborating with books and laptops around a table.'
    },
    {
        title: 'Video Converter Platform',
        period: "Jan '26",
        description: 'A distributed media processing system built on AWS EKS for reliable asynchronous video conversion at scale.',
        objective: 'Handle heavy media conversion jobs with resilience and scalability.',
        implementation: 'Microservices on Kubernetes with RabbitMQ queues, retries, and persistent storage.',
        impact: 'Improves reliability and user experience by keeping conversion processing non-blocking.',
        techStack: ['AWS EKS', 'Kubernetes', 'Docker', 'RabbitMQ', 'Python', 'PostgreSQL'],
        github: '#',
        live: '#',
        image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Video editing timeline shown on a monitor.'
    },
    {
        title: 'Server Performance Monitoring Tool',
        period: "Dec '25 - Jan '26",
        description: 'A cross-platform monitoring utility that tracks real-time CPU, memory, disk, and process metrics with readable reports.',
        objective: 'Give users a lightweight way to inspect system health across platforms.',
        implementation: 'Used native Bash and PowerShell scripts with Python-based reporting.',
        impact: 'Helps developers and admins detect bottlenecks quickly without heavy dependencies.',
        techStack: ['Bash', 'PowerShell', 'Python', 'System Monitoring'],
        github: 'https://github.com/Nigamjanhvi/ServerPerformanceStats',
        live: null,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'System analytics dashboard with charts and metrics.'
    }
];

const summaryItems = [
    { key: 'objective', label: 'Objective', icon: <FiTarget size={16} /> },
    { key: 'implementation', label: 'Use', icon: <FiLayers size={16} /> },
    { key: 'impact', label: 'Outcome', icon: <FiTrendingUp size={16} /> }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold inline-block mb-4 gradient-text"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            Project Showcase
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                        <p className="mt-5 text-[var(--text-secondary)] max-w-3xl mx-auto leading-7">
                            A simpler, cleaner look at the problem each project solves, the stack behind it, and the result it delivers.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className="glass-card rounded-[24px] overflow-hidden flex flex-col h-full"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <div className="relative">
                                <div className="aspect-[16/8.5] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(180deg, rgba(10,10,26,0.05), rgba(10,10,26,0.28))' }}
                                ></div>
                                <div className="absolute top-4 right-4">
                                    <span
                                        className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                                        style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
                                    >
                                        {project.period}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col h-full">
                                <h3
                                    className="text-2xl font-bold text-[var(--text-primary)] mb-2"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-7 mb-4">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-1 gap-3 mb-4">
                                    {summaryItems.map((item) => (
                                        <div
                                            key={item.key}
                                            className="rounded-2xl border px-4 py-3"
                                            style={{ borderColor: 'var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}
                                        >
                                            <div className="flex items-center gap-2 mb-1.5 text-[var(--accent)]">
                                                {item.icon}
                                                <span className="text-xs font-semibold uppercase tracking-[0.2em]">{item.label}</span>
                                            </div>
                                            <p className="text-sm leading-6 text-[var(--text-secondary)]">{project[item.key]}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="gradient-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto grid grid-cols-2 gap-3">
                                    <a
                                        href={project.live || '#'}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="glow-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a
                                        href={project.github || '#'}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                                        style={{ borderColor: 'var(--glass-border)' }}
                                    >
                                        <FiGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
