import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Lightbox.css";

export default function Lightbox({ images, activeIndex, setActiveIndex }) {
  const close = () => setActiveIndex(null);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length, setActiveIndex],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length, setActiveIndex],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, showPrev, showNext]);

  if (activeIndex === null) return null;

  return (
    <div className="lightbox" onClick={close}>
      <button className="lightbox-close" onClick={close} aria-label="Close">
        <X size={28} />
      </button>
      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>
      <img
        src={images[activeIndex]}
        alt={`A&B Home Renovations project ${activeIndex + 1}`}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
