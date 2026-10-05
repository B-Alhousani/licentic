import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./KnowledgeHub.css";

export default function KnowledgeHubArticle({ item }) {
  const frameRef = useRef(null);
  const wrapRef = useRef(null);
  const [height, setHeight] = useState(1200);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    document.title = `${item.title} | Licentic Knowledge Hub`;
  }, [item]);

  // Size the embedded page to its full height so it scrolls with the site.
  const fitFrame = () => {
    const frame = frameRef.current;
    try {
      const doc = frame && frame.contentDocument;
      if (!doc) return;
      // Prefer the map's own wrapper so the frame can shrink on small screens
      const wrap = doc.getElementById("wrap");
      const h = wrap ? wrap.getBoundingClientRect().height : doc.body.scrollHeight;
      if (h) setHeight(Math.ceil(h));
    } catch {
      /* ignore */
    }
  };

  const handleLoad = () => {
    fitFrame();
    try {
      const win = frameRef.current.contentWindow;
      win.addEventListener("resize", fitFrame);
      // Fonts can shift the layout slightly after load.
      setTimeout(fitFrame, 500);
    } catch {
      /* ignore */
    }
  };

  // Full screen mode
  useEffect(() => {
    const onChange = () => {
      const el = document.fullscreenElement || document.webkitFullscreenElement;
      setIsFull(el === wrapRef.current);
      setTimeout(fitFrame, 100);
    };
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const wrap = wrapRef.current;
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      return;
    }
    const request = wrap.requestFullscreen || wrap.webkitRequestFullscreen;
    if (request) {
      request.call(wrap);
    } else {
      // Phones without full screen support (such as iPhone): open the guide on its own
      window.open(item.file, "_blank", "noopener");
    }
  };

  const scrollToContact = () => {
    const container = document.querySelector(".app");
    const el = document.getElementById("contact");
    if (!container || !el) return;
    const top = container.scrollTop + el.getBoundingClientRect().top - container.getBoundingClientRect().top;
    container.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div id="app" className="app">
      <section>
        <Navigation />
        <main className="kh kh-article">
          <div className="kh-container">
            <a href="/knowledge-hub" className="kh-back">&larr; Knowledge Hub</a>
            <div className="kh-article-head">
              <span className="kh-tag">{item.tag}</span>
              <h1 className="kh-title kh-title-left">{item.title}</h1>
              <p className="kh-intro kh-intro-left">{item.summary}</p>
            </div>
          </div>
          <div ref={wrapRef} className={`kh-frame-wrap ${isFull ? "is-full" : ""}`}>
            <button
              type="button"
              className="kh-expand"
              onClick={toggleFullscreen}
              aria-label={isFull ? "Exit full screen" : "Expand to full screen"}
              title={isFull ? "Exit full screen" : "Expand to full screen"}
            >
              {isFull ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              )}
              <span className="kh-expand-label">{isFull ? "Exit full screen" : "Expand"}</span>
            </button>
            <iframe
              ref={frameRef}
              src={item.file}
              title={item.title}
              onLoad={handleLoad}
              allowFullScreen
              style={isFull ? undefined : { height: `${height}px` }}
              className="kh-frame"
            />
          </div>
          <div className="kh-container">
            <p className="kh-note">
              Want help applying this to your own estate?{" "}
              <button type="button" className="kh-link-button" onClick={scrollToContact}>
                Talk to Licentic
              </button>
            </p>
          </div>
        </main>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
