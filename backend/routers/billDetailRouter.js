const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const billDetailController = require("../controllers/billDetailController.js");

//xem từng chi tiết hóa đơn
router.get("/:id", billDetailController.getEachBillDetail);

module.exports = router;
