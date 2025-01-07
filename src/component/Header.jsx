import React from "react";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Header() {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="header-top">
        <div className="left-info">
          <span>Call Us: +1 800 123 456 789</span>
          <span> | </span>
          <span>Mail Us: ktroc@mail.com</span>
        </div>
        <div className="right-info">
          <span>
            <i className="fas fa-map-marker-alt"></i> 684 West College St. Sun
            City, USA
          </span>
          <div className="social-icons">
            <i className="fab fa-facebook-"><FaFacebook /></i>
            <i className="fab fa-twitter"><CiTwitter /></i>
            <i className="fab fa-instagram"><FaInstagramSquare /></i>
            <i className="fab fa-youtube"><IoLogoYoutube /></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="header-main">
        <div className="logo">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className="nav">
          <button className="tests-btn">
            TESTS <i className="fas fa-angle-down"></i>
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search Now" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
