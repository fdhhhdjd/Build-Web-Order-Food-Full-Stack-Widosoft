const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const billController = require("../controllers/billController.js");
const checkAuth = require("../middleware/checkAuth.js");

//lấy tất cả thông tin tài khoản admin
router.get(
  "/adminAccount",
  checkAuth.checkAuthAdmin,
  userController.getAllAdminAccount
);

//lấy tất cả thông tin tài khoản admin
router.get(
  "/customerAccount",
  checkAuth.checkAuthAdmin,
  userController.getAllCustomerAccount
);

//lấy thông tin tài khoản đang đăng nhập
router.get("/profile", checkAuth.checkAuthAdmin, userController.getProfile);

//đăng ký tài khoản admin
router.post("/register", userController.registerAsAdmin);

//đăng nhập tài khoản admin
router.post("/login", userController.loginAsAdmin);

//refresh token
router.get("/refreshToken", userController.refreshToken);

//Logout
router.get("/logout", userController.logout);

//chỉnh sửa thông tin tất cả tài khoản (admin)
router.patch(
  "/users/:id",
  checkAuth.checkAuthAdmin,
  userController.updateAllUser
);

//đổi mật khẩu cho tài khoản đang đăng nhập (admin)
router.patch(
  "/changePassword",
  checkAuth.checkAuthAdmin,
  userController.changePassword
);

//xóa tài khoản (admin)
router.delete(
  "/users/delete/:id",
  checkAuth.checkAuthAdmin,
  userController.deleteUser
);

//quên mật khẩu (Admin)
router.post("/forgotPassword", userController.forgotPasswordAdmin);

//hiển thị tài khoản đăng ký từ 3 ngày trước đến hiện tại
router.get("/newUser", checkAuth.checkAuthAdmin, userController.getNewUser);

//tổng đoanh thu
router.get(
  "/totalRevenue",
  checkAuth.checkAuthAdmin,
  billController.getTotalRevenue
);

//tổng sản phẩm bán được
router.get(
  "/totalProductSold",
  checkAuth.checkAuthAdmin,
  billController.getTotalProductSold
);

//tổng hóa đơn khách hàng chưa nhận được sản phẩm
router.get(
  "/totalBillCustomerNotReceived",
  checkAuth.checkAuthAdmin,
  billController.getTotalBillCustomerNotReceived
);

//tổng hóa đơn khách hàng hủy
router.get(
  "/totalBillCancelled",
  checkAuth.checkAuthAdmin,
  billController.getTotalBillCancelled
);

//lấy ra doanh thu theo tháng
router.get(
  "/revenueByMonth",
  checkAuth.checkAuthAdmin,
  billController.getRevenueByMonth
);

//thống kê hóa đơn từ ngày tới ngày
router.get(
  "/statisticBillByDay",
  checkAuth.checkAuthAdmin,
  billController.statisticsBillByDay
);

//hiển thị doanh thu bán được tháng này và so sánh tháng trước
router.get(
  "/getRevenueThisAndLastMonth",
  checkAuth.checkAuthAdmin,
  billController.getRevenueThisAndLastMonth
);

//hiển thị tổng hóa đơn khách hàng chưa nhận được tháng này và so sánh tháng trước
router.get(
  "/getTotalBillCustomerNotReceivedThisAndLastMonth",
  checkAuth.checkAuthAdmin,
  billController.getTotalBillCustomerNotReceivedThisAndLastMonth
);

//hiển thị tổng hóa đơn khách hàng hủy tháng này và so sánh tháng trước
router.get(
  "/getTotalBillCustomerCancelledThisAndLastMonth",
  checkAuth.checkAuthAdmin,
  billController.getTotalBillCustomerCancelledThisAndLastMonth
);

module.exports = router;
