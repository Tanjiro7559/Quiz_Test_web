import React from "react";
import "../App.css";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Sponsors from "../component/Sponsors";
import CommunitySection from "../component/CommunitySection";

function Home() {
  return (
    <div className="Home">
      <Header />
      <HeroSection />
       {/* <CommunitySection></CommunitySection> */}
    </div>
  );
}

export default Home;
