import { React, useState } from "react";
import axios from "axios";
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
import closeEmailiImage from "../assets/Group (6).png";

const CreateAccountForm = () => {

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
  
   
  //Register api intercation code
  const [formData, setFormData] = useState({
    i_am: "Student",
    contact_person: "",
    email_id: "",
    mobile_no: "",
    whatsapp_no: "",
    password: "",
    location: "",
    postal_address: "",
    gender: "male",
    interested_in: [],
    terms_agreement: false,
    status: true,
    profile_photo: "",
    remarks: "",
  });
  
 
  // API Endpoint for registration
  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        formData
      );
      alert("Registration successful!");
      // Handle response as needed
    } catch (error) {
      alert("Error registering user!");
    }
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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(); // Submit data to API
  };

  const [otp, setOtp] = useState("");
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
   
  // Send OTP API call
   const sendOtp = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/send-otp/email", {
        email_id: formData.email_id,
      });
      alert("OTP sent to your email");
      setEmailDialogOpen(false);
      setOtpDialogOpen(true);
      
    } catch (error) {
      alert(error);
      // alert("Failed to send OTP");
      // alert(formData.email_id)
    }
  };

 // Verify OTP API call
const verifyOtp = async () => {
  try {
    
    console.log("Verifying OTP for email:", formData.email_id, "OTP:", otp);

    const response = await axios.post("http://localhost:3000/api/v1/verify-otp/email", {
      email_id: formData.email_id, 
      otp,
    });

 
    if (response && response.status === 200) {
      console.log("OTP verification response:", response.data); 
      alert("Email verified successfully");
      setIsEmailVerified(true); 
      setOtpDialogOpen(false);  
      setOpenVerifiedDialog(true);
    }
  } catch (error) {
    console.error("OTP verification failed:", error.response?.data || error.message);
    
    alert(error.response?.data?.message || "Invalid OTP. Please try again.");
  }
};

  return (
    <Box
      sx={{
        maxWidth: 1050,
        width: "auto",
        margin: "0 auto",
        padding: "1px",
        backgroundColor: "#fff",
        borderRadius: 2,
        height: "450px",
        overflowY: "auto",
      }}
    >
      {/* Form Title */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        CREATE AN ACCOUNT
      </Typography>

      {/* Form Grid */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Dropdown - "I am" */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="iam-label">I am*</InputLabel>
              <Select
                labelId="iam-label"
                label="I am*"
                name="i_am"
                value={formData.i_am}
                onChange={handleInputChange}
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Parent">Guardian</MenuItem>
                <MenuItem value="Tutor">Tutor</MenuItem>
                <MenuItem value="Agent">Agent</MenuItem>
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
              name="contact_person"
              value={formData.contact_person}
              onChange={handleInputChange}
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

          {/* Email - With Verification */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              onClick={() => setEmailDialogOpen(true)}
              variant="outlined"
              fullWidth
              sx={{
                padding: "15px",
                fontSize: "14px",
                marginTop: "0px",
                border: "1px solid #A0A0A0",
                backgroundColor: "#fff",
                color: "gray",
                textAlign: "left",
                justifyContent: "flex-start",
                "&:hover": {
                  color: "gray",
                  border: "1px solid gray",
                },
              }}
            >
               {isEmailVerified ? "Email Verified" : "Verify Email"}
            </Button>
          </Grid>

          {/* Primary Mobile No */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Primary Mobile No"
              variant="outlined"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleInputChange}
            />
          </Grid>

          {/* WhatsApp No */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="WhatsApp No"
              variant="outlined"
              name="whatsapp_no"
              value={formData.whatsapp_no}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Password*"
              type="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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

          {/* Location */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Postal Address */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Postal Address"
              variant="outlined"
              rows={3}
              name="postal_address"
              value={formData.postal_address}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Gender */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography sx={{ fontWeight: "bold" }}>Gender*</Typography>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
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
              <Typography sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                Interested In
              </Typography>
              <Box display="flex" flexDirection="column">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.interested_in.includes(
                        "Face to face guidance"
                      )}
                      onChange={(e) => {
                        const value = e.target.checked
                          ? [...formData.interested_in, "Face to face guidance"]
                          : formData.interested_in.filter(
                              (item) => item !== "Face to face guidance"
                            );
                        setFormData({ ...formData, interested_in: value });
                      }}
                    />
                  }
                  label="Face to Face Guidance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.interested_in.includes(
                        "Online Guidance"
                      )}
                      onChange={(e) => {
                        const value = e.target.checked
                          ? [...formData.interested_in, "Online Guidance"]
                          : formData.interested_in.filter(
                              (item) => item !== "Online Guidance"
                            );
                        setFormData({ ...formData, interested_in: value });
                      }}
                    />
                  }
                  label="Online Guidance"
                />
              </Box>
            </Box>
          </Grid>
            {/* Institute Category */}
  <Grid item xs={12} sm={6} md={4}>
    <FormControl fullWidth>
      <InputLabel id="institute-category-label">Institute Category*</InputLabel>
      <Select labelId="institute-category-label" label="Institute Category*">
        <MenuItem value="School">School</MenuItem>
        <MenuItem value="College">College</MenuItem>
        <MenuItem value="Coaching">Coaching</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </Select>
    </FormControl>
  </Grid>

          {/* Terms & Agreement */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.terms_agreement}
                  onChange={handleInputChange}
                  name="terms_agreement"
                />
              }
              label="I agree with all Terms & Agreement"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sm={6} md={4}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

    {/* Email Verification Dialog */}
    <Dialog open={emailDialogOpen} onClose={() => setOpenEmailDialog(false)}>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 1,
              width:"500px",
            }}    
          >
            
            <TextField
              fullWidth
              label="Enter your email ID      "
              placeholder="Enter your email ID"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              name="email_id"
              value={formData.email_id}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
          
              color="success"
              
              onClick={sendOtp}
              sx={{
                marginLeft: "16px", // Adds space to the left of the button (adjust value as needed)
                height: "50px", // Sets the button height (adjust value as needed)
                fontSize: "16px", // Optional: adjust font size inside the button
                width:"150px",
                marginBottom: 2
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* OTP Code Dialog */}
      <Dialog open={otpDialogOpen} onClose={() => setOtpDialogOpen(false)}>
        <DialogContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Enter the OTP sent to your email
          </Typography>
          <TextField
            fullWidth
            label="Enter OTP"
            margin="normal"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            // Handle OTP here if necessary
          />
          <Box sx={{ marginTop: 2 }}>
            <Button onClick={verifyOtp} fullWidth variant="contained">
              Verify OTP
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

    </Box>
  );   
};

export default CreateAccountForm;
