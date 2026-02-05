import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
    const values = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
            ),
            title: "INTEGRITY FIRST",
            description: "Unbiased, neutral guidance. We advocate for fair sustainable outcomes whether you are buying, selling, or managing software."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
            ),
            title: "SUSTAINABLE IT = SUSTAINABLE BUSINESS",
            description: "Lower spend leads to lower footprint. Efficiency isn't just cost saving, it's aligned with ESG and future proof."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "CLIENT CENTRIC",
            description: "We translate license ambiguity into executable strategy for CFOs, Procurement leaders, CIOs and Audit Executives."
        }
    ];

    return (
        <section id="core-values" className="core-values">
            <div className="core-values-container">
                <h2 className="section-title">Our Core Values</h2>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="value-icon">{value.icon}</div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
