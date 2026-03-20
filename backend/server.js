require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});