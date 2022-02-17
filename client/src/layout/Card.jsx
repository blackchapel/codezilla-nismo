import React from "react";
import Cards from "@mui/material/Card";
import { Grid, Avatar, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from '@mui/icons-material/Share';
import {
  CardContent,
  Typography,
} from "@mui/material";
function Card() {
  return (
    <Cards
      sx={{
        maxWidth: "500px",
        backgroundColor: "#8fd071",
        width: "auto",
        opacity: "0.8",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          padding={1}
        >
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://wallpaperaccess.com/full/4595683.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" color="black">
              Kickstart
              <p>With vision to save the nature, get along to save our future!</p>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Button variant="contained" endIcon={<SendIcon />} color="secondary">
                Sign up
              </Button>
            </Grid>
            <Grid item>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Cards>
  );
}

export default Card;
