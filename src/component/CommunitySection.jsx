import React from "react";
import "./CommunitySection.css";

function CommunitySection() {
  return (
    <div className="community-section">
      <div className="sponsors">
        <img src="https://via.placeholder.com/100" alt="Maxton Design" />
        <img src="https://via.placeholder.com/100" alt="TurboLogo" />
        <img src="https://via.placeholder.com/100" alt="Terrenomet Consulting" />
        <img src="https://via.placeholder.com/100" alt="Terreno Chianti" />
        <img src="https://via.placeholder.com/100" alt="Duragas" />
      </div>

      <div className="community-content">
        <div className="community-image">
          <img
            src="https://via.placeholder.com/400"
            alt="Student"
            className="student-img"
          />
        </div>

        <div className="community-text">
          <h5>WELCOME TO</h5>
          <h2>Our Community!</h2>
          <h3>Take A Free Demo Today.</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <button className="demo-btn">Take A Demo →</button>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
