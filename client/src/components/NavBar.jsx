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
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
function NavBar() {
  const { isLoggedIn, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  };
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
              href="/dashboard"
              sx={navItemStyle}
            >
              Dashboard
            </Link>
          ) : null}
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
                  <Avatar />
                </Button>
                <Popper {...bindPopper(popupState)} transition >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ul style={{ listStyle: "none", backgroundColor: "#1F4910", color: "white" }}>
                            <Button variant="text" >Sign Out</Button>
                            <Button variant="text" >My Profile</Button>
                          </ul>
                        </Grid>
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
  );
}

export default NavBar;
