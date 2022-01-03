const express = require("express");
const app = express();
const port = 5000;

const adminRouter = require("./routers/adminRouter.js");
const customerRouter = require("./routers/customerRouter.js");
const categoryRouter = require("./routers/categoryRouter.js");
const productRouter = require("./routers/productRouter.js");
const upload = require("./routers/upload.js");
const cartRouter = require("./routers/cartRouter.js");
const addressRouter = require("./routers/addressRouter.js");
const appInfoRouter = require("./routers/appInfoRouter.js");
const paymentRouter = require("./routers/paymentRouter.js");
const billRouter = require("./routers/billRouter.js");
const billDetailRouter = require("./routers/billDetailRouter.js");
const ratingRouter = require("./routers/ratingRouter.js");
const voucherRouter = require("./routers/voucherRouter.js");

const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  return res.send(healthcheck);
});

//cổng admin
app.use("/admin/", adminRouter);

//cổng khách hàng
app.use("/customer/", customerRouter);

//cổng danh mục
app.use("/category/", categoryRouter);

//cổng sản phẩm
app.use("/product/", productRouter);

//cổng upload ảnh
app.use("/cloud/", upload);

//cổng giỏ hàng
app.use("/cart/", cartRouter);

//cổng địa chỉ người dùng
app.use("/address/", addressRouter);

//cổng thông tin ứng dụng
app.use("/appInfo/", appInfoRouter);

//cổng thanh toán
app.use("/payment/", paymentRouter);

//cổng hóa đơn
app.use("/bill/", billRouter);

//cổng chi tiết hóa đơn
app.use("/billDetail", billDetailRouter);

//cổng đánh giá
app.use("/rating/", ratingRouter);

//cổng voucher
app.use("/voucher/", voucherRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
