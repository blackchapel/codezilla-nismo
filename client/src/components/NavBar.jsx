import React from 'react'
import {AppBar, Toolbar, Button, Link, Typography} from "@mui/material";

function NavBar() {

  const navItemStyle = {
    textDecoration:"none",
    my: 1,
    mx: 1.5,
    transitionDelay: "0.1s",
    "&:hover" : {
      color: "text.secondary",

    }
  }
  return (
    <AppBar
    position="sticky"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Link href="/"  color="text.primary" sx={{textDecoration:"none", flexGrow: 1}} noWrap>
        <Typography variant="h6" color="inherit"  >
          Codezilla Nismo
        </Typography>
      </Link>
     
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/dashboard"
          sx={navItemStyle}
        >
          Dashboard
        </Link>
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
      <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar