import {
  Paintbrush2,
  Hammer,
  Home,
  Droplets,
  Wrench,
  Star,
  ChefHat,
  Grid3x3,
  Layers,
  Zap,
  Shovel,
  ShieldCheck,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    desc: "Full kitchen renovations including custom cabinets, granite countertops, backsplash, and layout redesigns.",
  },
  {
    icon: Grid3x3,
    title: "Tile Work",
    desc: "Shower, bathtub surrounds, backsplash, floor tile — precise installation with clean, lasting results.",
  },
  {
    icon: Layers,
    title: "Flooring",
    desc: "Hardwood, laminate, luxury vinyl, and carpet installation. Beautiful floors that stand the test of time.",
  },
  {
    icon: Shovel,
    title: "Demolition & Drywall",
    desc: "Safe demolition, drywall installation and finishing, and professional painting for any room.",
  },
  {
    icon: Zap,
    title: "Electrical & Renovation Work",
    desc: "Electrical upgrades and all types of renovation work handled by experienced professionals.",
  },
  {
    icon: Paintbrush2,
    title: "Interior & Exterior Painting",
    desc: "Premium paints and precise technique for a flawless finish inside and outside your home.",
  },
  {
    icon: Wrench,
    title: "Rotten Wood Repair & Drywall",
    desc: "Identify and replace damaged wood and drywall to restore structural integrity and clean finishes.",
  },
  {
    icon: Hammer,
    title: "Deck Repair & Construction",
    desc: "Custom deck builds and expert repairs that expand your outdoor living and add lasting value.",
  },
  {
    icon: Home,
    title: "Bathroom Remodeling & Repair",
    desc: "Full bathroom renovations — showers, vanities, tile, fixtures — built to your vision.",
  },
  {
    icon: Star,
    title: "Custom Carpentry",
    desc: "Handcrafted built-ins, trim work, and custom woodwork that elevate every space.",
  },
  {
    icon: ShieldCheck,
    title: "Crawl Space & Basement Waterproofing",
    desc: "Protect your foundation with professional waterproofing, vapor barriers, and drainage systems.",
  },
  {
    icon: Droplets,
    title: "Siding, Roofing & Power Washing",
    desc: "Roof and wall repairs, siding installation, and high-pressure washing to protect and refresh your home.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          From a single room refresh to a full home transformation — we handle
          it all with expert craftsmanship and upfront, transparent pricing.
        </p>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, desc }) => (
            <div className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
