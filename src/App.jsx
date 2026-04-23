import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "browse": return <Browse />;
      case "login": return <Login setPage={setPage} />;
      case "signup": return <Signup setPage={setPage} />;
      case "dashboard": return <Dashboard />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
}