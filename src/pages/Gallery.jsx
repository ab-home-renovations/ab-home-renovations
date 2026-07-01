import { useState, useEffect } from "react";
import { fetchAllFolderImages } from "../utils/driveApi";
import { ALL_FOLDER_IDS } from "../data/driveConfig";
import Lightbox from "../components/common/Lightbox";
import "./Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetchAllFolderImages(ALL_FOLDER_IDS)
      .then((imgs) => {
        setImages(imgs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
          {loading ? (
            <div className="gallery-loading">Loading photos…</div>
          ) : (
            <div className="gallery-grid">
              {images.map((img, i) => (
                <div
                  className="gallery-item"
                  key={img.id}
                  onClick={() => setActiveIndex(i)}
                >
                  <img
                    src={img.thumb}
                    alt={`A&B Home Renovations project ${i + 1}`}
                    className="gallery-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        images={images.map((i) => i.src)}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </main>
  );
}
