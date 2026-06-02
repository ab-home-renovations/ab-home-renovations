import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "./Footer.css";

const services = [
  "Interior & Exterior Painting",
  "Rotten Wood Repair & Drywall Finishing",
  "Deck Repair & Construction",
  "Bathroom Remodeling & Repair",
  "Custom Carpentry",
  "Crawl Space & Basement Waterproofing",
  "Siding & Roofing",
  "Power Washing",
  "Roof & Wall Repairs",
  "Remodeling & Additions",
  "Residential Repairs",
  "Kitchen Remodeling",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/src/assets/images/logo.jpg"
            alt="A&B Home Renovations"
            className="footer-logo"
          />
          <p className="footer-slogan">WE BUILD YOUR IDEAS</p>
          <p className="footer-desc">
            A&amp;B Home Renovations LLC delivers quality craftsmanship and
            honest service across every project. Over 10 years serving our
            community with pride.
          </p>
          <div className="footer-contact-quick">
            <a href="tel:+13523392373">
              <Phone size={15} /> (352) 339-2373
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s}>
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>&nbsp;</h4>
          <ul style={{ marginTop: "2.2rem" }}>
            {services.slice(6).map((s) => (
              <li key={s}>
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <Phone size={15} />
              <a href="tel:+13523392373">(352) 339-2373</a>
            </li>
            <li>
              <Mail size={15} />
              <span>info@abhomerenovations.com</span>
            </li>
            <li>
              <Clock size={15} />
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
          <div className="footer-links-nav" style={{ marginTop: "1.5rem" }}>
            <h4>Navigation</h4>
            <ul>
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} A&amp;B Home Renovations LLC. All rights
          reserved.
        </p>
        <p style={{ opacity: 0.5, fontSize: "0.78rem", marginTop: "0.25rem" }}>
          Licensed &amp; Insured
        </p>
      </div>
    </footer>
  );
}
