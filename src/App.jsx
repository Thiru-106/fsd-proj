import { useState } from "react";
import Navbar from "./Navbar.jsx";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Browse from "./Browse.jsx";
import Profile from "./Profile.jsx";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login setPage={setPage} />;
      case "signup":
        return <Signup setPage={setPage} />;
      case "browse":
        return <Browse />;
      case "profile":
        return <Profile />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
}