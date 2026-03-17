import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const buildMailtoLink = ({ name = '', email = '', message = '' } = {}) => {
        const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Visitor'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
        );

        return `mailto:janhvinigam15@gmail.com?subject=${subject}&body=${body}`;
    };

    const buildGmailComposeLink = ({ name = '', email = '', message = '' } = {}) => {
        const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Visitor'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
        );

        return `https://mail.google.com/mail/?view=cm&fs=1&to=janhvinigam15@gmail.com&su=${subject}&body=${body}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(buildGmailComposeLink(formData), '_blank', 'noopener,noreferrer');
    };

    const contactLinks = [
        {
            icon: <FiMail size={24} />,
            label: 'Email',
            value: 'janhvinigam15@gmail.com',
            href: buildGmailComposeLink(),
            external: true
        },
        {
            icon: <FiPhone size={24} />,
            label: 'Phone',
            value: '+91-7587568710',
            href: 'tel:+917587568710'
        },
        {
            icon: <FiLinkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/janhvi-nigam15',
            href: 'https://www.linkedin.com/in/janhvi-nigam15',
            external: true
        },
        {
            icon: <FiGithub size={24} />,
            label: 'GitHub',
            value: 'github.com/Nigamjanhvi',
            href: 'https://github.com/Nigamjanhvi',
            external: true
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold inline-block mb-4 gradient-text" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Get in Touch
                        </h2>
                        <div className="gradient-divider mx-auto"></div>
                        <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className="glass-card p-8 rounded-2xl overflow-hidden relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Gradient top accent */}
                        <div className="absolute top-0 left-0 right-0 h-1"
                            style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' }}></div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="glass-input w-full px-4 py-3.5 rounded-xl text-[var(--text-primary)]"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="glass-input w-full px-4 py-3.5 rounded-xl text-[var(--text-primary)]"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="glass-input w-full px-4 py-3.5 rounded-xl text-[var(--text-primary)] resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="glow-button w-full py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-bold"
                            >
                                Send Message <FiSend />
                            </button>

                            <p className="text-sm text-[var(--text-secondary)] text-center">
                                This opens Gmail in the browser with your address and the message ready to send.
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        className="flex flex-col justify-center space-y-8 lg:pl-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Contact Information</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Feel free to reach out to me directly through email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="glass-card flex items-center gap-4 p-4 rounded-2xl group cursor-pointer"
                                >
                                    <div className="gradient-icon-box w-14 h-14 flex-shrink-0">
                                        {link.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--text-secondary)] font-medium mb-0.5">{link.label}</p>
                                        <p className="text-[var(--text-primary)] font-semibold">{link.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
