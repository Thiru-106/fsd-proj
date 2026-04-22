import "../styles/navbar.css";

export default function Navbar({ setPage }) {
  return (
    <nav>
      <div className="logo" onClick={() => setPage("home")}>
        FreelanceHub
      </div>

      <div className="nav-links">
        <a onClick={() => setPage("browse")}>Find Freelancers</a>
        <a onClick={() => setPage("browse")}>Post a Job</a>
      </div>

      <div className="nav-cta">
        <button className="btn-ghost" onClick={() => setPage("login")}>
          Log In
        </button>
        <button className="btn-primary" onClick={() => setPage("signup")}>
          Get Started
        </button>
      </div>
    </nav>
  );
}