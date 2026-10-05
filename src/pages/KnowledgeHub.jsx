import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import knowledgeHubItems from "./knowledgeHubItems";
import "./KnowledgeHub.css";

export default function KnowledgeHub() {
  useEffect(() => {
    document.title = "Knowledge Hub | Licentic";
  }, []);

  return (
    <div id="app" className="app">
      <section>
        <Navigation />
        <main className="kh">
          <div className="kh-container">
            <p className="kh-eyebrow">Knowledge Hub</p>
            <h1 className="kh-title">Guides and tools for smarter software spend</h1>
            <p className="kh-intro">
              Practical resources from the Licentic team to help you understand how software
              is licensed, counted and optimized.
            </p>

            <div className="kh-grid">
              {knowledgeHubItems.map((item) => (
                <a key={item.slug} href={`/knowledge-hub/${item.slug}`} className="kh-card">
                  <span className="kh-tag">{item.tag}</span>
                  <h2 className="kh-card-title">{item.title}</h2>
                  <p className="kh-card-summary">{item.summary}</p>
                  <span className="kh-card-footer">
                    <span className="kh-updated">Updated {item.updated}</span>
                    <span className="kh-open">Open &rarr;</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </main>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
