const router = require("express").Router()
const User = require("../models/users")
router.post("/",async(req,res)=>{
    try {
        let user = new User({
            name:req.body.name,
            password:req.body.password
        })
        user.save()
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        let user = await User.find({})
        
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})



module.exports = router