export default function Signup({ setPage }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Signup</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />

        <button
          className="btn-primary"
          onClick={() => setPage("dashboard")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}