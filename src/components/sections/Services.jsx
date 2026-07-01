import { useState } from "react";
import {
  Paintbrush2, Hammer, Home, Droplets, Wrench, Star,
  ChefHat, Grid3x3, Layers, Zap, Shovel, ShieldCheck, Loader2,
} from "lucide-react";
import { fetchFolderImages } from "../../utils/driveApi";
import Lightbox from "../common/Lightbox";
import "./Services.css";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    desc: "Full kitchen renovations including custom cabinets, granite countertops, backsplash, and layout redesigns.",
    folderId: "1OBTAEnTA8e2lekHapnSELv27t6jKojLv",
  },
  {
    icon: Grid3x3,
    title: "Tile Work",
    desc: "Shower, bathtub surrounds, backsplash, floor tile — precise installation with clean, lasting results.",
    folderId: "17DqcJa3zkl3CeBLtgq0SLN2A2D_0hAdE",
  },
  {
    icon: Layers,
    title: "Flooring",
    desc: "Hardwood, laminate, luxury vinyl, and carpet installation. Beautiful floors that stand the test of time.",
    folderId: "1z72WpcTXMlRuNjhheswBrO_rM0gjwT1q",
  },
  {
    icon: Shovel,
    title: "Demolition & Drywall",
    desc: "Safe demolition, drywall installation and finishing, and professional painting for any room.",
    folderId: "19PcGZo91er_IvXxGw5PFkbYs1guB5ZyS",
  },
  {
    icon: Zap,
    title: "Electrical & Renovation Work",
    desc: "Electrical upgrades and all types of renovation work handled by experienced professionals.",
    folderId: "1ny2u9whyo7dpWiBMaGQO6uh3RUGK71tH",
  },
  {
    icon: Paintbrush2,
    title: "Interior & Exterior Painting",
    desc: "Premium paints and precise technique for a flawless finish inside and outside your home.",
    folderId: "1BzuZN6yHMD-zU5klm4UIFd2TXDTeOMS8",
  },
  {
    icon: Wrench,
    title: "Rotten Wood Repair & Drywall",
    desc: "Identify and replace damaged wood and drywall to restore structural integrity and clean finishes.",
    folderId: "17KARGUh_cLuLttlldRMAatYaBdM5Rx56",
  },
  {
    icon: Hammer,
    title: "Deck Repair & Construction",
    desc: "Custom deck builds and expert repairs that expand your outdoor living and add lasting value.",
    folderId: "1vuhAICQkfhDKNh5mIA9SaJuQ1KENMD9q",
  },
  {
    icon: Home,
    title: "Bathroom Remodeling & Repair",
    desc: "Full bathroom renovations — showers, vanities, tile, fixtures — built to your vision.",
    folderId: "18lH4s9ArZ9KBfPh3T_gdwyGoBJ-l4bae",
  },
  {
    icon: Star,
    title: "Custom Carpentry",
    desc: "Handcrafted built-ins, trim work, and custom woodwork that elevate every space.",
    folderId: "1EmZ__U_k1LBBhj1_JEMDkkCUH7VUR6Rk",
  },
  {
    icon: ShieldCheck,
    title: "Crawl Space & Basement Waterproofing",
    desc: "Protect your foundation with professional waterproofing, vapor barriers, and drainage systems.",
    folderId: "19WYZroMjRUVsTIOz7BNm-M9i6GaW66-C",
  },
  {
    icon: Droplets,
    title: "Siding, Roofing & Power Washing",
    desc: "Roof and wall repairs, siding installation, and high-pressure washing to protect and refresh your home.",
    folderId: "14nqueV7JhvzgbhBUmzM6Ruty6viTYGD_",
  },
];

export default function Services() {
  const [loadingTitle, setLoadingTitle] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  async function handleCardClick(folderId, title) {
    setLoadingTitle(title);
    const imgs = await fetchFolderImages(folderId);
    setLightboxImages(imgs.map((i) => i.src));
    setLoadingTitle(null);
    setActiveIndex(0);
  }

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
          {services.map(({ icon: Icon, title, desc, folderId }) => {
            const isLoading = loadingTitle === title;
            return (
              <div
                className={`service-card ${isLoading ? "service-card--loading" : ""}`}
                key={title}
                onClick={() => !loadingTitle && handleCardClick(folderId, title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loadingTitle)
                    handleCardClick(folderId, title);
                }}
              >
                <div className="service-icon">
                  {isLoading ? (
                    <Loader2 size={26} className="spin" />
                  ) : (
                    <Icon size={26} />
                  )}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
