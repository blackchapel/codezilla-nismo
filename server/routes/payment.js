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

router.get('/get-razorpay-key', get_razorpay_key);
router.post('/create-order', create_order);
router.post('/pay-order', pay_order);
router.get('/list-orders', list_orders);

// Exporting Modules
module.exports = router;