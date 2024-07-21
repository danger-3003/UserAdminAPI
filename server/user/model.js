const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    name:String,
    email:String
});

module.exports = mongoose.model("UserData",userData);