// Reusable animation variants for Framer Motion
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

// Stagger container - children animate sequentially
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

// For card grids
export const cardStaggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Text reveal - for splitting text
export const textReveal = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};

// Hover animations (use with whileHover)
export const hoverLift = {
    scale: 1.05,
    y: -8,
    transition: {
        duration: 0.3,
        ease: "easeOut"
    }
};

export const hoverGlow = {
    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
    borderColor: "#10B981",
    transition: { duration: 0.3 }
};

// Viewport options
export const viewportOptions = {
    once: true,  // Animation happens only once
    amount: 0.3  // 30% of element visible before triggering
};

export const viewportOptionsHalf = {
    once: true,
    amount: 0.5  // 50% visible before trigger
};
