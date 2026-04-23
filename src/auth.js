export function loginUser(setPage) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "tiru@gmail.com" && password === "1234") {
    sessionStorage.setItem("loggedIn", true);
    setPage("dashboard");
  } else {
    alert("Invalid credentials");
  }
}