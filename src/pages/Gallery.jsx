import "./Gallery.css";
const categories = [
  "All",
  "Kitchen",
  "Tile Work",
  "Flooring",
  "Painting",
  "Bathroom",
];
const items = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: [
    "Kitchen Remodel",
    "Tile Work",
    "Hardwood Floor",
    "Exterior Paint",
    "Bathroom Reno",
    "Backsplash",
  ][i % 6],
}));

export default function Gallery() {
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
          <div className="gallery-grid">
            {items.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-img">
                  {/* Replace with real <img src="..." /> */}
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
