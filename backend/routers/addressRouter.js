const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const addressController = require("../controllers/addressController.js");

//xem danh sách địa chỉ
router.get("/", checkAuth.checkAuthCustomer, addressController.getListAddress);

//lấy ra địa chỉ cần lấy
router.get("/:id", checkAuth.checkAuthCustomer, addressController.getIdAddress);

//thêm địa chỉ
router.post("/add", checkAuth.checkAuthCustomer, addressController.addAddress);

//sửa địa chỉ
router.patch(
  "/:id",
  checkAuth.checkAuthCustomer,
  addressController.updateAddress
);

//xóa địa chỉ (xóa cứng)
router.delete(
  "/:id",
  checkAuth.checkAuthCustomer,
  addressController.deleteAddress
);

module.exports = router;
