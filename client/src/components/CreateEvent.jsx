import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {createEvent} from "../data/api";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const navigate = useNavigate();
  const {user, token} = useContext(UserContext);
  const [activity, setActivity] = React.useState("Planting Trees");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let credits = activity.slice(-2);
    credits = parseInt(credits);
    let cat = activity.substring(0,(activity.length - 2));
    
    // eslint-disable-next-line no-console
   

    const response = await createEvent({
      eventname: data.get("eventname"),
      activity: cat,
      description: data.get("details"),
      date: data.get("date"),
      starttime: data.get("starttime"),
      endtime: data.get("endtime"),
      address: data.get("location"),
      pincode: data.get("pincode"),
      credits: credits,
      
    }, localStorage.getItem("token"));
    response.message == "Event created successfully!" ? navigate("/") : alert(response.message);
  };
  // eventhost: JSON.parse(localStorage.getItem("user"))
  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('Icons/CreateEvent.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "0",
      }}
    >
      <Container
        component="main"
        maxWidth="md"
        sx={{ backgroundColor: "white", marginBottom: "10px", marginTop: "0" }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          > 
           <Grid item>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <EventIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h5">
                Create an Event
              </Typography>
            </Grid>
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="eventname"
              label="Event Name"
              name="eventname"
              autoFocus
            />
           
            <InputLabel id="demo-simple-select-label">What is the event for? </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="activity"
              name="activity"
              value={activity}
              defaultValue={"Planting Trees"}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={"Planting Trees30"}>Planting Trees</MenuItem>
              <MenuItem value={"Awareness Campaign60"}>
                Awareness Campaign
              </MenuItem>
              <MenuItem value={"Cleaning up a public place60"}>
                Cleaning up a public place
              </MenuItem>
              <MenuItem value={"Collecting Recyclable items10"}>
                Collecting Recyclable items
              </MenuItem>
              <MenuItem value={"Setting up dustbins20"}>
                Setting up dustbins
              </MenuItem>
              <MenuItem value={"Donating Reusable Items20"}>
                Donating Reusable Items
              </MenuItem>
              <MenuItem value={"Thanking people who use public transport10"}>
                Thanking people who use public transport
              </MenuItem>
              <MenuItem value={"Setting up a compost bin50"}>
                Setting up a compost bin
              </MenuItem>
              <MenuItem
                value={
                  "Using public transport/cycles instead of private vehicles20"
                }
              >
                Using public transport/cycles instead of private vehicles
              </MenuItem>
              <MenuItem value={"Fixing leakages10"}>Fixing leakages</MenuItem>
              <MenuItem value={"Installing solar panels200"}>
                Installing solar panels
              </MenuItem>
              <MenuItem value={"Rainwater harvesting150"}>
                Rainwater harvesting
              </MenuItem>
            </Select>
            <TextField
              margin="normal"
              multiline
              fullWidth
              name="details"
              label="Additional Event Details"
              id="details"
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  id="date"
                  name="date"
                  label="Date"
                  type="date"
                  // type="datetime-local"
                  defaultValue="2022-03-01"
                  sx={{ width: 250, marginTop: "20px", marginBottom: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="starttime"
                  name="starttime"
                  label="StartTime"
                  type="time"
                  // type="datetime-local"
                  // defaultValue="2017-05-24"
                  sx={{ width: 250, marginTop: "20px", marginBottom: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="endtime"
                  name="endtime"
                  label="EndTime"
                  type="time"
                  // type="datetime-local"
                  // defaultValue="2017-05-24"
                  sx={{ width: 250, marginTop: "20px", marginBottom: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>

           
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item><TextField
                  id="location"
                  name="location"
                  label="Location"
                  type="text"
                  // type="datetime-local"
                  // defaultValue="2017-05-24"
                  sx={{ width: "600px", marginTop: "20px", marginBottom: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /></Grid>
              <Grid item>
              <TextField
                  id="pincode"
                  name="pincode"
                  label="Pincode"
                  type="text"
                  // type="datetime-local"
                  // defaultValue="2017-05-24"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Event
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
