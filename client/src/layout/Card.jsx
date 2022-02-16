import React from "react";
import Cards from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
function Card() {
  return (
    <Cards sx={{ maxWidth: "500px", backgroundColor: 'purple', width: 'auto' }}>
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
         <Typography variant="h7" color='GrayText'>here is devil</Typography>
        </CardContent>
      </CardActionArea>
    </Cards>
  );
}

export default Card;
