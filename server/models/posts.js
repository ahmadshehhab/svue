const mongoose = require("mongoose");

const postShema = {
  title: String,
  sub: String,
  text: String,
};

const POST = mongoose.model("post", postShema);

module.exports = POST;
