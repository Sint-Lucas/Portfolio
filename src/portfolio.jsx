import React, { useState, useEffect } from 'react';
import './portfolio.css'; // We will create this CSS file next
import {
    Github, Linkedin, Mail, MapPin, Phone, Download,
    Code2, User, Briefcase, GraduationCap, Globe, Languages
} from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: <User size={18} /> },
        { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
        { id: 'experience', label: 'History', icon: <Briefcase size={18} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    ];

    return (
        <div className="portfolio-container">
            {/* Background Orbs */}
            <div className="background-effects">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            {/* Navigation */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <div className="logo">JM.</div>

                    <div className="nav-links">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {/* Hero Section */}
                <section id="home" className="section hero-section">
                    <div className="grid-2">
                        <div className="hero-text">
                            <div className="status-badge">Available for work</div>
                            <h1>
                                Hi, I'm <span className="highlight">Jari Mol</span>
                                <span className="subtitle">Web Developer</span>
                            </h1>
                            <p className="bio">
                                Dedicated web developer tailored for front-end and back-end technologies.
                                Passionate about continuous learning and creating innovative solutions.
                            </p>

                            <div className="cta-buttons">
                                <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                                    <Mail size={18} />
                                    <span>Contact Me</span>
                                </button>
                                <button className="btn btn-secondary">
                                    <Download size={18} />
                                    <span>Resume</span>
                                </button>
                            </div>

                            <div className="social-links">
                                <a href="#"><Github size={24} /></a>
                                <a href="#"><Linkedin size={24} /></a>
                            </div>
                        </div>

                        {/* Profile Stats Card */}
                        <div className="glass-card profile-card">
                            <div className="info-row">
                                <div className="icon-box teal"><MapPin size={24} /></div>
                                <div><h3>Location</h3><p>Veldhoven, Netherlands</p></div>
                            </div>
                            <div className="info-row">
                                <div className="icon-box cyan"><Phone size={24} /></div>
                                <div><h3>Phone</h3><p>06 12443024</p></div>
                            </div>
                            <div className="info-row">
                                <div className="icon-box sky"><Mail size={24} /></div>
                                <div><h3>Email</h3><p>jmol577@hotmail.com</p></div>
                            </div>
                            <div className="info-row">
                                <div className="icon-box blue"><User size={24} /></div>
                                <div><h3>Personal</h3><p>Nationality: Dutch</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section">
                    <div className="section-header">
                        <h2>Technical Skills</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="skills-grid">
                        <SkillCard title="HTML" level="Skillful" icon={<Globe color="orange" />} progress={90} />
                        <SkillCard title="CSS" level="Skillful" icon={<Code2 color="#3b82f6" />} progress={85} />
                        <SkillCard title="JavaScript" level="Beginner" icon={<Code2 color="#facc15" />} progress={40} />
                        <SkillCard title="WordPress" level="Experienced" icon={<Globe color="#60a5fa" />} progress={75} />
                        <SkillCard title="C#" level="Beginner" icon={<Code2 color="#a855f7" />} progress={30} />
                    </div>

                    <div className="languages-section">
                        <h3><Languages /> Languages</h3>
                        <div className="grid-2">
                            <div className="lang-card">
                                <span>Dutch</span>
                                <span className="badge teal">Native Speaker</span>
                            </div>
                            <div className="lang-card">
                                <span>English</span>
                                <span className="badge cyan">Very Good Command</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Education */}
                <div className="grid-2 split-layout">
                    <section id="experience" className="section">
                        <h2><Briefcase color="#22d3ee" /> History</h2>
                        <div className="timeline">
                            <TimelineItem date="Jan 2023 — Present" title="Evening Operations" subtitle="Seabourne Logistics" description="Managing logistics and operational tasks efficiently." current />
                        </div>
                    </section>

                    <section id="education" className="section">
                        <h2><GraduationCap color="#14b8a6" /> Education</h2>
                        <div className="timeline">
                            <TimelineItem date="Aug 2022 — Present" title="SintLucas" subtitle="Web Development" description="Currently studying at SintLucas." current />
                            <TimelineItem date="Aug 2018 — May 2022" title="VMBO-GT" subtitle="Secondary Education" description="Completed secondary education." />
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <footer id="contact" className="footer">
                    <h2>Let's Work Together</h2>
                    <a href="mailto:jmol577@hotmail.com" className="email-link">
                        <Mail /><span>jmol577@hotmail.com</span>
                    </a>
                    <div className="copyright">© {new Date().getFullYear()} Jari Mol. All rights reserved.</div>
                </footer>
            </main>
        </div>
    );
};

const SkillCard = ({ title, level, icon, progress }) => (
    <div className="skill-card">
        <div className="skill-header">
            <div className="skill-icon">{icon}</div>
            <span className="skill-level">{level}</span>
        </div>
        <h3>{title}</h3>
        <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
);

const TimelineItem = ({ date, title, subtitle, description, current }) => (
    <div className="timeline-item">
        <div className={`timeline-dot ${current ? 'active' : ''}`}></div>
        <span className="date">{date}</span>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
    </div>
);

export default Portfolio;