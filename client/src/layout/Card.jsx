import React from "react";
import Cards from "@mui/material/Card";
import {
  Grid,
  Avatar,
  Button,
  IconButton,
  Popper,
  Fade,
  Paper,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { CardContent, Typography } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [orderAmount, setOrderAmount] = React.useState("");
  const navigate = useNavigate();
  
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const apiUrl = "http://localhost:5001/api/payments";
  function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            
            const result = await axios.post(apiUrl + '/create-order', {
              amount: orderAmount + '00',
            });
            const { amount, id: order_id, currency } = result.data;
            console.log(amount);
            const {
              data: { key: razorpayKey },
            } = await axios.get(apiUrl + '/get-razorpay-key');
    
            const options = {
              key: razorpayKey,
              amount: amount.toString(),
              currency: currency,
              name: 'Avni Clan',
              description: 'Donate any amount towards a greener future',
              order_id: order_id,
              handler: async function (response) {
                const result = await axios.post(apiUrl + '/pay-order', {
                  amount: amount,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                });
                alert(result.data.message);
               
              },
              theme: {
                color: '#8fd071',
              },
            };
    
         
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } catch (err) {
            alert(err);
            
          }
        };
        document.body.appendChild(script);
      }
  return (
    <Cards
      sx={{
        maxWidth: "500px",
        backgroundColor: "#8fd071",
        width: "auto",
        opacity: "0.8",
        borderRadius: "10px",
        boxShadow: "0"
      }}
    >
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          padding={1}
        >
          {/* <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://wallpaperaccess.com/full/4595683.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Grid> */}
          <Grid item>
            <Typography variant="h5" color="black">
              What Can I Do To Make It Better?
            </Typography>
          </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{padding: "10px"}}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            type="number"
                            value={orderAmount}
                            onChange={(e) => setOrderAmount(e.target.value)}
                          />
                       
                        </Grid>
                        <Grid item>
                      
                          <Button variant="contained" color="secondary" onClick={() => {loadRazorpay();}}> 
                            Enter
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Fade>
                )}
              </Popper>
              <Button
                variant="contained"
                onClick={handleClick("right")}
                endIcon={<AccountBalanceWalletIcon />}
                color="secondary"
                sx={{height: "50px", width: "200px"}}
              >
                <Typography variant="h5">Donate</Typography>
              </Button>
            </Grid>
            <Grid item>
              
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                color="secondary"
                sx={{height: "50px", width: "200px"}}
                onClick={() => navigate("/signup", {replace:true})}
              >
                <Typography variant="h5">Sign up</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </CardContent>
    </Cards>
  );
}

export default Card;
