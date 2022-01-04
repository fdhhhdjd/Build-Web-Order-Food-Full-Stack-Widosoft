const express = require("express");
const router = express.Router();

const voucherController = require("../controllers/voucherController.js");
const checkAuth = require("../middleware/checkAuth.js");

router.get(
  "/check",
  checkAuth.checkAuthCustomer,
  voucherController.checkVoucher
);

module.exports = router;
