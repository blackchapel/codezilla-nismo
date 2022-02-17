// Importing modules
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const db = require('./connection');
const authRoute = require('./routes/auth'); 

// Initializing an express app
const app = express();

const PORT = process.env.PORT || 5001;

// Formatting incoming data
app.use(cors());
app.use(express.json());

// Logging
app.use(morgan('dev'));

// Routes
app.use('/api/user', authRoute);

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});