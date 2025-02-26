import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const GetInTouch = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Email Submitted: ${email}`);
  };

  return (
    <Box
      className="GetInTouch"
      sx={{
        backgroundColor: "#ffffff", // Light background color
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff", 
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            marginBottom: "10px",
            color: "#2E2E27",
            fontWeight: "300",
            fontSize: "40px",
          }}
        >
          Get In Touch
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            marginBottom: "20px",
            color: "#2E2E27",
            fontWeight: "200",
            fontSize: { xs: "24px", sm: "26px" },
          }}
        >
          Enter your email and look for a message from CheckAlt.
        </Typography>

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter your email"
          sx={{
            marginBottom: "20px",
            backgroundColor: "white",
            maxWidth: "413px",
            margin: "auto",
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            // Targeting the asterisk specifically and making it red
            "& .MuiInputLabel-asterisk": {
              color: "red", // Red color for the asterisk
            },
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          className="button"
          color="primary"
          onClick={handleSubmit}
          sx={{
            padding: "10px 20px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default GetInTouch;
