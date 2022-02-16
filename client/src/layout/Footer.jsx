import React from "react";
import { Stack, Typography, Paper } from "@mui/material";
function Footer() {
  return (
    <Paper sx={{marginTop: "20px"}} elevation={7} square={true}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{backgroundColor: "black"}}
      >
        <div>
          <Typography variant="h5" color="white" sx={{marginLeft: "5px"}}>Contributions:</Typography>
          <ul style={{listStyleType: "circle", color: "white"}}>
            <li><Typography variant="subtitle">Kunal Chandwani</Typography></li>
            <li><Typography variant="subtitle">Yash Brahmbhatt</Typography></li>
            <li><Typography variant="subtitle">Vidhita Pai</Typography></li>
            <li><Typography variant="subtitle">Rosita D'mello</Typography></li>
          </ul>
        </div>
      </Stack>
      </Paper>
  );
}

export default Footer;

{
  /* <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton></ListItemButton> */
}
