import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  return (
    <Box>
      <Grid
        container
        spacing={4}
        alignItems="left"
        sx={{
          padding: "0 102px",
          padding: { xs: "40px 16px", sm: "40px 102px" },
        }}
      >
        {/* Left Side: Text & Buttons */}
        <Grid item xs={12} md={6}>
          {/* <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
              <CardContent> */}
          <Typography
            className="primaryText"
            sx={{
              textAlign: "left",
              fontWeight: "300",
              fontSize: "42px",
              color: "",
            }}
          >
            Welcome Developers!
          </Typography>

          <Typography
            className="primaryText"
            sx={{
              textAlign: "left",
              fontWeight: "500",
              fontSize: "67px",
            }}
          >
            Developer Portal
          </Typography>

          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{
              textAlign: "left",
              fontWeight: 300,
              fontSize: "30px",
              color: "#777C77",
            }}
          >
            Payment, Lockbox, and Treasury Solutions
          </Typography>

          {/* Start Here Section */}
          <Typography
            className="primaryText"
            sx={{
              textAlign: "left",
              fontWeight: 500,
              fontSize: "32px",
            }}
          >
            Start Here
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              className="button"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: { xs: "max-content", sm: "unset" } }}
            >
              Create Your Account
            </Button>
            <Button
              variant="contained"
              className="button"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: { xs: "max-content", sm: "unset" } }}
            >
              Developer Guide
            </Button>
          </Box>

          {/* Directly to API Section */}
          <Typography
            className="primaryText"
            sx={{
              textAlign: "left",
              fontWeight: 500,
              fontSize: "32px",
            }}
          >
            Directly to API
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              className="button"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: { xs: "max-content", sm: "unset" } }}
            >
              View Documentation
            </Button>
            <Button
              variant="contained"
              className="button"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: { xs: "max-content", sm: "unset" } }}
            >
              Download Postman Collection
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" },justifyContent:'flex-end',
      width:{sm:"200px",md:"500px"},
      height:{sm:"200px",md:"500px"} 
      }}>
          <img
            src={`${process.env.PUBLIC_URL}/herobanner.png`}// Replace with actual image path
            alt="Developer Portal"
            style={{
              
              objectFit: "cover",
              // maxWidth: "538px",
              // maxHeight: "552px",
              width:{sm:"200px",md:"500px"},
              height:{sm:"200px",md:"500px"} 
            }}
          />
        </Grid>
        {/* Bottom Side: Paragraph */}
        <Grid item xs={12} md={12}>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "#777C77",
              fontSize: "32px",
              fontWeight: "200",
            }}
          >
            Financial institutions and businesses need a partner with the
            technology, talent, and imagination to provide solutions across the
            payments spectrum. From processing paper checks to providing
            software and APIs, CheckAlt manages complex payment flows – so you
            can focus on what matters.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
