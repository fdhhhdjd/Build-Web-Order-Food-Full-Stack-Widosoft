const express = require("express");
const router = express.Router();

const voucherController = require("../controllers/voucherController.js");
const checkAuth = require("../middleware/checkAuth.js");

//kiểm tra phiếu giảm giá có tồn tại trong bảng phieu_giamgia không?
//nếu tồn tại thì lấy ra giá trị của phiếu
router.get(
  "/check/:id",
  checkAuth.checkAuthCustomer,
  voucherController.checkVoucher
);

//xem tất cả phiếu giảm giá (admin)
router.get("/all", checkAuth.checkAuthAdmin, voucherController.getAllVoucher);

//Tạo 1 voucher (admin)
router.post("/add", checkAuth.checkAuthAdmin, voucherController.addVoucher);

//Chỉnh sửa phiếu giảm giá
router.patch(
  "/update/:id",
  checkAuth.checkAuthAdmin,
  voucherController.updateVoucher
);

//xóa phiếu giảm giá (admin)
router.delete(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  voucherController.deleteVoucher
);

module.exports = router;
