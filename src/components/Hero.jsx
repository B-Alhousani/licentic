import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image-v2.png';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useAnimations';
import { fadeInUp, staggerContainer, fadeIn } from '../utils/animations';

const Hero = () => {
  const { count: savingsCount, ref: savingsRef } = useCountUp(30, 2000);
  const { count: moneyCount, ref: moneyRef } = useCountUp(25, 2000);

  const scrollToContact = () => {
    const container = document.querySelector(".app");
    const el = document.getElementById("contact");
    if (container && el) {
      const top = el.offsetTop - 80;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToDifferentiators = () => {
    const container = document.querySelector(".app");
    const el = document.getElementById("differentiators");
    if (container && el) {
      const top = el.offsetTop - 80;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Animation variants for hero specific elements
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-eyebrow" variants={fadeIn}>
            ENTERPRISE IT SPEND OPTIMIZATION
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            Where Entitlement Meets Actual Usage
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Savvy leaders are hard-wiring IT spend governance into their operating model. We function exactly where financial spend meets IT usage — with automated signals that block non-entitled consumption and shut down leakage before it becomes a cost.

          </motion.p>

          <motion.div
            className="hero-trust-indicators"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="trust-badge" variants={badgeVariant}>
              <div className="trust-badge-inner">
                <div className="trust-badge-front">
                  <div className="trust-badge-value">Cost Saving</div>
                </div>
                <div className="trust-badge-back">
                  <div className="trust-badge-description">Reallocating wasted entitlements spend</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="trust-badge" variants={badgeVariant}>
              <div className="trust-badge-inner">
                <div className="trust-badge-front">
                  <div className="trust-badge-value">Cost Optimization</div>
                </div>
                <div className="trust-badge-back">
                  <div className="trust-badge-description">Controlling financial IT spend through actual usage</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="trust-badge" variants={badgeVariant}>
              <div className="trust-badge-inner">
                <div className="trust-badge-front">
                  <div className="trust-badge-value">Cost Avoidance</div>
                </div>
                <div className="trust-badge-back">
                  <div className="trust-badge-description">Preventing future costs before happening</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={heroImage} alt="Licentic IT Spend Optimization" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
