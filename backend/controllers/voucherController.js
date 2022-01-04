const voucherModel = require("../models/voucherModel.js");

module.exports = {
  //kiểm tra phiếu giảm giá có tồn tại trong bảng phieu_giamgia không?
  //nếu tồn tại thì lấy ra giá trị của phiếu
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

  //xem tất cả phiếu giảm giá
  getAllVoucher(req, res) {
    voucherModel
      .getAllVoucher()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get all voucher successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all voucher ",
          data: err,
        });
      });
  },

  //Tạo 1 phiếu giảm giá (admin)
  addVoucher(req, res) {
    const { id, ten_phieu, giatri, mota } = req.body;
    const voucher = {
      id,
      ten_phieu,
      giatri,
      mota,
    };
    voucherModel
      .addVoucher(voucher)
      .then((id_voucher) => {
        return res.status(200).json({
          status: 200,
          message: "Created voucher successfully",
          data: id_voucher,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all voucher ",
          data: err,
        });
      });
  },

  //Chỉnh sửa phiếu giảm giá (admin)
  updateVoucher(req, res) {
    const id_voucher = req.params.id;
    const { ten_phieu, giatri, mota } = req.body;
    const newVoucher = {
      ten_phieu,
      giatri,
      mota,
    };

    voucherModel
      .updateVoucher(id_voucher, newVoucher)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Updated voucher successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update voucher ",
          data: err,
        });
      });
  },

  //xóa phiếu giảm giá (admin)
  deleteVoucher(req, res) {
    const id_voucher = req.params.id;
    voucherModel
      .deleteVoucher(id_voucher)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted voucher successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete voucher ",
          data: err,
        });
      });
  },
};
