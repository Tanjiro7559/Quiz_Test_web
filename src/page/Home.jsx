import React from "react";
import "../App.css";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import CommunitySection from "../component/CommunitySection";
import LoginPage from '../component/LoginPage'
import SignupForm from '../component/SignupForm'

function Home() {
  return (
    <div className="Home">
      <Header />
      <HeroSection />
      {/* <LoginPage></LoginPage> */}
       {/* <CommunitySection></CommunitySection> */}
       {/* <SignupForm></SignupForm> */}
    </div>
  );
}

export default Home;
