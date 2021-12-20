const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const billDetailController = require("../controllers/billDetailController.js");

//xem toàn bộ chi tiết hóa đơn (Admin)
router.get(
  "/all",
  checkAuth.checkAuthAdmin,
  billDetailController.getAllBillDetail
);

//xem từng chi tiết hóa đơn
router.get("/:id", billDetailController.getEachBillDetail);

module.exports = router;
