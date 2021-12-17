const ratingModel = require("../models/ratingModel.js");

module.exports = {
  //xem toàn bộ đánh giá (admin)
  getAllRating(req, res) {
    ratingModel
      .getAllRating()
      .then((ratings) => {
        return res.status(200).json({
          status: 200,
          message: "Get list ratings successfully",
          data: ratings,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get list rating",
          data: err,
        });
      });
  },

  //đánh giá hóa đơn sau khi nhận hàng (khách hàng)
  ratingBill(req, res) {
    const id_hd = req.params.id_hd;
    const id_nd = req.userData.id;
    const bill = {
      id_hd: id_hd,
      id_nd: id_nd,
    };
    const { diem_danhgia, binhluan } = req.body;

    const rating = {
      id_hd: id_hd,
      diem_danhgia: diem_danhgia,
      binhluan: binhluan,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    ratingModel
      .ratingBill(bill, rating)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to rate this bill",
          data: err,
        });
      });
  },

  //xem lịch sử đánh giá của khách hàng (khách hàng)
  historyRating(req, res) {
    const id_nd = req.userData.id;
    ratingModel
      .historyRating(id_nd)
      .then((history) => {
        return res.status(200).json({
          status: 200,
          message: "Get history ratings successfully",
          data: history,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get history ratings",
          data: err,
        });
      });
  },

  //sửa đánh giá
  updateRating(req, res) {
    const id = req.params.id;
    const { diem_danhgia, binhluan } = req.body;
    const rating = {
      id: id,
      diem_danhgia: diem_danhgia,
      binhluan: binhluan,
      updatedAt: new Date(),
    };
    ratingModel
      .updateRating(rating)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: `Updated rating: ${id} successfully`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update rating",
          data: err,
        });
      });
  },

  //xóa đánh giá ( admin)
  deleteRating(req, res) {
    const id = req.params.id;
    ratingModel
      .deleteRating(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted rating successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete rating",
          data: err,
        });
      });
  },
};
