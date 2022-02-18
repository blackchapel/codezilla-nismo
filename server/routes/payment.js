// Importing modules
const express = require('express');
const {
    get_razorpay_key,
    create_order,
    pay_order,
    list_orders
} = require('../utility/payment');

// Initializing router
const router = new express.Router();

app.get('/get-razorpay-key', get_razorpay_key);
app.post('/create-order', create_order);
app.post('/pay-order', pay_order);
app.get('/list-orders', list_orders);

// Exporting Modules
module.exports = router;