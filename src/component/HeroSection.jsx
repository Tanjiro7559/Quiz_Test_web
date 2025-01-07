import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      {/* Circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>

      <div className="hero-content">
        <h2>EDUCATION SOLUTION</h2>
        <h1>The Ultimate Platform for Concept-Based Learning</h1>
        <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.</p>
        <div className="button-group">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://via.placeholder.com/400"
          alt="Student"
          className="student-img"
        />
      </div>
    </div>
  );
}

export default HeroSection;
