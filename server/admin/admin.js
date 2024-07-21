const mongoose = require("mongoose");
const express = require("express");
const AdminData = require("./model.js");
const UserData = require("../user/model.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const admin = express.Router();

admin.use(cors());
admin.use(bodyParser.json());

// mongoose.connect('mongodb://127.0.0.1:27017/User_Admin_Data')
// .then(()=>{console.log("Database connected")})
// .catch(()=>{console.log("Error in connecting Database")})

//creating admin in the DB
admin.post('/setAdmin',(req,res)=>{
    const admin={
        name:req.body.name,
        email:req.body.email
    };
    AdminData.findOne({name:admin.name})
    .then((response)=>{
        if(response){res.send("Admin existed");}
        else{
            AdminData.create(admin)
            .then(()=>{res.status(201).send("Admin created")})
            .catch(()=>{res.status(500).send("Error in creating admin")})
        }
    })
    .catch(()=>{res.send(500).send("Error in finding Admin")})
})

//accessing all the users data as an admin
admin.get('/getUsers',(req,res)=>{
    const users=[];
    UserData.find()
    .then((response)=>{
        response.map((user)=>{
            users.push(user);
        })
        res.send(users);
    })
    .catch((err)=>{
        console.log("error in getting users data \n"+err);
    })
})

//getting admin credentials by "params --- :id"
admin.get('/getAdmin/:id',(req,res)=>{
    const adminname=req.params.id;
    AdminData.findOne({name:adminname})
    .then((response)=>{
        if(response){res.send(response)}
        else{
            res.send({message:"No Admin found"})
        }
    })
    .catch((err)=>{console.log(err)})
})

module.exports = admin;
