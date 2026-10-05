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
import KnowledgeHub from "./pages/KnowledgeHub";
import KnowledgeHubArticle from "./pages/KnowledgeHubArticle";
import knowledgeHubItems from "./pages/knowledgeHubItems";
import "./App.css";

// Simple page routing based on the URL path.
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/knowledge-hub") return <KnowledgeHub />;
  if (path.startsWith("/knowledge-hub/")) {
    const slug = path.split("/")[2];
    const item = knowledgeHubItems.find((i) => i.slug === slug);
    if (item) return <KnowledgeHubArticle item={item} />;
    return <KnowledgeHub />;
  }
  return <HomePage />;
}

function HomePage() {
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

  // When arriving from another page with a link like /#methodology, jump to that section
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = setTimeout(() => {
      const container = containerRef.current;
      const section = document.getElementById(hash);
      if (container && section) container.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }, 300);
    return () => clearTimeout(t);
  }, []);

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
