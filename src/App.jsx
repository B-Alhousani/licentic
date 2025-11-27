import { useMemo, useRef, useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import MarketDrivers from "./components/MarketDrivers";
import Services from "./components/Services";
import CoreValues from "./components/CoreValues";
import Differentiators from "./components/Differentiators";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

export default function App() {
  const ids = useMemo(
    () => ["hero", "methodology", "market-drivers", "services", "core-values", "differentiators", "cta", "contact"],
    []
  );
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const section = document.getElementById(ids[index]);
    if (container && section) {
      const targetScroll = section.offsetTop;
      container.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
      const viewportHeight = container.clientHeight;

      let maxVisibility = 0;
      let mostVisibleIndex = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, containerRect.bottom) - Math.max(rect.top, containerRect.top);
        const visibility = Math.max(0, visibleHeight) / viewportHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleIndex = i;
        }
      });

      setActiveIndex(mostVisibleIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return (
    <>
      <ParticleBackground />
      <div id="app" className="app" ref={containerRef}>
        <section id={ids[0]}>
          <Navigation onNavigate={scrollToIndex} ids={ids} />
          <Hero />
        </section>
        <section id={ids[2]}>
          <MarketDrivers />
        </section>
        <section id={ids[1]} >
          <Methodology />
        </section>
        <section id={ids[3]}>
          <Services />
        </section>
        <section id={ids[4]}>
          <CoreValues />
        </section>
        <section id={ids[5]}>
          <Differentiators />
        </section>
        <section id={ids[7]}>
          <Footer />
        </section>
      </div>
    </>
  );
}
