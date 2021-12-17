const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController.js");
const checkAuth = require("../middleware/checkAuth.js");

//lấy ra giỏ hàng của khách hàng đang đăng nhập
router.get("/", checkAuth.checkAuthCustomer, cartController.getCartOfUser);

//lấy chi tiết giỏ hàng
router.get(
  "/item/:id",
  checkAuth.checkAuthCustomer,
  cartController.getCartItem
);

//thêm sản phẩm vào giỏ hàng
router.post(
  "/addCartItem/:id_sp",
  checkAuth.checkAuthCustomer,
  cartController.addCartItem
);

//chỉnh sửa số lượng sản phẩm trong giỏ hàng
router.patch(
  "/updateQuantityProduct/:id",
  checkAuth.checkAuthCustomer,
  cartController.updateProductQuantity
);

router.delete(
  "/delete/:id",
  checkAuth.checkAuthCustomer,
  cartController.deleteCartItem
);

router.delete(
  "/deleteAll",
  checkAuth.checkAuthCustomer,
  cartController.deleteAllCartItems
);

module.exports = router;
