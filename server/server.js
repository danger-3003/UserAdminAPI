const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const adminRoutes = require("./admin/admin");
const userRoutes = require("./user/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/User_Admin_Data")
.then(()=>{console.log('Connected to Database')})
.catch((err)=>{console.log(err)})

app.use("/data/admin",adminRoutes);
app.use("/data/user",userRoutes);

app.listen(3000);

