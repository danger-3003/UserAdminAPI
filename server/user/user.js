const mongoose = require("mongoose");
const userData = require("./model.js");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const user = express.Router();

user.use(cors());
user.use(bodyParser.json());

//creating new user in the DB
user.post('/setUser',(req,res)=>{
    const user={
        name:req.body.name,
        email:req.body.email
    };
    userData.findOne({name:user.name})
    .then((response)=>{
        if(response){res.send("User existed");}
        else{
            userData.create(user)
            .then(()=>{res.status(201).send("user created")})
            .catch(()=>{res.status(500).send("Error in creating user")})
        }
    })
    .catch(()=>{res.status(500).send("Error in finding user");})
})

//getting user credentials by "params --- :id"
user.get('/:id',(req,res)=>{
    const username = req.params.id;
    userData.findOne({name:username})
    .then((response)=>{
        if(response){res.send(response)}
        else{res.send({message:"no User found"})}
    })
    .catch((err)=>{console.log(err)})
})

module.exports = user;