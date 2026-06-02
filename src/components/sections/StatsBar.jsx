import "./StatsBar.css";
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "5★", label: "Customer Satisfaction" },
];
export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
