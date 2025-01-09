import React, { useState, useRef, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

const ProfileMenu = ({
  initialProfileImage,
  onLogout,
  onEditProfile,
  onContactSupport,
  onChangeProfileImage
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const menuRef = useRef(null);
  const profileImgRef = useRef(null);

  const handleProfileClick = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
  };

  // Close the menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        profileImgRef.current && !profileImgRef.current.contains(event.target)
      ) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ display: "inline-block", position: "relative", marginLeft: "10px" }}>
      {/* Profile Image */}
      <img
        ref={profileImgRef}
        src={profileImage}
        alt="Profile"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={handleProfileClick}
      />
      {isMenuVisible && (
        <div
          ref={menuRef}
          className="profile-menu"
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 100,
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <text style={{ fontSize: "18px", fontWeight: "bold" }}>Hello</text>
            <br />
            <text style={{ fontSize: "18px", fontWeight: "bold" }}>Priya Sharma</text>
            <br />
            <text style={{ fontSize: "14px", color: "#888" }}>priyasharma@gmail.com</text>
          </div>
          <hr />
          <div style={{ marginTop: "16px" }}>
            <text
              onClick={onChangeProfileImage}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                cursor: "pointer",
                textDecoration: "underline",
                textAlign: "left",
              }}
            >
              Change Profile Picture <FaAngleRight />
            </text>
            <text
              onClick={onEditProfile}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                cursor: "pointer",
                textDecoration: "underline",
                textAlign: "left",
              }}
            >
              Edit Profile <FaAngleRight />
            </text>
            <text
              onClick={onContactSupport}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                cursor: "pointer",
                textDecoration: "underline",
                textAlign: "left",
              }}
            >
              Contact Support <FaAngleRight />
            </text>
          </div>
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            Log Out
          </button>
          <text
            style={{
              display: "block",
              width: "100%",
              padding: "4px",
              color: "#ccc",
              cursor: "not-allowed",
              marginTop: "8px",
              textAlign: "left",
            }}
          >
            Delete Account <FaAngleRight />
          </text>
        </div>
      )}
    </div>
  );
};
export default ProfileMenu;