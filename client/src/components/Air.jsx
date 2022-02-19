import { Grid, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from 'axios'
import { getAirInfo } from "../data/api";

let sampleData = {
  "CO": 1.479,
  "NO2": 11.897,
  "OZONE": 21,
  "PM10": 73.061,
  "PM25": 40,
  "SO2": 3.406,
  "city": "Bangalore",
  "AQI": 112,
  "aqiInfo": {
      "pollutant": "PM2.5",
      "concentration": 40,
      "category": "Unhealthy for Sensitive Groups"
  }
}



function Air() {

  const [climateData, setClimateData] = useState({});
  const [comment, setComment] = useState("Okay");
  useEffect(() => {
    (async () => {
    try {
      const response = await getAirInfo();
      console.log(response);
      setClimateData(response);
      if (response.AQI <= 100) {
        setComment("Good");
      } else if (response.AQI > 100 && response.AQI <= 200) {
        setComment("Not Great");
      } else {
        setComment("Bad");
      }
    
    } catch(err) {
    console.log(err);
     }
  })();
  }, []);

  
  // console.log(climateData);
  // setSampleData(getAirInfo(ip));
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
            <Typography variant="h1" color="black">Around   You {``}</Typography>
          </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
          sx={{opacity: "0.8"}}
        >
          
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{borderRadius: '50%',
              width: "150px",
              height: "150px", backgroundColor: "#8fd071"}}
            >
              <Grid item>
                <Typography variant="h3" color="white">
                {climateData.CO ? climateData.CO : sampleData.CO}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  CO
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{borderRadius: '50%',
              width: "150px",
              height: "150px", backgroundColor: "#8fd071"}}
            >
              <Grid item>
                <Typography variant="h3" color="white">
                  {climateData.SO2 ? climateData.SO2 : sampleData.SO2}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  SO2
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{borderRadius: '50%',
              width: "150px",
              height: "150px", backgroundColor: "#8fd071"}}
            >
              <Grid item>
                <Typography variant="h3" color="white">
                {climateData.NO2 ? climateData.NO2 : sampleData.NO2}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  NO2
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{borderRadius: '50%',
              width: "150px",
              height: "150px", backgroundColor: "#8fd071"}}
            >
              <Grid item>
                <Typography variant="h3" color="white">
                {climateData.AQI ? climateData.AQI : sampleData.AQI}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  AQI
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
            <Typography variant="h4" color="text.secondary">This is {comment + "."}</Typography>
      </Grid>
    </Grid>
  );
}

export default Air;
