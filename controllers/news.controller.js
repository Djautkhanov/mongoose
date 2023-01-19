const News = require("../Model/News.model");

module.exports.newsController = {
  addNews: function (req, res) {
    News.create({
      title: req.body.title,
      text: req.body.text,
      category: req.body.category,
    })
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteNewsById: function (req, res) {
    News.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Новость удалена");
      })
      .catch((err) => {
        res.json(err);
      });
  },
  editNewsById: function (req, res) {
    News.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      text: req.body.text,
    })
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getNewsById: function (req, res) {
    News.findOne(req.params.id)
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getNews: function (req, res) {
    News.find()
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getNewsByCat: function (req, res) {
    News.find({ category: req.params.id })
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
