import React from "react";
import { Stack, Typography, Paper, Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import './Footer.css';
function Footer() {
  return (
    <Paper
      elevation={7}
      square={true}
      sx={{
        marginTop: "20px",
        borderRadius: "20px",
        backgroundImage:
          "url('https://media.istockphoto.com/vectors/abstract-two-tone-gradient-background-vector-id1197234186?b=1&k=20&m=1197234186&s=612x612&w=0&h=0bpI-k6I9DJ6wCuzI3OeLSTWwcc_5v7j8xVFo6GXIHQ=')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        <div>
          <Typography variant="h5" sx={{ marginLeft: "5px" }}>
            Contributions:
          </Typography>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Typography variant="subtitle">Kunal Chandwani </Typography>
            </li>
            <li>
              <Typography variant="subtitle">Yash Brahmbhatt </Typography>
            </li>
            <li>
              <Typography variant="subtitle">Vidhita Pai </Typography>
            </li>
            <li>
              <Typography variant="subtitle">Rosita D'mello </Typography>
            </li>
          </ul>
        </div>
        <div style={{ margin: "auto" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <div style={{fontSize: "50px"}}>
              <FaGithub />
            </div>
            <ul style={{listStyleType: "none"}}>
            <li>
              <Button variant="contained" size="small">
              <a href="https://github.com/Yashpb1513" target="_blank" rel="noreferrer">Github-To-Kunal</a>
              </Button>
            </li>
            <li>
              <a href="https://github.com/Yashpb1513" target="_blank" rel="noreferrer">Github-To-Yash</a>
            </li>
            <li>
              <a href="https://github.com/Yashpb1513" target="_blank" rel="noreferrer">Github-To-Vidhita</a>
            </li>
            <li>
              <a href="https://github.com/Yashpb1513" target="_blank" rel="noreferrer">Github-To-Rosita</a>
            </li>
            </ul>
          </Stack>
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
