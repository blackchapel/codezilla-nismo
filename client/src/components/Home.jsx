import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Grid, Grow, Paper } from "@mui/material";
import Card from "../layout/Card";
import ImageListing from "./ImageListing";
import Leaderboard from "./Leaderboard";
import OngoingEvents from "./OngoingEvents";
import { Fragment } from "react/cjs/react.production.min";
import GlobalStyles from "@mui/material/GlobalStyles";
import Air from "./Air";
const itemData = [
  {
    img: "https://api.time.com/wp-content/uploads/2020/12/Anohi-Mita-Hanano-Namaewo-Bokutachiha-Mada-Shiranai_JP_JP_StoryArt.jpg?w=1600&quality=70",
    title: "The sweep by beach",
    author: "usr134",
    content:
      "After Meiko “Menma” Honma died in an accident, a group of six childhood best friends gradually drifted apart. .",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://api.time.com/wp-content/uploads/2020/12/shingekiTV_JA_JA_StoryArt.jpg?w=1600&quality=70",
    title: "Bus Stop Visit",
    author: "usr556",
    content:
      "For a hundred years, humanity lived peacefully inside a 50-meter wall (around 165 feet) that protected against humanoid, man-eating giants known as “titans.” ",
  },
  {
    img: "https://api.time.com/wp-content/uploads/2020/12/Death-Note_ES_LatAm_StoryArt_70204970.jpg?w=1600&quality=70",
    title: "Graden Cleaning",
    author: "usr221",
    content:
      "Light Yagami wants to be a god. After stumbling upon “Death Note”—a notebook that an actual god of death dropped into the human world—the high school student learns that anyone whose name is written in its pages dies. ",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2021/11/f5f57-16379297918281-1920.jpg",
    title: "Side the corners",
    author: "usr898",
    content:
      "The series focuses on Asta, a young orphan who is left to be raised in an orphanage alongside his fellow orphan, Yuno.",
    cols: 2,
  },
];
function Home() {
  const growEffect = true;
  return (
    <Fragment>
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
          body: { margin: 0 },
        }}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={0}
        sx={{ marginRight: "0px", width: "100%" }}
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
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            padding={2}
            sx={{
              background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148941599.jpg?t=st=1645115741~exp=1645116341~hmac=6c26becc326569c60dd3fc25036dd47fbcaec6c5b954f6c9fc9d285b0e621284&w=1480)",
              // backgroundImage:
              //   "url('')",
              marginLeft: "20px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid item>
              <Air />
            </Grid>
            <Grid item>
              <Card />
            </Grid>
          </Grid>
          {/* <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          > */}

          {/* </Grid> */}
        </Grow>
        <Grow
          in={growEffect}
          style={{ transformOrigin: "0 0 0" }}
          {...(growEffect ? { timeout: 4000 } : {})}
        >
          <div>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
              padding={3}
            >
              {itemData.map((item) => (
                <OngoingEvents item={item} />
              ))}
            </Grid>
          </div>
        </Grow>
        <Paper elevation={7} sqaure={true}>
          <ImageListing />
        </Paper>
        <div style={{ padding: "30px" }}>
          <Typography variant="h5" color="secondary">
            Leaderboard
          </Typography>
          <Leaderboard />
        </div>
      </Stack>
    </Fragment>
  );
}

export default Home;
