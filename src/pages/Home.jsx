import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import Services from "../components/sections/Services";
import { CheckCircle2, Award, Users, ArrowRight } from "lucide-react";
import logoImg from "../assets/images-logos/logo-clear-background.png";
import "./Home.css";

const whyUs = [
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "A decade of quality renovations across hundreds of satisfied homes.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    desc: "Free quotes with no hidden fees — you know the cost before we start.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Skilled tradespeople who treat your home like their own.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />

      {/* Welcome Section */}
      <section id="welcome" className="welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-img-wrap">
            {/* Replace with actual image */}
            <div className="welcome-img-placeholder">
              <img
                src={logoImg}
                alt="A&B Home Renovations"
                style={{ maxWidth: "260px" }}
              />
            </div>
            <div className="welcome-badge">
              <span className="badge-num">10+</span>
              <span className="badge-txt">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>
          <div className="welcome-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">A&amp;B Home Renovations LLC</h2>
            <p className="welcome-lead">
              We are a full-service home renovation company built on honesty,
              craftsmanship, and a genuine passion for transforming spaces. From
              kitchen remodels to complete home makeovers, we bring your ideas
              to life — on time and within budget.
            </p>
            <ul className="welcome-checks">
              {[
                "Licensed & fully insured",
                "Free, no-obligation estimates",
                "Quality materials & finishes",
                "Spanish & English speaking team",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} /> {item}
                </li>
              ))}
            </ul>
            <a href="/ab-home-renovations/about" className="btn btn-outline-dark">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <div>
              <p className="section-label">Why A&amp;B</p>
              <h2 className="section-title" style={{ color: "white" }}>
                Built on Trust &amp; Quality
              </h2>
            </div>
            <a href="/ab-home-renovations/contact" className="btn btn-gold">
              Get a Free Quote <ArrowRight size={16} />
            </a>
          </div>
          <div className="why-grid">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div className="why-card" key={title}>
                <Icon size={32} className="why-icon" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free, no-obligation estimate.</p>
          </div>
          <div className="cta-actions">
            <a href="/ab-home-renovations/contact" className="btn btn-primary">
              Request a Free Quote
            </a>
            <a href="tel:+13523392373" className="btn btn-outline">
              (352) 339-2373
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
