import React from 'react';
import './Differentiators.css';

const Differentiators = () => {
    const differentiators = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: "CONTINGENT PRICING MODEL",
            description: "Our contingent based pricing model is aligned with the realized value not hours worked. Your success is our success."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
            title: "Seasoned by DNA",
            description: "25+ years at the intersection of FinOps and IT procurement, engineering outcomes that eliminate tier creep before it reaches your renewal."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "FUTURE-ALIGNED",
            description: "We position clients for sustainable, compliant procurement — structured for where the market is heading, not where it has been."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            title: "CULTURAL FLUENCY",
            description: "Our cultural fluency, regulatory awareness, and regional specific negotiation dynamics. what works in london doesn't work in Abu Dhabi"
        }
    ];

    return (
        <section id="differentiators" className="differentiators">
            <div className="differentiators-container">
                <h2 className="section-title">What Sets Us Apart</h2>

                <div className="differentiators-grid">
                    {differentiators.map((diff, index) => (
                        <div key={index} className="diff-card">
                            <div className="diff-icon">{diff.icon}</div>
                            <h3 className="diff-title">{diff.title}</h3>
                            <p className="diff-description">{diff.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
