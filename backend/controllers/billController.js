const billModel = require("../models/billModel.js");

module.exports = {
  //xem hóa đơn toàn bộ khách hàng (Admin)
  getAllBill(req, res) {
    billModel
      .getAllBill()
      .then((bills) => {
        return res.status(200).json({
          status: 200,
          message: "Get all bills successfully",
          data: bills,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all bills",
          data: err,
        });
      });
  },

  //xem toàn bộ hóa đơn của khách hàng đang đăng nhập
  history(req, res) {
    const idUser = req.userData.id;
    billModel
      .history(idUser)
      .then((bills) => {
        return res.status(200).json({
          status: 200,
          message: `Get all bills of idCustomer: ${idUser} successfully`,
          data: bills,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed get all bills",
          data: err,
        });
      });
  },

  //tạo hóa đơn (khách hàng)
  createBill(req, res, next) {
    const idUser = req.userData.id;
    const tong_sl = req.tong_sl;
    const tong_hd = req.tong_hd;
    const { id_diachi, id_thanhtoan } = req.body;
    //nếu hình thức thanh toán là COD thì tình trạng hóa đơn là chưa thanh toán
    let tinhtrangHD = id_thanhtoan == 4 ? "Chưa thanh toán" : "Đã thanh toán";
    const bill = {
      id_nd: idUser,
      id_diachi: id_diachi,
      ngaydathang: new Date(),
      tong_sl: tong_sl,
      tong_hd: tong_hd,
      createdAt: new Date(),
      updatedAt: new Date(),
      tinhtrangHD: tinhtrangHD,
      id_thanhtoan: id_thanhtoan,
    };
    billModel
      .createBill(bill)
      .then((id_bill) => {
        req.idBill = id_bill[0];
        next();
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to create bill",
          data: err,
        });
      });
  },

  //chỉnh sửa tình trạng hóa đơn (admin)
  updateBillStatus(req, res) {
    const id = req.params.id;
    const { tinhtrangHD } = req.body;
    const bill = {
      id: id,
      tinhtrangHD: tinhtrangHD,
      updatedAt: new Date(),
    };

    billModel
      .updateBillStatus(bill)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "updated bill status successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "failed to update bill status",
          data: result,
        });
      });
  },

  //hủy hóa đơn (khách hàng)
  //chỉ hủy khi tình trạng là chưa thanh toán
  cancelBill(req, res) {
    const id = req.params.id;
    const idUser = req.userData.id;
    billModel
      .cancelBill(id, idUser)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed",
          data: err,
        });
      });
  },

  //xóa hóa đơn(admin)
  deleteBill(req, res) {
    const id_hd = req.params.id_hd;
    billModel
      .deleteBill(id_hd)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted bill successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed",
          data: err,
        });
      });
  },
};
