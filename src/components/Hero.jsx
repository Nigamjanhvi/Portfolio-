import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-10 animate-[float_8s_ease-in-out_infinite]"
                    style={{ background: 'radial-gradient(circle, #190d4dff 0%, transparent 70%)' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-8 animate-[float_10s_ease-in-out_infinite_reverse]"
                    style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-5 animate-[float_12s_ease-in-out_infinite]"
                    style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                <motion.div
                    className="flex flex-col space-y-6 order-2 lg:order-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-3">
                        <motion.h2
                            className="text-lg md:text-xl font-semibold tracking-widest uppercase"
                            style={{ color: 'var(--accent)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Hello, I'm
                        </motion.h2>
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold leading-tight gradient-text"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Janhvi Nigam
                        </motion.h1>
                        <motion.h3
                            className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <span className="gradient-text">Aspiring Cloud Engineer</span>
                        </motion.h3>
                    </div>

                    <motion.p
                        className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Welcome to my Digital Portfolio! I'm passionate about building intelligent, scalable applications that bridge the gap between innovative ideas and real-world impact.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="glow-button px-7 py-3.5 rounded-xl cursor-pointer text-white font-semibold"
                        >
                            View Projects
                        </Link>

                        <a
                            href="/Janhvi-pes-cv.pdf"
                            download="Janhvi-pes-cv.pdf"
                            className="glow-button px-7 py-3.5 rounded-xl flex items-center gap-2 text-white font-semibold"
                        >
                            <FiDownload /> Download Resume
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="glow-button px-7 py-3.5 rounded-xl cursor-pointer text-white font-semibold"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="flex items-center space-x-4 justify-center lg:justify-start pt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        {[
                            { href: "https://github.com/Nigamjanhvi", icon: <FiGithub size={24} />, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/janhvi-nigam15", icon: <FiLinkedin size={24} />, label: "LinkedIn" },
                            { href: "mailto:janhvinigam15@gmail.com", icon: <FiMail size={24} />, label: "Email" }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label !== "Email" ? "_blank" : undefined}
                                rel="noreferrer"
                                className="p-3 rounded-xl text-[var(--text-secondary)] hover:text-white transition-all hover:shadow-lg"
                                style={{ transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '';
                                }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="order-1 lg:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(6, 182, 212, 0.12))' }}
                        ></div>
                        <div className="absolute inset-4 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                            style={{
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid var(--glass-border)'
                            }}>
                            {!imageError ? (
                                <img
                                    src="/forml.jpeg"
                                    alt="Janhvi Nigam"
                                    className="w-full h-full object-cover"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex flex-col items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))' }}
                                >
                                    <span className="text-6xl font-extrabold gradient-text mt-4" style={{ fontFamily: "'Outfit', sans-serif" }}>JN</span>
                                    <span className="text-sm mt-2 font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">Portfolio</span>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
