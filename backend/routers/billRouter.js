const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const billController = require("../controllers/billController.js");
const billDetailController = require("../controllers/billDetailController.js");

//xem toàn bộ hóa đơn của khách hàng đang đăng nhập
router.get("/history", checkAuth.checkAuthCustomer, billController.history);

//xem thông tin chi tiết của hóa đơn
router.get("/detail/:id_hd", billDetailController.getBillDetail);

//tạo hóa đơn (khách hàng)
router.post(
  "/create",
  checkAuth.checkAuthCustomer,
  billController.createBill,
  billDetailController.addBillDetail
);

//chỉnh sửa tình trạng hóa đơn (admin)
router.patch(
  "/update/:id",
  checkAuth.checkAuthAdmin,
  billController.updateBillStatus
);

//hủy hóa đơn (khách hàng)
//chỉ hủy khi tình trạng là chưa thanh toán
router.patch(
  "/cancel/:id",
  checkAuth.checkAuthCustomer,
  billController.cancelBill
);

router.delete(
  "/delete/:id_hd",
  checkAuth.checkAuthAdmin,
  billDetailController.deleteAllBillDetail,
  billController.deleteBill
);

module.exports = router;
