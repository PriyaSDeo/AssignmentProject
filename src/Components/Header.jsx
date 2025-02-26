import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import "../Styles/header.scss";
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    "Product",
    "Resources",
    "Guides",
    "Community",
    "About",
    "Contact",
  ];

  return (
    <div
      sx={{
        backgroundColor: "#fffff",
      }}
    >
      {/* AppBar */}
      <AppBar
        position="sticky"
        className="primaryText header"
        sx={{
          backgroundColor: "#fffff",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#fffff",
            justifyContent: "space-between",
            padding:{xs:"0 20px", sm:"0 102px"}
          }}
        >
          {/* Hamburger Menu (Mobile) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              justifyContent: "space-around",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo (Left) Mobile */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "none" },
              textAlign: "left",
              fontSize: "32px",
              fontWeight: "300",
              color: "#233E76",
            }}
          >
            Your Logo
          </Typography>
          {/* Logo (Desktop) */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "32px",
              fontWeight: "300",
              color: "#233E76",
            }}
          >
            Your Logo
          </Typography>
          {/* Links and Search Icon (Desktop) */}
          <div
            className="DesktopMenu"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "16px",
            }}
          >
            <Button className="buttonlink" color="inherit">
              Product
            </Button>
            <Button className="buttonlink" color="inherit">
              Resources
            </Button>
            <Button className="buttonlink" color="inherit">
              Guides
            </Button>
            <Button className="buttonlink" color="inherit">
              Community
            </Button>
            <Button className="buttonlink" color="inherit">
              About
            </Button>
            <Button className="buttonlink" color="inherit">
              Contact
            </Button>
            {/* Search Icon */}
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>

            {/* Sign In Button */}
            <Button className="button">Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer (Hamburger Menu) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
