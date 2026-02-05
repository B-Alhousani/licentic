import React from 'react';
import './MarketDrivers.css';

const MarketDrivers = () => {
    const drivers = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                </svg>
            ),
            title: "UnManaged IT USAGE Leaks Revenue",
            description: "Organizations lose track of licenses, pay for unused seats. Software sprawl leads to hidden costs."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                    <line x1="9" y1="11" x2="12" y2="11" />
                </svg>
            ),
            title: "INEFFICIENT LICENSE RENEWAL PRACTICES",
            description: "Companies auto-renew agreements at inflated prices, missing optimization opportunities every cycle."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                </svg>
            ),
            title: "INCREASED RISK OF OVER USAGE",
            description: "Unmanaged spend can result in multi-million dollar liabilities. Non-compliance risks appear with complex licensing models."
        }
    ];

    return (
        <section id="market-drivers" className="market-drivers">
            <div className="market-drivers-container">
                <h2 className="section-title">The IT Spend Crisis, unmatched usage that is costing Enterprises Millions</h2>

                <div className="drivers-grid">
                    {drivers.map((driver, index) => (
                        <div key={index} className="driver-card">
                            <div className="driver-icon">{driver.icon}</div>
                            <h3 className="driver-title">{driver.title}</h3>
                            <p className="driver-description">{driver.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketDrivers;
