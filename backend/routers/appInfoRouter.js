const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const appInfoController = require("../controllers/appInfoController.js");

//xem thông tin ứng dụng
router.get("/", appInfoController.getAllAppInfo);

//thêm thông tin ứng dụng
router.post("/add", checkAuth.checkAuthAdmin, appInfoController.addAppInfo);

//sửa thông tin ứng dụng
router.patch(
  "/:slug",
  checkAuth.checkAuthAdmin,
  appInfoController.updateAppInfo
);

router.delete(
  "/:slug",
  checkAuth.checkAuthAdmin,
  appInfoController.deleteAppInfo
);

router.get("/:slug", appInfoController.getIdAppInfo);

module.exports = router;
