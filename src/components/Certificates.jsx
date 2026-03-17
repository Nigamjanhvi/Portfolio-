import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    FiAward,
    FiBookOpen,
    FiCheckCircle,
    FiCode,
    FiEye,
    FiLayers,
    FiTrendingUp,
    FiX
} from 'react-icons/fi';

const certificatesData = [
    {
        title: 'Cloud Foundation Associate',
        organization: 'Oracle',
        image: '/oracle.png',
        icon: <FiLayers size={20} />,
        learning: 'Built stronger cloud fundamentals around infrastructure concepts, cloud services, deployment thinking, and how scalable systems are structured.',
        outcome: 'Improved my confidence in speaking about cloud architecture and gave me a stronger base for AWS, container, and DevOps learning paths.'
    },
    {
        title: 'Internet of Things',
        organization: 'NPTEL',
        image: '/IOT.png',
        icon: <FiBookOpen size={20} />,
        learning: 'Learned how connected devices, sensors, communication protocols, and data flow come together in practical IoT systems.',
        outcome: 'Expanded my system-level thinking and helped me understand how software interacts with hardware-driven ecosystems.'
    },
    {
        title: 'DSA Training',
        organization: 'Infosys',
        image: '/Training.png',
        icon: <FiCode size={20} />,
        learning: 'Strengthened problem-solving with data structures, algorithms, logic building, and more disciplined coding patterns.',
        outcome: 'Directly supported my 500+ problem-solving journey and improved the way I approach technical interviews and implementation work.'
    }
];

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
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
                            Certifications
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                        <p className="mt-6 text-[var(--text-secondary)] max-w-3xl mx-auto leading-7">
                            These certifications reflect the areas I have studied deeply, the practical skills I picked up, and how each learning milestone strengthens my engineering foundation.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-8">
                    {certificatesData.map((cert, index) => (
                        <motion.article
                            key={cert.title}
                            className="glass-card rounded-[28px] overflow-hidden"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
                                <div className="p-5 md:p-6">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCertificate(cert)}
                                        className="group relative w-full overflow-hidden rounded-[24px] border text-left transition-all duration-300 hover:-translate-y-1"
                                        style={{ borderColor: 'var(--glass-border)' }}
                                    >
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(10,10,26,0.72)] via-transparent to-transparent"></div>
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div
                                            className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white"
                                            style={{ background: 'rgba(17,17,40,0.7)', backdropFilter: 'blur(10px)' }}
                                        >
                                            {cert.icon}
                                            {cert.organization}
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white">
                                            <span className="font-semibold">Full Image Preview</span>
                                            <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm">
                                                <FiEye size={16} /> Open
                                            </span>
                                        </div>
                                    </button>
                                </div>

                                <div className="p-6 md:p-8 lg:p-10">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                        <div className="max-w-3xl">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="gradient-icon-box w-12 h-12">
                                                    {cert.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)] font-semibold">{cert.organization}</p>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                                        {cert.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedCertificate(cert)}
                                            className="glow-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
                                        >
                                            <FiEye /> Preview Certificate
                                        </button>
                                    </div>

                                    <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-5">
                                        <div
                                            className="rounded-2xl border p-5"
                                            style={{ borderColor: 'var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="gradient-icon-box w-10 h-10">
                                                    <FiTrendingUp size={18} />
                                                </div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">My Learning</p>
                                            </div>
                                            <p className="text-[var(--text-secondary)] leading-7">{cert.learning}</p>
                                        </div>

                                        <div
                                            className="rounded-2xl border p-5"
                                            style={{ borderColor: 'var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="gradient-icon-box w-10 h-10">
                                                    <FiCheckCircle size={18} />
                                                </div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Outcome</p>
                                            </div>
                                            <p className="text-[var(--text-secondary)] leading-7">{cert.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                            onClick={() => setSelectedCertificate(null)}
                            aria-label="Close certificate preview"
                        ></button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 18 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 14 }}
                            transition={{ duration: 0.25 }}
                            className="relative z-10 w-full max-w-5xl rounded-[28px] border p-4 md:p-6"
                            style={{
                                background: 'var(--glass-bg)',
                                borderColor: 'var(--glass-border)',
                                backdropFilter: 'blur(18px)',
                                WebkitBackdropFilter: 'blur(18px)'
                            }}
                        >
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-2">
                                        {selectedCertificate.organization}
                                    </p>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                        {selectedCertificate.title}
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedCertificate(null)}
                                    className="rounded-xl border p-3 text-[var(--text-primary)] transition-all hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                                    style={{ borderColor: 'var(--glass-border)' }}
                                    aria-label="Close preview"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            <div className="overflow-hidden rounded-[22px] border" style={{ borderColor: 'var(--glass-border)' }}>
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    className="max-h-[80vh] w-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
