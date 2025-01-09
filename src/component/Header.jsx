import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaAngleDown,
} from "react-icons/fa";
import { IoLogoYoutube, IoLocationOutline } from "react-icons/io5";
import LogoImg from "../assets/Logo 4.png";
import profilImage from "../assets/video1 (5) 2.png";
import SignInPage from "./LoginPage";
import SignupForm from "./SignupForm";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import ProfileMenu from "./ProfileMenu";

import NotificationComponent from "./Notification";

function Header({ isLoggedIn, setIsLoggedIn }) {
  // Use props here
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state from parent
    console.log("Login status updated: ", true);
    closeModal(); // Close the sign-in modal
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [profileImage, setProfileImage] = useState(profilImage);

  // Handle changing the profile image
  const handleChangeProfileImage = () => {
    console.log("Change profile image logic goes here");
    
  };

  // Handle logging out
  const handleLogout = () => {
    console.log("Logging out");
  
  };

  // Handle editing the profile
  const handleEditProfile = () => {
    console.log("Navigating to edit profile screen");
   
  };

  // Handle contacting support
  const handleContactSupport = () => {
    console.log("Opening support contact screen");
   
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="left-info">
          <span>Call Us: +1 800 123 456 789</span>
          <span>|</span>
          <span>Mail Us: ktroc@mail.com</span>
        </div>
        <div className="right-info">
          <span>
            <IoLocationOutline /> 684 West College St. Sun City, USA
          </span>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
            <IoLogoYoutube />
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="logo">
          <img src={LogoImg} alt="Logo" className="logo-image" />
        </div>
        <div className="nav">
          <div>
            {/* Button */}
            <button className="tests-btn" onClick={toggleMenu}>
              {/* onClick={toggleMenu} */}
              TESTS <FaAngleDown />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-left">
                  <button>Board </button>
                  <button>Class</button>
                  <button>Subject</button>
                </div>
                <div className="dropdown-right">
                  <span>CBSE</span>
                  <span>Marathi Medium</span>
                  <span>Hindi Medium</span>
                </div>
              </div>
            )}
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Now" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="auth-buttons">
          {!isLoggedIn ? ( // Conditionally show buttons
            <>
              <button className="sign-in-btn" onClick={openModal}>
                Sign In
              </button>
              <button className="sign-up-btn" onClick={openSignUpModal}>
                Sign Up
              </button>
            </>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
                <div className="notification-container">
          <NotificationComponent />
        </div>
             <div>
      {/* Pass necessary props to ProfileMenu */}
      <ProfileMenu
        initialProfileImage={profileImage}
        onLogout={handleLogout}
        onEditProfile={handleEditProfile}
        onContactSupport={handleContactSupport}
        onChangeProfileImage={handleChangeProfileImage}
      />
    </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <SignInPage onLogin={handleLogin} />
          </div>
        </div>
      )}

      {isSignUpModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeSignUpModal}>
              &times;
            </span>
            <SignupForm />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
