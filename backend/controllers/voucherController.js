const voucherModel = require("../models/voucherModel.js");

module.exports = {
  checkVoucher(req, res) {
    const { id_voucher } = req.body;
    voucherModel
      .checkVoucher(id_voucher)
      .then((existVoucher) => {
        if (existVoucher === "Invalid voucher") {
          return res.status(400).json({
            status: 400,
            message: "Invalid voucher",
          });
        } else {
          return res.status(200).json({
            status: 200,
            message: "Check voucher successfully",
            data: existVoucher,
          });
        }
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to check voucher ",
          data: err,
        });
      });
  },
};
