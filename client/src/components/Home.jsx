import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Grid, Grow, Paper } from "@mui/material";
import Card from "../layout/Card";
import ImageListing from "./ImageListing";
function Home() {
  const growEffect = true;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
      sx={{ marginTop: "30px", marginRight: "0px", width: "100%" }}
    >
      {/* {(window.innerWidth >= 700) ? <div><Zoom in="true" style={{ transitionDelay: "700ms", transitionTimingFunction: "ease-out"}}>
        <img src="https://wallpapercave.com/wp/wp7510787.jpg" alt="image" height="350px" width={window.innerWidth} style={{opacity: '0.6', marginRight: '0px'}}/>
      </Zoom></div> : null} */}
      <Grow
        in={growEffect}
        style={{ transformOrigin: "0 0 0" }}
        {...(growEffect ? { timeout: 2000 } : {})}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          padding={2}
          sx={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp7510787.jpg')",
            marginLeft: "20px",
          }}
        >
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
        </Grid>
      </Grow>
      {/* <div style={{ direction: "flex" }}>
        <Card />
        <Card />
      </div> */}
      <Paper style={{ marginTop: "20px" }} elevation={7} sqaure={true}>
        {/* <Grow
        in={growEffect}
        style={{ transformOrigin: "0 0 0" }}
        {...(growEffect ? { timeout: 4000 } : {})}
      > */}
        <ImageListing />
      {/* </Grow> */}
      </Paper>
    </Stack>
  );
}

export default Home;
