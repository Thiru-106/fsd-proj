import { useState } from "react";
import { freelancers } from "../data/freelancers";
import "../styles/browse.css";

export default function Browse() {
  const [search, setSearch] = useState("");

  const filtered = freelancers.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse">
      <h1>Find Freelancers</h1>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((f) => (
          <div key={f.id} className="card">
            <h3>{f.name}</h3>
            <p>{f.role}</p>
            <p>{f.rate}/hr</p>
          </div>
        ))}
      </div>
    </div>
  );
}