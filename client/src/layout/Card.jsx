import React from "react";
import Cards from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
function Card() {
  return (
    <Cards sx={{ maxWidth: "345px", backgroundColor: 'purple' }}>
      <CardActionArea>
        <CardContent>
         <Typography variant="h5" color='primary'>Card Title</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image="https://wallpaperaccess.com/full/4595683.jpg"
          alt="green iguana"
        />
         <CardContent>
         <Typography variant="h7" color='GrayText'>Here is the devil</Typography>
        </CardContent>
      </CardActionArea>
    </Cards>
  );
}

export default Card;
