export default function FreelancerCard({ f }) {
  return (
    <div className="freelancer-card">
      <h3>{f.name}</h3>
      <p>{f.role}</p>

      <div>
        {f.skills.map((s, i) => (
          <span key={i} className="skill-tag">{s}</span>
        ))}
      </div>

      <div>
        ⭐ {f.rating} | {f.rate}/hr
      </div>
    </div>
  );
}