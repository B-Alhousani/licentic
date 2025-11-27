import { useState, useEffect, useRef } from 'react';

// Custom hook for animating numbers from 0 to target value
export const useCountUp = (target, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!startOnView || hasStarted) {
            // Start animation immediately if not waiting for view
            if (!startOnView && !hasStarted) {
                animateCount();
            }
            return;
        }

        // Setup intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                        animateCount();
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasStarted, startOnView]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;
        const endValue = target;

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(endValue); // Ensure we hit the exact target
            }
        };

        requestAnimationFrame(updateCount);
    };

    return { count, ref: elementRef };
};

// Hook to detect if user prefers reduced motion
export const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};
