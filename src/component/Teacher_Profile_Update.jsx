import { React, useState } from "react";

import {
  Box,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Dialog,
  DialogContent,
} from "@mui/material";
import profileImage from "../assets/profile (2) 1.png";
import profileImagegirl from "../assets/profile (3) 1.png";
import VerfiedFrame from "../assets/Frame.png";
import closeEmailiImage from "../assets/Group (6).png";

const Teacher_Profile_Update = () => {
  // State to manage dialog visibility
  const [open, setOpen] = useState(false);

  // Handle opening the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [openCodeDialog, setOpenCodeDialog] = useState(false);
  const [openVerifiedDialog, setOpenVerifiedDialog] = useState(false);

  const handleEmailSubmit = () => {
    setOpenEmailDialog(false);
    setOpenCodeDialog(true);
  };

  const handleCodeDialogClose = () => {
    setOpenCodeDialog(false);
    setOpenVerifiedDialog(true);
  };
  const handleBack = () => {
    setOpenVerifiedDialog(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 1050,
        width: "auto",
        margin: "0 auto",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: 2,
        height: "450px",
        overflowY: "auto",
        scrollbarWidth: "none", // For Firefox
    "&::-webkit-scrollbar": {
      display: "none", 
    },
      }}
    >
      {/* Form Title */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 1 }}>
        Teacher Profile Update
      </Typography>

      {/* Form Grid */}
      <Grid container spacing={2}>
        {/* Dropdown - "I am" */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="iam-label">I am*</InputLabel>
            <Select labelId="iam-label" label="I am*">
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Parent">Parent</MenuItem>
              <MenuItem value="Tutor">Tutor</MenuItem>
              <MenuItem value="Tutor">Agent</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Contact Person */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Contact Person*"
            variant="outlined"
            placeholder="(Student & guardian)/Full name"
          />
        </Grid>

        {/* Name of Institute */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Name of Institute"
            variant="outlined"
            placeholder="If Institute"
          />
        </Grid>

        {/* Contact Person */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email ID"
          />
        </Grid>

        {/* Primary Mobile No */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Primary Mobile No" variant="outlined" />
        </Grid>

        {/* WhatsApp No */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="WhatsApp No" variant="outlined" />
        </Grid>
        {/* Email Verification Dialog */}
        <Dialog
          open={openEmailDialog}
          onClose={() => setOpenEmailDialog(false)}
        >
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 1,
                width: "500px",
              }}
            >
              <TextField
                fullWidth
                label="Enter your email ID      "
                placeholder="Enter your email ID"
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
              <Button
                variant="contained"
                color="success"
                onClick={handleEmailSubmit}
                sx={{
                  marginLeft: "16px", // Adds space to the left of the button (adjust value as needed)
                  height: "55px", // Sets the button height (adjust value as needed)
                  fontSize: "16px", // Optional: adjust font size inside the button
                  width: "150px",
                  marginBottom: 2,
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Code Input Dialog */}
        <Dialog open={openCodeDialog} onClose={handleCodeDialogClose}>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                width: "400px",
                textAlign: "center",
                background: "#ffffff",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  width: "200px", // Container width
                  height: "150px", // Container height
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  marginBottom: 0,
                  borderRadius: "12px", // You can modify the border radius as needed
                }}
              >
                <img
                  src={closeEmailiImage} // Set the image path here
                  alt="Verified Icon"
                  style={{
                    width: "120px", // Image width
                    height: "80px", // Image height
                    borderRadius: "8px", // Rounded corners for the image
                  }}
                />
              </Box>

              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Enter 4 Digit Code Sent To Your Email
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1.5,
                  marginBottom: 2,
                }}
              >
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      style={{
                        width: "50px",
                        height: "50px",
                        textAlign: "center",
                        fontSize: "18px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
              </Box>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: "150px",
                  height: "45px",
                  fontSize: "16px",
                }}
                onClick={handleCodeDialogClose}
              >
                SUBMIT
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        <Dialog open={openVerifiedDialog} onClose={handleBack}>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                width: "400px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "green",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="40"
                  height="40"
                >
                  <path
                    fill="white"
                    d="M10 17l-5-5 1.4-1.4 3.6 3.6L17.6 7 19 8.4l-9 9z"
                  />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Verified
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={handleBack}
                sx={{
                  width: "150px",
                  height: "45px",
                  fontSize: "16px",
                }}
              >
                BACK
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Password */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Password*"
            type="password"
            variant="outlined"
          />
        </Grid>

        {/* Confirm Password */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Confirm Password*"
            type="password"
            variant="outlined"
          />
        </Grid>
        {/* Primary Mobile No */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Location" variant="outlined" />
        </Grid>
        <Grid container spacing={2} alignItems="center">
          {/* Postal Address */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ paddingLeft: 4, marginTop: 1 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Postal Address"
                variant="outlined"
                rows={3}
              />
            </Grid>

            {/* Gender */}
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center" gap={2}>
                {/* Gender Label */}
                <Typography sx={{ fontWeight: "bold" }}>Gender*</Typography>

                {/* Radio Group for Gender */}
                <RadioGroup
                  row
                  name="gender"
                  defaultValue="male" // Set a default selected value if needed
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  {/* Male */}
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center">
                        <img
                          src={profileImage}
                          alt="Male"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                    }
                  />

                  {/* Female */}
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center">
                        <img
                          src={profileImagegirl}
                          alt="Female"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                    }
                  />
                </RadioGroup>
              </Box>
            </Grid>

            {/* Interested In */}
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center" gap={2}>
                {/* "Interested In" Label */}
                <Typography sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                  Interested In
                </Typography>

                {/* Options */}
                <Box display="flex" flexDirection="column">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Face to Face Guidance"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Online Guidance"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ paddingLeft: 4 }}
          >
            {/* Institute Category */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <InputLabel id="institute-category-label">
                  Institute Category*
                </InputLabel>
                <Select
                  labelId="institute-category-label"
                  label="Institute Category*"
                >
                  <MenuItem value="School">School</MenuItem>
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="Coaching">Coaching</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Terms Agreement */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the Terms and Conditions"
              />
            </Grid>

           
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Button
      fullWidth
      variant="contained"
      color="success"
      sx={{
        padding: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "10px",
      }}
    >
      Save & Continue Registration
    </Button>
  </Grid>
</Grid>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Teacher_Profile_Update;
