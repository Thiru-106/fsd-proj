import "../styles/auth.css";

export default function Login({ setPage }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <input placeholder="Email" />
        <input placeholder="Password" type="password" />

        <button
          className="btn-primary"
          onClick={() => setPage("dashboard")}
        >
          Login
        </button>

        <p onClick={() => setPage("signup")}>
          Don't have account?
        </p>
      </div>
    </div>
  );
}