import React, { useState } from "react";
import "../App.css";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";

function Home() {
  // Manage login state at the parent level
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Home">
      {/* Pass shared state and handlers as props */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <HeroSection isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Home;
