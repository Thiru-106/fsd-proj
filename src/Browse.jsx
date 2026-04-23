import { useState } from "react";
import { freelancers } from "../data/freelancers";
import FreelancerCard from "../components/FreelancerCard";

export default function Browse() {
  const [search, setSearch] = useState("");

  const filtered = freelancers.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="results-grid">
        {filtered.map(f => (
          <FreelancerCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
}