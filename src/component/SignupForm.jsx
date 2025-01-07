import React from "react";
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
} from "@mui/material";

const CreateAccountForm = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        width:"auto",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: 2,
        height: "450px", // Set the height here (adjust value as needed)
        overflowY: "auto", // Optional: Adds scroll for content overflow
      }}
    >
      {/* Form Title */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        CREATE AN ACCOUNT
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

        

        {/* Email */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Email ID" variant="outlined" />
        </Grid>

        {/* Primary Mobile No */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Primary Mobile No" variant="outlined" />
        </Grid>

        {/* WhatsApp No */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="WhatsApp No" variant="outlined" />
        </Grid>

 {/* Password */}
 <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Password*" type="password" variant="outlined" />
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

    {/* Male */}
    <FormControlLabel
      value="male"
      control={<Radio />}
      label={
        <Box display="flex" alignItems="center">
          <img
            src="https://via.placeholder.com/30" // Replace with actual male image path
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
            src="https://via.placeholder.com/30" // Replace with actual female image path
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
  </Box>
</Grid>

{/* Interested In */}
<Grid item xs={12} sm={6} md={4}>
  <Box display="flex" alignItems="center" gap={2}>
    {/* "Interested In" Label */}
    <Typography sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Interested In</Typography>

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

  {/* Terms Agreement */}
  <Grid item xs={12} sm={6} md={4}>
    <FormControlLabel
      control={<Checkbox />}
      label="I agree to the Terms and Conditions"
    />
  </Grid>

  {/* Submit Button */}
  <Grid item xs={12} sm={6} md={4}>
    <Button
      fullWidth
      variant="contained"
      color="success"
      sx={{
        padding: "15px",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "20px",
      }}
    >
      Create My Account
    </Button>
  </Grid>
</Grid>
</Grid>

    </Box>
  );
};

export default CreateAccountForm;
