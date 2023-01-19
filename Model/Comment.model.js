const mongoose = require("mongoose");

const commentShema = mongoose.Schema({
  name: String,
  text: String,
  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", commentShema);
module.exports = Comment;
