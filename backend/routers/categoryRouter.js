const express = require("express");
const categoryController = require("../controllers/categoryController.js");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");

//GET all
router.get("/", categoryController.getAll);

//POST
router.post("/", checkAuth.checkAuthAdmin, categoryController.addCategory);

//PATCH
router.patch(
  "/:id",
  checkAuth.checkAuthAdmin,
  categoryController.updateCategory
);

//DELETE
router.delete(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  categoryController.deleteCategory
);

//lấy sản phẩm theo danh mục
router.get("/:id", categoryController.getProductsWithCategoryId);

module.exports = router;
