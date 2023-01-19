const Category = require("../Model/Сategory.model");

module.exports.categoryController = {
  getCategory: function (req, res) {
    Category.find()
      .then((cate) => {
        res.json(cate);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteCategoryById: function (req, res) {
    Category.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json(`Категория удалена по id : ${req.params.id}`);
      })
      .catch((err) => {
        res, json(err);
      });
  },
  addCategory: function (req, res) {
    Category.create({
      name: req.body.name,
    })
      .then((cats) => {
        res.json(cats);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
