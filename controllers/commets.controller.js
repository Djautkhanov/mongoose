const Comment = require("../Model/Comment.model");

module.exports.commentsController = {
  getCommentByNewsId: function (req, res) {
    Comment.find(req.params.newsId)
      .then((comm) => {
        res.json(comm);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteCommentByid: function (req, res) {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Камментарий удален");
      })
      .catch((err) => {
        res.json(err);
      });
  },
  addCommentByNewsId: function (req, res) {
    Comment.findByIdAndUpdate(req.params.newsId, {
      name: req.body.name,
      text: req.body.text,
      newsId: req.body.newsId,
    })
      .then((comm) => {
        res.json(comm);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
