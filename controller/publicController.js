// /LocalFund/controller/publicController.js
const Post = require("../model/Post");

function abreindex(req, res) {
  Post.find({})
    .populate("usuario")
    .exec(function (err, posts) {
      res.render("public/index", { Posts: posts });
    });
}

function renderTimeline(req, res) {
  Post.find({})
    .populate("usuario")
    .exec(function (err, posts) {
      res.render("public/timeline", { Posts: posts });
    });
}

module.exports = {
  abreindex,
  renderTimeline,
};

