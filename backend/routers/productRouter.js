const productController = require("../controllers/productController.js");
const checkAuth = require("../middleware/checkAuth.js");

const express = require("express");
const router = express.Router();

//GET ALL PRODUCT
router.get("/", productController.getAllProducts);

//GET one product
router.get("/:id", productController.getProductId);

//POST
router.post("/", checkAuth.checkAuthAdmin, productController.insertProduct);

//PATCH
router.patch("/:id", checkAuth.checkAuthAdmin, productController.updateProduct);

//DELETE (xóa cứng)
router.delete(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  productController.deleteProduct
);

module.exports = router;
