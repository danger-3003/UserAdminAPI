const mongoose = require('mongoose');
const adminData = new mongoose.Schema({
    name:String,
    email:String
});

module.exports = mongoose.model("AdminData",adminData);