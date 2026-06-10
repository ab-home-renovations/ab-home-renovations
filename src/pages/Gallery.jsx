import { useState } from "react";
import images from "../data/galleryImages";
import Lightbox from "../components/common/Lightbox";
import "./Gallery.css";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main style={{ paddingTop: "80px" }}>
      <section className="gallery-header">
        <div className="container">
          <p className="section-label">Our Work</p>
          <h1>Project Gallery</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>
            A look at some of our completed projects
          </p>
        </div>
      </section>
      <section style={{ background: "var(--color-light)" }}>
        <div className="container">
          <div className="gallery-grid">
            {images.map((src, i) => (
              <div
                className="gallery-item"
                key={src}
                onClick={() => setActiveIndex(i)}
              >
                <img
                  src={src}
                  alt={`A&B Home Renovations project ${i + 1}`}
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </main>
  );
}
