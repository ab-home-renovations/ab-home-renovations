import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section className="contact-header">
        <div className="container">
          <p className="section-label">Get in Touch</p>
          <h1>Request a Free Quote</h1>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              marginTop: "0.5rem",
              maxWidth: "480px",
            }}
          >
            Tell us about your project and we'll get back to you with a free,
            no-obligation estimate.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-light)" }}>
        <div className="container contact-layout">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Connect your email service here)");
            }}
          >
            <h2 className="form-title">Send Us a Message</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="(352) 000-0000" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@email.com" />
            </div>
            <div className="form-group">
              <label>Service Needed *</label>
              <select required>
                <option value="">Select a service...</option>
                <option>Kitchen Remodeling (Cabinets, Granite)</option>
                <option>Tile Work (Shower, Bathtub, Backsplash, Floor)</option>
                <option>Flooring (Hardwood, Laminate, Carpet)</option>
                <option>Demolition, Drywall & Paint</option>
                <option>Electrical & Renovation Work</option>
                <option>Interior & Exterior Painting</option>
                <option>Rotten Wood Repair & Drywall Finishing</option>
                <option>Deck Repair & Construction</option>
                <option>Bathroom Remodeling & Repair</option>
                <option>Custom Carpentry</option>
                <option>Crawl Space & Basement Waterproofing</option>
                <option>Siding & Roofing</option>
                <option>Power Washing</option>
                <option>Roof & Wall Repairs</option>
                <option>Remodeling & Additions</option>
                <option>Other / Multiple Services</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Description</label>
              <textarea
                rows={5}
                placeholder="Describe your project — what needs to be done, approximate size, timeline, etc."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
            <p className="form-note">
              * We'll respond within 24 hours. No spam, ever.
            </p>
          </form>

          <div className="contact-sidebar">
            <h3>Contact Information</h3>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:+13523392373">(352) 339-2373</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Email</strong>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "We treat every home like it's our own."
              </p>
              <p className="quote-sub">— A&amp;B Home Renovations Team</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
