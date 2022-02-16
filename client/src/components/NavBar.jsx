import React from 'react'
import {AppBar, Toolbar, Button, Link, Typography} from "@mui/material";

function NavBar() {
  return (
    <AppBar
    position="sticky"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Codezilla Nismo
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/dashboard"
          sx={{ my: 1, mx: 1.5 }}
        >
          Dashboard
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/about"
          sx={{ my: 1, mx: 1.5 }}
        >
          About us
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/contact"
          sx={{ my: 1, mx: 1.5 }}
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