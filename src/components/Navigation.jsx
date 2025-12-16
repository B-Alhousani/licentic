import React, { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import licenticLogo from "../assets/Licentic Logo PNG s (2).png";

export default function Navigation({ ids }) {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = Array.isArray(ids) && ids.length ? ids : ["about", "services", "portfolio", "contact"];

  const getScrollContainer = () => document.querySelector(".app") || window;

  const getNavHeight = () => (navRef.current ? navRef.current.offsetHeight : 72);

  const scrollToSection = (sectionId) => {
    const container = document.querySelector(".app");
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offset = getNavHeight();
    if (container) {
      const top = el.offsetTop - offset;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      const rect = el.getBoundingClientRect();
      const y = rect.top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    const id = document.getElementById("hero") ? "hero" : sectionIds[0];
    scrollToSection(id);
  };

  useEffect(() => {
    const scroller = getScrollContainer();
    const onScroll = () => {
      const y = scroller === window ? window.scrollY : scroller.scrollTop;
      setIsScrolled(y > 10);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scroller = document.querySelector(".app");
    const options = {
      root: scroller || null,
      threshold: 0.6,
      rootMargin: `-${getNavHeight()}px 0px -40% 0px`,
    };
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, options);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav ref={navRef} className={`navigation ${isScrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={goHome}>
          <img src={licenticLogo} alt="Licentic" className="nav-logo-image" />
        </div>
        <button
          className="burger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">

            <li
              className="nav-item nav-dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="nav-link">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: '4px' }}>
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => scrollToSection("services")} className="dropdown-item">
                    Software License Optimization
                  </button>
                  <button onClick={() => scrollToSection("services")} className="dropdown-item">
                    Enterprise Agreement Negotiation
                  </button>
                  <button onClick={() => scrollToSection("services")} className="dropdown-item">
                    IT Budget Review
                  </button>
                  <button onClick={() => scrollToSection("services")} className="dropdown-item">
                    Compliance & Audit Defense
                  </button>
                </div>
              )}
            </li>

            <li className="nav-item">
              <button
                onClick={() => scrollToSection("methodology")}
                className={`nav-link ${activeId === "methodology" ? "active" : ""}`}
              >
                Methodology
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("core-values")}
                className={`nav-link ${activeId === "core-values" ? "active" : ""}`}
              >
                Values
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("differentiators")}
                className={`nav-link ${activeId === "differentiators" ? "active" : ""}`}
                aria-current={activeId === "differentiators" ? "page" : undefined}
              >
                Differentiators
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => window.location.href = 'mailto:contact@licentic.com'}
                className="nav-cta-button"
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
