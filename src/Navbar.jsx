export default function Navbar({ setPage }) {
  return (
    <nav>
      <div className="logo" onClick={() => setPage("home")}>
        Freelancy
      </div>

      <div className="nav-links">
        <a onClick={() => setPage("browse")}>Find Freelancers</a>
        <a onClick={() => setPage("post-job")}>Post a Job</a>
        <a onClick={() => setPage("how")}>How it Works</a>
        <a onClick={() => setPage("pricing")}>Pricing</a>
        <a onClick={() => setPage("about")}>About Us</a>
      </div>

      <div className="nav-cta">
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Get Started</button>
      </div>
    </nav>
  );
}