import React, { useRef } from 'react';
import './Services.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

const ServiceCard = ({ icon, title, description, details, index, variant }) => {
    const ref = useRef(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="service-card-wrapper"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`service-card service-card-${variant}`}
            >
                <div className="card-content-wrapper">
                    <div className="card-visual-header">
                        <div className="service-icon-wrapper">
                            <div className="service-icon">{icon}</div>
                            <div className="icon-glow"></div>
                        </div>
                    </div>

                    <div className="card-content">
                        <h3 className="service-title" style={{ transform: "translateZ(50px)" }}>{title}</h3>
                        <p className="service-description" style={{ transform: "translateZ(30px)" }}>{description}</p>
                        <ul className="service-details" style={{ transform: "translateZ(20px)" }}>
                            {details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Holographic Gradient Overlay */}
                <div className="holographic-overlay" />
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            variant: "savings",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    <polyline points="16 12 16 8" />
                </svg>
            ),
            title: "Core IT Spend",
            description: "We reclaim unused entitlements, while ensuring effective licensing.",
            details: [
                "Right-sizing",
                "consumption signals",
                "Waste elimination"

            ]
        },
        {
            variant: "negotiation",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            title: "Elevate With Power",
            description: "With Governance-by-design leverage, you get the most favorable terms on renewals.",
            details: [
                "Contract rationalization",
                "usage-paired spend",
                "Optimization as a Service"
            ]
        },

        {
            variant: "budget",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
            ),
            title: "Maximize IT Investments",
            description: "We maximize the ROI of IT investments and align spending with sustainable growth.",
            details: [
                "ERP fund Chargeback",
                "AI ROI preparedness",
                "Staff augmentation"
            ]
        }
    ];

    const openEmail = () => {
        window.location.href = 'mailto:contact@licentic.com?subject=Project Discussion';
    };

    return (
        <section id="services" className="services">
            <div className="services-container">
                <TextReveal className="section-title">
                    How We Pair IT Expenditure With Actual Usage
                </TextReveal>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                </motion.p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            {...service}
                        />
                    ))}
                </div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Magnetic>
                        <button className="services-cta-button" onClick={openEmail}>
                            Optimize your spend
                        </button>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
