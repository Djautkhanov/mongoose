const { Router } = require("express");
const { commentsController } = require("../controllers/commets.controller");
const router = Router();

// - добавление комментария к определенной новости
router.post("/news/commit", commentsController.addCommentByNewsId);

// - удалени комментария
router.delete("/news/commit/:id", commentsController.deleteCommentByid);

// - вывод всех комментариев определенной новости
router.get("/news/commit", commentsController.getCommentByNewsId);

module.exports = router;
