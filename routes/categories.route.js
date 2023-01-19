const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");
const router = Router();

//- добавление категории
router.post("/categories", categoryController.addCategory);

//- удаление категории
router.delete("/categories/:id", categoryController.deleteCategoryById);

//- вывод всех категорий
router.get("/categories", categoryController.getCategory);

module.exports = router;
