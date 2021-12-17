const paymentModel = require("../models/paymentModel.js");

module.exports = {
  //xem tất cả hình thức thanh toán
  getAllPayments(req, res) {
    paymentModel
      .getAllPayments()
      .then((list) => {
        return res.status(200).json({
          status: 200,
          message: "Get all payments successfully",
          data: list,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all payments",
          data: err,
        });
      });
  },

  //xem chi tiết hình thức thanh toán
  getPaymentId(req, res) {
    const id = req.params.id;
    paymentModel
      .getPaymentId(id)
      .then((payment) => {
        return res.status(200).json({
          status: 200,
          message: "Get detail's payment successfully",
          data: payment,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get detail's payment",
          data: err,
        });
      });
  },

  //thêm hình thức thanh toán
  addPayment(req, res) {
    const { ten_hinhthuc, public_id, url } = req.body;
    if (!(public_id && url)) {
      return res.status(400).json({ message: "No image upload" });
    }
    const payment = {
      ten_hinhthuc: ten_hinhthuc,
      public_id: public_id,
      url: url,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    paymentModel
      .addPayment(payment)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Added payment successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add payment",
          data: error,
        });
      });
  },

  //chỉnh sửa hình thức thanh toán
  updatePayment(req, res) {
    const id = req.params.id;
    const { ten_hinhthuc, public_id, url } = req.body;
    const payment = {
      ten_hinhthuc: ten_hinhthuc,
      public_id: public_id,
      url: url,
      updatedAt: new Date(),
    };

    paymentModel
      .updatePayment(payment, id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Updated payment successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to update payment",
          data: error,
        });
      });
  },

  //xóa hình thức thanh toán
  deletePayment(req, res) {
    const id = req.params.id;
    paymentModel
      .deletePayment(id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Deleted payment successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to delete payment",
          data: err,
        });
      });
  },
};
