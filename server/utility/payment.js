// Importing modules
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const dotenv = require('dotenv').config();
const app = express();

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

app.get('/get-razorpay-key', (req, res) => {
	res.send({ key: process.env.RAZORPAY_KEY_ID });
});

app.post('/create-order', async (req, res) => {
	try {
    	const instance = new Razorpay({
      		key_id: process.env.RAZORPAY_KEY_ID,
      		key_secret: process.env.RAZORPAY_SECRET,
    	});
		const options = {
			amount: req.body.amount,
			currency: 'INR',
		};
   		const order = await instance.orders.create(options);
    	if (!order) {
			return res.status(500).send('Some error occured');
		}
    	res.status(200).json({ order });
  	} catch (error) {
    	res.status(500).json({ message: error.message });
  	}
});

app.post('/pay-order', async (req, res) => {
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
});

app.get('/list-orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});