import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Methodology.css';

const Methodology = () => {
    const [inView, setInView] = useState(false);
    const [activeTab, setActiveTab] = useState('unmanaged');
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                triggerOnce: true
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="methodology" className="methodology-section">
            <div className="methodology-container">

                <motion.div
                    className="methodology-header"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 className="methodology-title" variants={itemVariants} style={{ marginBottom: '3rem' }}>
                        Execution Strategy
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="methodology-grid"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Card 1 */}
                    <motion.div className="methodology-card" variants={itemVariants}>
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
                        </div>
                        <h3 className="card-title">Cost Analysis</h3>
                        <p className="card-description">
                            Analyzing and challenging the realized costs vs. the projected Bill of Quantities (BoQ).
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div className="methodology-card" variants={itemVariants}>
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <h3 className="card-title">Discrepancy Identification</h3>
                        <p className="card-description">
                            Identifying discrepancies through reclassification, license type switching, and indirect usage exposure.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div className="methodology-card" variants={itemVariants}>
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3 className="card-title">Strategic Timing</h3>
                        <p className="card-description">
                            Leveraging renewal timings and aligning on optimized pricing prior to the agreement's anniversary term for maximum cost efficiency.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="methodology-header"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    style={{ marginTop: '7rem' }}
                >
                    <motion.h2 className="methodology-title" variants={itemVariants}>
                        Your software bill, <span className="highlight-text">recalculated</span>
                    </motion.h2>

                    <motion.div className="equation-container" variants={itemVariants}>
                        <div className="equation-tabs">
                            <button
                                className={`eq-tab ${activeTab === 'unmanaged' ? 'active' : ''}`}
                                onClick={() => setActiveTab('unmanaged')}
                            >
                                Status Quo
                            </button>
                            <button
                                className={`eq-tab ${activeTab === 'governed' ? 'active' : ''}`}
                                onClick={() => setActiveTab('governed')}
                            >
                                With Licentic
                            </button>
                        </div>

                        <div className="equation-math-card">
                            <AnimatePresence mode="wait">
                                {activeTab === 'unmanaged' ? (
                                    <motion.div
                                        key="unmanaged"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="math-content"
                                    >
                                        <div className="math-row">
                                            <span className="math-label">Base Software Cost</span>
                                            <span className="math-value">$1,000,000</span>
                                        </div>
                                        <div className="math-row addition">
                                            <span className="math-operator">+</span>
                                            <span className="math-label">Vendor Increase (e.g. Microsoft 20%)</span>
                                            <span className="math-value text-red">$200,000</span>
                                        </div>
                                        <div className="math-divider"></div>
                                        <div className="math-row result">
                                            <span className="math-operator">=</span>
                                            <span className="math-label">Current Spend</span>
                                            <span className="math-value text-red font-bold">$1,200,000</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="governed"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="math-content"
                                    >
                                        <div className="math-row">
                                            <span className="math-label">Current Spend</span>
                                            <span className="math-value strikethrough">$1,200,000</span>
                                        </div>
                                        <div className="math-row subtraction">
                                            <span className="math-operator">-</span>
                                            <span className="math-label">Leakage Recovered</span>
                                            <span className="math-value text-green">$200,000</span>
                                        </div>
                                        <div className="math-row subtraction">
                                            <span className="math-operator">-</span>
                                            <span className="math-label">Renewal Savings</span>
                                            <span className="math-value text-green">$150,000</span>
                                        </div>
                                        <div className="math-divider glow-green"></div>
                                        <div className="math-row result">
                                            <span className="math-operator">=</span>
                                            <span className="math-label">What You Should Pay</span>
                                            <span className="math-value text-green font-bold">$850,000</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Methodology;
