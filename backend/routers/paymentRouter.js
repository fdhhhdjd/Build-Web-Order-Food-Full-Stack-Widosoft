const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const paymentController = require("../controllers/paymentController.js");

//xem tất cả hình thức thanh toán
router.get("/", paymentController.getAllPayments);

//xem chi tiết hình thức thanh toán
router.get("/:id", paymentController.getPaymentId);

//thêm hình thức thanh toán
router.post("/add", checkAuth.checkAuthAdmin, paymentController.addPayment);

//chỉnh sửa hình thức thanh toán
router.patch("/:id", checkAuth.checkAuthAdmin, paymentController.updatePayment);

//xóa hình thức thanh toán
router.delete(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  paymentController.deletePayment
);

module.exports = router;
