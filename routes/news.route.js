const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");
const router = Router();

//- добавление новости
router.post("/news", newsController.addNews);

// - удаление новости
router.delete("/news/:id", newsController.deleteNewsById);

// - изменени новости
router.patch("/news/:id", newsController.editNewsById);

// - вывод определенной новости
router.get("/news/:id", newsController.getNewsById);

//  - вывод всех новостей
router.get("/news", newsController.getNews);

// - вывод всех новостей из определенной категории
router.get("/news/category/:id", newsController.getNewsByCat);

module.exports = router;
