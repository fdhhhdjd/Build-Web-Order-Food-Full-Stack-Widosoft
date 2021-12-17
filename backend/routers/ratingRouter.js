const express = require("express");
const ratingController = require("../controllers/ratingController.js");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");

//xem toàn bộ đánh giá
router.get("/all/", checkAuth.checkAuthAdmin, ratingController.getAllRating);

//đánh giá hóa đơn sau khi nhận hàng (khách hàng)
router.post(
  "/add/:id_hd",
  checkAuth.checkAuthCustomer,
  ratingController.ratingBill
);

//xem lịch sử đánh giá của người dùng
router.get(
  "/history",
  checkAuth.checkAuthCustomer,
  ratingController.historyRating
);

//sửa đánh giá (khách hàng)
router.patch(
  "/update/:id",
  checkAuth.checkAuthCustomer,
  ratingController.updateRating
);

//xóa đánh giá (admin)
router.delete(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  ratingController.deleteRating
);

module.exports = router;
