import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Resume', to: 'resume' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'py-3'
                : 'bg-transparent py-6'
                }`}
            style={scrolled ? {
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--glass-border)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
            } : {}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-2xl font-bold cursor-pointer transition-colors"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            <span className="gradient-text">JN</span><span className="text-[var(--accent)]">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="!text-[var(--accent)] font-semibold"
                                className="cursor-pointer text-sm font-medium hover:text-[var(--accent)] transition-all px-4 py-2 rounded-lg hover:bg-[var(--accent)]/10 whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl hover:bg-[var(--accent)]/10 transition-all ml-2 hover:shadow-[0_0_20px_var(--glow-color)]"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-indigo-500" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl hover:bg-[var(--accent)]/10 transition-all"
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-indigo-500" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 focus:outline-none"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div
                    className="lg:hidden absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-1 max-h-[80vh] overflow-y-auto"
                    style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderBottom: '1px solid var(--glass-border)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer text-base font-medium py-3 px-4 rounded-xl hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
