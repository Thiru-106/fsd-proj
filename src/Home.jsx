import { freelancers } from "../data/freelancers";
import FreelancerCard from "../components/FreelancerCard";
import "../styles/home.css";

export default function Home({ setPage }) {
  return (
    <div>
      <section className="hero">
        <h1>Hire expert freelancers, fast.</h1>

        <button onClick={() => setPage("browse")}>
          Browse Talent
        </button>
      </section>

      <div className="freelancers-grid">
        {freelancers.map(f => (
          <FreelancerCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
}