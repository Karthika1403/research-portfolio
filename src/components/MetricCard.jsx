import "./MetricCard.css";

export default function MetricCard({ title, value }) {
  return (
    <div className="metric-card">

      <h3>{value}</h3>

      <p>{title}</p>

    </div>
  );
}