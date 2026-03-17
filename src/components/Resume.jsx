import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const resumeHref = '/Janhvi-pes-cv.pdf';

const resumeSections = [
    {
        id: 'education',
        label: 'Education',
        title: 'B.Tech Computer Science and Engineering',
        subtitle: 'Lovely Professional University',
        date: 'Aug 2023 - Present',
        points: [
            'Focused on cloud computing, DevOps, and full-stack development fundamentals.',
            'Current CGPA: 7.7 with growing hands-on experience in scalable application development.',
            'Built project experience across MERN, Docker, Kubernetes, and AWS-oriented workflows.'
        ],
        tech: 'Phagwara, Punjab'
    },
    {
        id: 'skills',
        label: 'Skills',
        title: 'Full-Stack and Cloud Skill Set',
        subtitle: 'Core technologies from the portfolio',
        date: 'Ongoing',
        points: [
            'Frontend: React, HTML, CSS, JavaScript, Tailwind CSS.',
            'Backend and databases: Node.js, Express.js, MongoDB, Python, Java.',
            'Cloud and tools: AWS, Docker, Kubernetes, Git, system and DevOps workflows.'
        ],
        tech: 'MERN | AWS | Docker | Kubernetes'
    },
    {
        id: 'projects',
        label: 'Projects',
        title: 'Applied Engineering Projects',
        subtitle: 'Portfolio highlights',
        date: '2025 - 2026',
        points: [
            'Built a Campus Resource Exchange Platform to reduce academic costs and improve student accessibility.',
            'Designed a Video Converter Platform with distributed job processing and Kubernetes-based deployment.',
            'Developed a Server Performance Monitoring Tool for cross-platform system health tracking and reporting.'
        ],
        tech: 'React, Node.js, MongoDB, Python, RabbitMQ, AWS EKS'
    },
    {
        id: 'extracurricular',
        label: 'Extracurricular',
        title: 'President, Changemakers of Amazon Club',
        subtitle: 'Leadership and community impact',
        date: 'Current',
        points: [
            'Organized technical events, initiatives, and collaborative student activities.',
            'Strengthened leadership, communication, ownership, and team coordination skills.',
            'Supported peer learning and active participation in technology-focused campus culture.'
        ],
        tech: 'Leadership | Event Planning | Collaboration'
    },
    {
        id: 'certificates',
        label: 'Certificates',
        title: 'Learning and Certifications',
        subtitle: 'Oracle, NPTEL, Infosys',
        date: 'Recent',
        points: [
            'Oracle Cloud Foundation Associate strengthened cloud and infrastructure fundamentals.',
            'NPTEL Internet of Things improved system-level understanding of connected devices and data flow.',
            'Infosys DSA Training sharpened algorithmic thinking and interview-focused problem solving.'
        ],
        tech: 'Cloud | IoT | DSA'
    }
];

const contactItems = [
    {
        icon: <FiMail size={15} />,
        text: 'janhvinigam15@gmail.com',
        href: 'mailto:janhvinigam15@gmail.com'
    },
    {
        icon: <FiPhone size={15} />,
        text: '+91-7587568710',
        href: 'tel:+917587568710'
    },
    {
        icon: <FiLinkedin size={15} />,
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/janhvi-nigam15',
        external: true
    },
    {
        icon: <FiGithub size={15} />,
        text: 'GitHub',
        href: 'https://github.com/Nigamjanhvi',
        external: true
    }
];

const Resume = () => {
    const [activeTab, setActiveTab] = useState('extracurricular');

    const navPills = useMemo(
        () => resumeSections.map((section) => ({ id: section.id, label: section.label })),
        []
    );

    const handleSectionJump = (id) => {
        setActiveTab(id);
        const element = document.getElementById(`resume-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[28px] border px-5 py-8 md:px-8 md:py-10"
                    style={{
                        background: 'linear-gradient(180deg, rgba(13, 21, 43, 0.98), rgba(17, 26, 48, 0.98))',
                        borderColor: 'rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 22px 60px rgba(6, 10, 24, 0.25)'
                    }}
                >
                    <div className="text-center mb-8">
                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            My <span className="gradient-text">Resume</span>
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {contactItems.map((item) => (
                            <a
                                key={item.text}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noreferrer' : undefined}
                                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5"
                                style={{
                                    color: '#dbe4ff',
                                    background: 'rgba(86, 101, 170, 0.18)',
                                    border: '1px solid rgba(130, 150, 220, 0.16)'
                                }}
                            >
                                {item.icon}
                                {item.text}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {navPills.map((pill) => (
                            <button
                                key={pill.id}
                                type="button"
                                onClick={() => handleSectionJump(pill.id)}
                                className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
                                style={activeTab === pill.id ? {
                                    color: '#ffffff',
                                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))'
                                } : {
                                    color: '#b8c2e4',
                                    background: 'transparent'
                                }}
                            >
                                {pill.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {resumeSections.map((section, index) => (
                            <motion.article
                                key={section.id}
                                id={`resume-${section.id}`}
                                className="rounded-[18px] border p-5 md:p-6 scroll-mt-28"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onViewportEnter={() => setActiveTab(section.id)}
                                style={{
                                    background: 'rgba(24, 35, 63, 0.9)',
                                    borderColor: activeTab === section.id ? 'rgba(120, 144, 255, 0.38)' : 'rgba(108, 130, 204, 0.18)'
                                }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="max-w-3xl">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6fa3ff] mb-2">{section.label}</p>
                                        <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                            {section.title}
                                        </h3>
                                        <p className="text-[#c2cbed] font-medium mb-3">{section.subtitle}</p>
                                    </div>
                                    <div className="text-sm font-semibold text-[#8f9be0] whitespace-nowrap">
                                        {section.date}
                                    </div>
                                </div>

                                <div className="space-y-2.5 mb-4">
                                    {section.points.map((point) => (
                                        <div key={point} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#6c8dff]"></span>
                                            <p className="text-[#d6def8] leading-7">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm font-medium text-[#9eb0ea]">
                                    {section.tech}
                                </p>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <a
                            href={resumeHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold text-white transition-all hover:bg-white/6"
                            style={{ borderColor: 'rgba(130, 150, 220, 0.2)' }}
                        >
                            <FiEye /> Preview Resume
                        </a>
                        <a
                            href={resumeHref}
                            download="Janhvi-pes-cv.pdf"
                            className="glow-button inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                        >
                            <FiDownload /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
