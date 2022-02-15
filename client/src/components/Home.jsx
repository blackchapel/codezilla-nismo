import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Grid, Fade, Grow } from "@mui/material";
import Card from "../layout/Card";
function Home() {
  const growEffect = true;
  return (
      
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          sx={{ marginTop: "20px" }}
        >
          <Grow
        in={growEffect}
        style={{ transformOrigin: "0 0 0" }}
        {...(growEffect ? { timeout: 1500 } : {})}
      >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
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
          <div>
            <Typography variant="h3">Fellas</Typography>
          </div>
        </Stack>
  );
}

export default Home;
