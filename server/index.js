// const
const express = require("express");
const app = express();
const path = require("path");
const User = require("./models/users")
const POST = require("./models/posts")
require("./startup/db")()
// for pug 
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))


// routers && app.use
require("./startup/routers")(app)


const PORT = process.env.PORT || 3000
app.listen(PORT,() => console.log(`App lestening at port ${PORT}`))