const express = require("express")
const router = express.Router()
const Posts = require("../models/posts.js")
router.get("/hello",(req,res)=> {
    res.send([{name:"asA",id:1},{name:"adsadsA",id:2}])
})


router.get('/discover-posts',async (req,res)=>{
    let post = await Posts.find({}).select({_id: 0})
    res.send(post)
})
module.exports = router