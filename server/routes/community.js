const router = require("express").Router();
const Posts = require("../models/posts.js");

router.get("/", async (req, res) => {
  let post = await Posts.find({})/* .select({ _id: 1 }) */;
  res.send(post);
});
router.post("/", async(req,res)=>{
    let post = await new Posts({
        title:req.body.title,
        sub:req.body.sub,
        text:req.body.text
    })
    await post.save()
})
router.post("/del/:id",async(req,res) => {
    await Posts.findByIdAndDelete({_id: req.params.id})
    

})

module.exports = router;
