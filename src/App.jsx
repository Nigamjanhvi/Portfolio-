import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const Footer = () => (
    <footer className="relative bg-[var(--bg-secondary)] py-10 text-center text-sm text-[var(--text-secondary)] font-medium overflow-hidden">
        <div className="gradient-accent-bar absolute top-0 left-0 right-0"></div>
        <div className="relative z-10">
            <p className="mb-2">© {new Date().getFullYear()} Janhvi Nigam. All rights reserved.</p>
            <p>Made with <span className="gradient-text text-lg">♥</span> using React</p>
        </div>
    </footer>
);

function App() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {/* Floating background orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="floating-orb floating-orb-1"></div>
                <div className="floating-orb floating-orb-2"></div>
                <div className="floating-orb floating-orb-3"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Resume />
                    <Skills />
                    <Projects />
                    <Certificates />
                    <Achievements />
                    <Education />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
