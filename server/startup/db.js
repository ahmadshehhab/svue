const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> console.log("Connected To mongoDB")).catch(()=>{
        console.log("could not connect to mongoDB ")
    })
}