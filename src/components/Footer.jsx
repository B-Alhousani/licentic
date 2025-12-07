import React from 'react';
import './Footer.css';
import licenticLogo from '../assets/Licentic Logo PNG s (2).png';
import '../assets/ShinyText.css';


const Footer = () => {
    const scrollToSection = (sectionId) => {
        const container = document.querySelector(".app");
        const el = document.getElementById(sectionId);
        if (container && el) {
            const top = el.offsetTop - 80;
            container.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <footer id="contact" className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-main-grid">
                        <div className="footer-brand-column">
                            <img src={licenticLogo} alt="Licentic" className="footer-brand-logo" />
                            <p className="footer-tagline">
                                No upfront fees. No risk. You only pay when we win—and we only win when you do. Pure alignment, relentless drive, massive results. Success isn’t promised. It’s paid for.
                            </p>
                            <div className="footer-certifications">

                                <span className="cert-badge">
                                    <span className="shiny-text">
                                        <span className="shiny-text__base">Microsoft</span>
                                    </span>
                                </span>

                                <span className="cert-badge">
                                    <span className="shiny-text">
                                        <span className="shiny-text__base">SAP</span>
                                    </span>
                                </span>

                                <span className="cert-badge">
                                    <span className="shiny-text">
                                        <span className="shiny-text__base">Oracle</span>
                                    </span>
                                </span>

                                <span className="cert-badge">
                                    <span className="shiny-text">
                                        <span className="shiny-text__base">IBM</span>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="footer-links-column">
                            <h3 className="footer-column-title">Our Services</h3>
                            <ul className="footer-link-list">
                                <li className='contact-item'>Software License Optimization</li>
                                <li className='contact-item'>Enterprise Agreements Negotiation</li>
                                <li className='contact-item'>Compliance & Audit Defense</li>
                            </ul>
                        </div>

                        <div className="footer-contact-column">
                            <h3 className="footer-column-title">Get In Touch</h3>
                            <div className="contact-info-list">
                                <a href="mailto:contact@licentic.com" className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>contact@licentic.com</span>
                                </a>
                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <div className="phone-numbers">
                                        <span>+971 55 9408221</span>
                                        <span>+971 55 1355953</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Masdar City, Abu Dhabi, UAE</span>
                                </div>
                                <a href="https://www.linkedin.com/company/licentic/ " target="_blank" rel="noopener noreferrer" className="contact-item linkedin-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Licentic. All rights reserved. | Optimizing software licenses since 2021
                        </p>
                        <div className="footer-legal-links">
                            <a href="#privacy">Privacy Policy</a>
                            <span className="separator">•</span>
                            <a href="#terms">Terms of Service</a>
                            <span className="separator">•</span>
                            <a href="#cookies">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
