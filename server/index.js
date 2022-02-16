// server/index.js
const express = require("express");
const cors = require("cors");
const db = require('./connection');
const authRoute = require('./routes/auth'); 

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', authRoute);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});