const express = require("express")
const path = require("path")
const cors = require('cors')
const api = require("../routes/api")
const register = require("../routes/register")
const discover = require("../routes/discover")
const community = require("../routes/community")
module.exports = function (app) {
  app.use(express.static(path.join(__dirname, "assets")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use("/api", api);
  app.use("/register", register);
  app.use("/discover",discover)
  app.use("/community",community)
};
