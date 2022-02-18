// Importing modules
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const dotenv = require('dotenv').config();


const OrderSchema = mongoose.Schema({
	isPaid: Boolean,
	amount: Number,
	razorpay: {
    	orderId: String,
    	paymentId: String,
    	signature: String,
  	},
});
const Order = mongoose.model('Order', OrderSchema);

const get_razorpay_key = (req, res) => {
	res.status(200).json({ key: process.env.RAZORPAY_KEYID });
}

const create_order = async (req, res) => {
	try {
    	const instance = new Razorpay({
      		key_id: process.env.RAZORPAY_KEYID,
      		key_secret: process.env.RAZORPAY_KEY_SECRET,
    	});
		const options = {
			amount: req.body.amount,
			currency: 'INR',
		};
		
   		const order = await instance.orders.create(options);
		
    	if (!order) {
			return res.status(500).send('Some error occured');
		}
    	res.status(200).json(order);
  	} catch (error) {
    	res.status(500).json({ message: error.message });
  	}
}

const pay_order = async (req, res) => {
  try {
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
        const newOrder = Order({
        	isPaid: true,
        	amount: amount,
        	razorpay: {
           	 	orderId: razorpayOrderId,
            	paymentId: razorpayPaymentId,
            	signature: razorpaySignature,
        	},
        });
        await newOrder.save();
        res.status(201).json({
            message: 'Payment was successfull!',
        });
  	} catch(error) {
    	res.status(500).json({ message: error.message });
  	}
}

const list_orders = async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
};

// Exporting Modules
module.exports = {
	get_razorpay_key,
	create_order,
	pay_order,
	list_orders
}