export default function Home({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hire <span>expert</span> freelancers
        </h1>

        <button
          className="btn-primary"
          onClick={() => setPage("browse")}
        >
          Browse Talent
        </button>
      </div>
    </section>
  );
}