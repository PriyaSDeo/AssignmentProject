import React from "react";
import "../Styles/footer.scss";
import { Box, Link, IconButton, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Box
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "left", sm: "center" },
              textAlign: { xs: "left", sm: "center" },
              gap: { xs: "16px", sm: "28px" },
              marginBottom: "10px",
              flexDirection: { xs: "column", sm: "row" },
              padding: { xs: "16px 50px", sm: "20px 0" },
            }}
          >
            {/* Footer Links */}
            <Link href="#" color="inherit" underline="hover">
              CheckAlt Global Sites
            </Link>
            <Link href="#" color="inherit" underline="hover">
              CheckAlt Partner
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Cookie Preferences
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms of Use
            </Link>
            <Link href="#" color="inherit" underline="hover">
              CheckAlt Partner
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Adjust Ad Preferences
            </Link>
            <Link href="#" color="inherit" underline="hover">
              CheckAlt Ready
            </Link>
          </Box>
          {/* Social Media Icons (Colorful) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "left", sm: "center" },
              textAlign: { xs: "left", sm: "center" },
              gap: "20px",
              borderTop: { sm: "3px solid #3F6AB3" },
              padding: { xs: "50px 50px", sm: "16px 0" },
            }}
          >
            {/* Twitter X Icon with Brand Color */}
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: "#1DA1F2", // Twitter blue color
                "&:hover": { backgroundColor: "#e0f4fe" }, // Light hover effect
              }}
            >
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2009 0.833984H30.1078L19.3877 13.0863L31.999 29.759H22.1245L14.3903 19.6471L5.54076 29.759H0.630924L12.0971 16.6538L-0.000976562 0.833984H10.1243L17.1152 10.0766L25.2009 0.833984ZM23.4787 26.822H26.1977L8.64687 3.61672H5.72915L23.4787 26.822Z"
                  fill="white"
                />
              </svg>
              {/* <Twitter /> */}
            </IconButton>

            {/* LinkedIn Icon with Brand Color */}
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              target="_blank"
              sx={{
                color: "#0077B5", // LinkedIn blue color
                "&:hover": { backgroundColor: "#d4e7f1" }, // Light hover effect
              }}
            >
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.79228C0 1.52663 1.0587 0.5 2.36474 0.5H29.6353C30.9412 0.5 32 1.52663 32 2.79228V30.2077C32 31.4738 30.9412 32.5 29.6353 32.5H2.36474C1.0587 32.5 0 31.4738 0 30.2077V2.79228Z"
                  fill="#006699"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1023 27.2873V12.8375H5.29942V27.2873H10.1023ZM7.70082 10.8646C9.37567 10.8646 10.4181 9.75503 10.4181 8.36837C10.3869 6.9505 9.37567 5.8717 7.73259 5.8717C6.08968 5.8717 5.0155 6.9505 5.0155 8.36837C5.0155 9.75503 6.05773 10.8646 7.66951 10.8646H7.70082Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7598 27.2873H17.5626V19.2179C17.5626 18.786 17.5938 18.3546 17.7207 18.0459C18.0679 17.183 18.8581 16.2894 20.1849 16.2894C21.9228 16.2894 22.618 17.6145 22.618 19.557V27.2873H27.4205V19.002C27.4205 14.5636 25.051 12.4984 21.8911 12.4984C19.3001 12.4984 18.1626 13.9466 17.5307 14.9331H17.5628V12.8375H12.76C12.823 14.1934 12.7598 27.2873 12.7598 27.2873Z"
                  fill="white"
                />
              </svg>

              {/* <LinkedIn /> */}
            </IconButton>

            {/* Facebook Icon with Brand Color */}
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                color: "#1877F2", // Facebook blue color
                "&:hover": { backgroundColor: "#e7f3ff" }, // Light hover effect
              }}
            >
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_599)">
                  <path
                    d="M32 16.834C32 7.9975 24.8365 0.833984 16 0.833984C7.16352 0.833984 0 7.9975 0 16.834C0 24.3373 5.16608 30.6337 12.135 32.3629V21.7236H8.83584V16.834H12.135V14.7271C12.135 9.28135 14.5997 6.75718 19.9462 6.75718C20.96 6.75718 22.7091 6.95622 23.4246 7.15462V11.5866C23.047 11.5469 22.391 11.5271 21.5763 11.5271C18.953 11.5271 17.9392 12.521 17.9392 15.1047V16.834H23.1654L22.2675 21.7236H17.9392V32.7169C25.8605 31.7601 32 25.0145 32 16.834Z"
                    fill="#0866FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_599">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {/* 
              <Facebook /> */}
            </IconButton>

            {/* YouTube Icon with Brand Color */}
            <IconButton
              component="a"
              href="https://www.youtube.com"
              target="_blank"
              sx={{
                color: "#FF0000", // YouTube red color
                "&:hover": { backgroundColor: "#ffebeb" }, // Light hover effect
              }}
            >
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.3309 8.99819C30.9622 7.62052 29.8794 6.53787 28.5017 6.16908C26.0073 5.5 15.9999 5.5 15.9999 5.5C15.9999 5.5 5.99275 5.5 3.49818 6.16908C2.12052 6.53787 1.03787 7.62052 0.669081 8.99819C2.00281e-07 11.4928 0 16.7005 0 16.7005C0 16.7005 2.00281e-07 21.9083 0.669081 24.4029C1.03787 25.7806 2.12052 26.8632 3.49818 27.2319C5.99275 27.901 15.9999 27.901 15.9999 27.901C15.9999 27.901 26.0073 27.901 28.5017 27.2319C29.8794 26.8632 30.9622 25.7806 31.3309 24.4029C32 21.9083 32 16.7005 32 16.7005C32 16.7005 31.9973 11.4928 31.3309 8.99819Z"
                  fill="#FF0000"
                />
                <path
                  d="M12.7969 21.5004L21.1104 16.701L12.7969 11.9015V21.5004Z"
                  fill="white"
                />
              </svg>

              {/* <YouTube /> */}
            </IconButton>
          </Box>
        </Box>
      </footer>
    </>
  );
};
export default Footer;
