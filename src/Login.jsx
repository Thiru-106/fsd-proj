import { loginUser } from "../utils/auth";

export default function Login({ setPage }) {
  return (
    <div>
      <input id="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />

      <button onClick={() => loginUser(setPage)}>
        Login
      </button>
    </div>
  );
}