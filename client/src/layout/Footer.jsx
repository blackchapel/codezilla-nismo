import React from "react";
import { Grid, Typography, Paper, Button, ButtonGroup } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <Paper
      elevation={7}
      square={true}
      sx={{
        backgroundImage:
          "url('https://media.istockphoto.com/vectors/abstract-two-tone-gradient-background-vector-id1197234186?b=1&k=20&m=1197234186&s=612x612&w=0&h=0bpI-k6I9DJ6wCuzI3OeLSTWwcc_5v7j8xVFo6GXIHQ=')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid 
      conatainer
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item style={{ margin: "auto" }}>
          <Grid
          container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item style={{ fontSize: "50px" }}>
              <FaGithub />
            </Grid>
            <Grid item>
            <ButtonGroup variant="text" >
            <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                   Kunal 
                  </a>
              </Button>
              <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yash
                  </a>
                </Button>
              <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vidhita
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                  Rosita
                  </a>
                </Button>
            </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "20px" }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item style={{ fontSize: "40px" }}>
              <FaLinkedin />
            </Grid>
            <Grid item>
            <ButtonGroup variant="text" >
            <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                   Kunal 
                  </a>
              </Button>
              <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yash
                  </a>
                </Button>
              <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vidhita
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://github.com/Yashpb1513"
                    target="_blank"
                    rel="noreferrer"
                  >
                  Rosita
                  </a>
                </Button>
            </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
