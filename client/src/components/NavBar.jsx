import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Link,
  Typography,
  Avatar,
  Box,
  ClickAwayListener,
} from "@mui/material";
import List from "@mui/material/List";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
function NavBar() {
  const { isLoggedIn, setUser, setToken } = useContext(UserContext);
  const navItemStyle = {
    textDecoration: "none",
    my: 1,
    mx: 1.5,
    transitionDelay: "0.1s",
    "&:hover": {
      color: "text.secondary",
    },
  };
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Link
            href="/"
            color="text.primary"
            sx={{ textDecoration: "none", flexGrow: 1 }}
            noWrap
          >
            <Typography variant="h6" color="inherit">
              Codezilla Nismo
            </Typography>
          </Link>
          <nav>
            {isLoggedIn ? (
              <Link
                variant="button"
                color="text.primary"
                to="/dashboard"
                sx={navItemStyle}
              >
                Dashboard
              </Link>
            ) : (
              <Link
                variant="button"
                color="text.primary"
                href="/about"
                sx={navItemStyle}
              >
                About us
              </Link>
            )}
            <Link
              variant="button"
              color="text.primary"
              href="/about"
              sx={navItemStyle}
            >
              About us
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/contact"
              sx={navItemStyle}
            >
              Contact us
            </Link>
          </nav>
          {isLoggedIn ? (
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <Button variant="text" {...bindToggle(popupState)}>
                    <Avatar sx={{ color: "black" }} />
                  </Button>
                  <Popper
                    {...bindPopper(popupState)}
                    transition
                    sx={{ borderRadius: "10px", marginRight: "20px" }}
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "#1F4910",
                            borderRadius: "10px",
                          }}
                          color="white"
                        >
                          <nav aria-label="main mailbox folders">
                            <List>
                              <ListItem disablePadding>
                                <Link
                                  variant="button"
                                  href="/myprofile"
                                  sx={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <PersonIcon sx={{ color: "white" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" />
                                  </ListItemButton>
                                </Link>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  onClick={() => {
                                    setUser({});
                                    setToken("");
                                  }}
                                >
                                  <ListItemIcon>
                                    <ExitToAppIcon sx={{ color: "white" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Sign Out" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Box>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          ) : (
            <Button
              href="/login"
              variant="contained"
              sx={{ my: 1, mx: 1.5 }}
              color="secondary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {/* {toMyProfile && <Navigate to="/myprofile" replace={true} />} */}
    </div>
  );
}

export default NavBar;
