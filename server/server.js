const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const adminRoutes = require("./admin/admin");
const userRoutes = require("./user/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://danger-3003:immortalNS1213@testing.qgsqq.mongodb.net/?retryWrites=true&w=majority&appName=Testing")
.then(()=>{console.log('Connected to Database')})
.catch((err)=>{console.log(err)})

app.use("/data/admin",adminRoutes);
app.use("/data/user",userRoutes);
app.get("/",(req,res)=>{
    res.send("Welcome to the API");
})

app.listen(3000);

