import React, { useState, useRef, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  Box,
  Button,
  Typography,
  Avatar,
} from "@mui/material";

const ProfileMenu = ({
  initialProfileImage,
  onLogout,
  onEditProfile,
  onContactSupport,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const menuRef = useRef(null);
  const profileImgRef = useRef(null);

  const handleProfileClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileImgRef.current &&
        !profileImgRef.current.contains(event.target)
      ) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChangeProfilePicture = () => {
    setIsDialogOpen(true);
    setIsMenuVisible(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setIsDialogOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfilePicture = () => {
    setProfileImage(null);
    setIsDialogOpen(false);
  };

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        marginLeft: "10px",
      }}
    >
      <img
        ref={profileImgRef}
        src={profileImage || "default-avatar.png"}
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
            <Typography variant="subtitle1" fontWeight="bold">
              Hello
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              Priya Sharma
            </Typography>
            <Typography variant="body2" color="textSecondary">
              priyasharma@gmail.com
            </Typography>
          </div>
          <hr />
          <div style={{ marginTop: "16px" }}>
            <Typography
              onClick={handleChangeProfilePicture}
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
            </Typography>
            <Typography
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
            </Typography>
            <Typography
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
            </Typography>
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
        </div>
      )}

      {/* Change Profile Picture Dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
              width: "300px",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Profile Picture Change
            </Typography>
            <Avatar
              src={profileImage || "default-avatar.png"}
              alt="Profile"
              sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Button
                variant="outlined"
                component="label"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Change
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  hidden
                />
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteProfilePicture}
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Delete
              </Button>
            </Box>
            
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileMenu;
