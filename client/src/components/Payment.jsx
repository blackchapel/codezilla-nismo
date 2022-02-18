import React, {useState} from 'react'
import {TextField, Button, Box, Container} from "@mui/material"
import axios from "axios";
function Payment() {

    const [orderAmount, setOrderAmount] = useState("");
    const apiUrl = "http://localhost:5001/api/payments";

    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            
            const result = await axios.post('/create-order', {
              amount: orderAmount + '00',
            });
            const { amount, id: order_id, currency } = result.data;
            const {
              data: { key: razorpayKey },
            } = await axios.get('/get-razorpay-key');
    
            const options = {
              key: razorpayKey,
              amount: amount.toString(),
              currency: currency,
              name: 'Climate Warriors',
              description: 'Donate to Climate Warriors',
              order_id: order_id,
              handler: async function (response) {
                const result = await axios.post('/pay-order', {
                  amount: amount,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                });
                alert(result.data.msg);
               
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
  return (<Container maxWidth="sm">
    <Box>

        <TextField label="Amount" variant='outlined'
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}>

        </TextField>
        <Button onClick={loadRazorpay} variant="contained">
          Pay now
        </Button>
    </Box>
    </Container>
  )
}

export default Payment