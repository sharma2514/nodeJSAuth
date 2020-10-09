const User = require("../models/user.js");

module.exports.home = (req, res) => {
  console.log(req.flash);
  req.flash("success", "hello");
  return res.render("home");
};
