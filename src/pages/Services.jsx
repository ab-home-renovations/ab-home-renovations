import ServicesSection from "../components/sections/Services";
import { ArrowRight } from "lucide-react";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section className="services-header">
        <div className="container">
          <p className="section-label">Full-Service Renovations</p>
          <h1>Our Services</h1>
          <p className="services-header-sub">
            Whatever your home needs — we've got the skills and experience to
            handle it. Get a free estimate with no obligation.
          </p>
          <a
            href="/ab-home-renovations/contact"
            className="btn btn-gold"
            style={{ marginTop: "1.5rem" }}
          >
            Request a Free Quote <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <ServicesSection />
    </main>
  );
}
