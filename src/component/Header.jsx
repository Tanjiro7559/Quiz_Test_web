import React, { useState } from "react";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import LogoImg from '../assets/Logo 4.png';
import { FaAngleDown } from "react-icons/fa6";
import SignInPage from './LoginPage'; 
import SignupForm from "./SignupForm";


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); 


  
  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
   const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);
  return (
    <header className="header">
      {/* Top bar */}
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

      {/* Main bar */}
      <div className="header-main">
        <div className="logo">
          <img
            src={LogoImg}
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className="nav">
          <button className="tests-btn">
            TESTS <FaAngleDown />
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search Now" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="auth-buttons">
          {/* Triggering modal for Sign In */}
          <button className="sign-in-btn" onClick={openModal}>Sign In</button>
          <button className="sign-up-btn" onClick={openSignUpModal}>Sign Up</button>
        </div>
      </div>

      {/* Modal for Sign In */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <SignInPage />
          </div>
        </div>
      )}
      {isSignUpModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeSignUpModal}>&times;</span>
            <SignupForm />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
