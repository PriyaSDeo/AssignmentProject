import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  Link,
} from "@mui/material";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    website: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
    console.log(formData); //  handle the submission logic
  };

  return (
    <>
      <Box
        sx={{
          padding: "40px",
          maxWidth: "656px",
          margin: "0 auto",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
          display: { xs: "none", sm: "block" },
        }}
      >
        {/* Title and Subtitle */}
        <Typography
          className="primaryText"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "300",
            lineHeight: "38px",
            marginBottom: "20px",
          }}
        >
          Developer Registration
        </Typography>
        <Typography
          variant="h2"
          className="primaryText"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "400",
            lineHeight: "38px",
            marginBottom: "20px",
          }}
        >
          Create Your Account
        </Typography>
        <Typography
          sx={{
            marginBottom: "10px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "38px",
            marginBottom: "20px",
          }}
        >
          Already Have an Account?
          <span className="primaryText">
            <Link href="#" color="inherit" underline="hover">
              Sign In
            </Link>
          </span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            textAlign: "center",
            color: "#777C77",
            marginBottom: "20px",
          }}
        >
          All Fields are required
        </Typography>

        {/* Form Grid */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* First Name and Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                placeholder="Enter your First Name"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                placeholder="Enter your Last Name"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>

            {/* Email and Organisation */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                placeholder="Enter your Email Address"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Organisation"
                name="organisation"
                variant="outlined"
                placeholder="Enter your Organisation"
                fullWidth
                value={formData.organisation}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>

            {/* Website and Country */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Website"
                name="website"
                type="url"
                variant="outlined"
                placeholder="Enter your Website"
                fullWidth
                value={formData.website}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  label="Country/Region"
                  name="country"
                  variant="outlined"
                  placeholder="Enter your Country"
                  fullWidth
                  value={formData.website}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Password and Confirm Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                placeholder="Enter your Password"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                placeholder="Enter your Confirm Password"
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                className="button"
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};
export default Registration;
