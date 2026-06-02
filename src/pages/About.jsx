import { Target, Eye, Heart } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Page Header */}
      <section className="about-header">
        <div className="container">
          <p className="section-label">Our Story</p>
          <h1>About A&amp;B Home Renovations</h1>
          <p className="about-lead">
            Built on a foundation of hard work, integrity, and a passion for
            transforming spaces — we've been making renovation dreams a reality
            for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container about-story-grid">
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">A Decade of Quality Work</h2>
            <p
              style={{
                color: "var(--color-muted)",
                marginBottom: "1rem",
                lineHeight: 1.75,
              }}
            >
              A&amp;B Home Renovations LLC was founded with a simple belief:
              every homeowner deserves quality craftsmanship, honest
              communication, and results they're proud of. Over 10 years, we've
              built that reputation one project at a time.
            </p>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.75 }}>
              From kitchen overhauls and custom tile work to full-home remodels,
              our team brings the same dedication and attention to detail to
              every job — big or small. We're proud to serve our community and
              bring our clients' ideas to life.
            </p>
          </div>
          <div className="about-img-placeholder">
            <img
              src="/src/assets/images/logo.svg"
              alt="A&B"
              style={{ maxWidth: "180px", opacity: 0.2 }}
            />
            {/* Replace with a real team or project photo */}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: "var(--color-light)", padding: "5rem 0" }}>
        <div className="container">
          <p className="section-label">Our Values</p>
          <h2 className="section-title">Mission, Vision &amp; Values</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional home renovation services that exceed
                expectations — combining skilled craftsmanship, premium
                materials, and honest pricing so every client feels confident
                and cared for from the first call to the final walkthrough.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted home renovation company in our community
                — a name that homeowners recommend to their neighbors because of
                the quality they experienced and the respect with which they
                were treated throughout the process.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <Heart size={28} />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity in every quote. Quality in every cut. Respect for
                every home. We treat your space as carefully as our own, and we
                stand behind our work with pride and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
