import { ChevronDown, Phone, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        {/* Replace src with your actual hero image */}
        <div className="hero-placeholder-bg" />
        {/* <img src="/src/assets/images/hero.jpg" alt="Home renovation" /> */}
      </div>
      <div className="hero-overlay" />

      {/* decorative diagonal stripe */}
      <div className="hero-stripe" />

      <div className="container hero-content">
        <div className="hero-badge">
          <Star size={12} fill="currentColor" /> 10+ Years of Excellence
        </div>
        <h1>
          We Build
          <br />
          <span className="hero-highlight">Your Ideas</span>
        </h1>
        <p className="hero-sub">
          Expert kitchen remodeling, tile work, flooring, painting, drywall,
          electrical and full-home renovations — done right, every time.
        </p>
        <div className="hero-actions">
          <a href="/contact" className="btn btn-gold">
            Get a Free Quote
          </a>
          <a href="/services" className="btn btn-outline">
            View Our Services
          </a>
        </div>
        <a href="tel:+13523392373" className="hero-phone">
          <Phone size={18} /> (352) 339-2373
        </a>
      </div>

      <a href="#welcome" className="scroll-hint" aria-label="Scroll down">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
