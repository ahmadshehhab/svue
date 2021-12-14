const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name:String,
    password:String
})
const User = mongoose.model("user",userschema)

module.exports = User