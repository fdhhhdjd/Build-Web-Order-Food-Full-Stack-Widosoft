const billDetailModel = require("../models/billDetailModel.js");
const cartModel = require("../models/cartModel.js");

module.exports = {
  //xem toàn bộ chi tiết hóa đơn (Admin)
  getAllBillDetail(req, res) {
    billDetailModel
      .getAllBillDetail()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get all bill details successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all bill details",
          data: err,
        });
      });
  },

  //xem thông tin chi tiết theo hóa đơn
  getBillDetail(req, res) {
    const id_hd = req.params.id_hd;
    billDetailModel
      .getBillDetail(id_hd)
      .then((billDetails) => {
        return res.status(200).json({
          status: 200,
          message: `Get details of bill: ${id_hd} successfully`,
          data: billDetails,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get bill details",
          data: err,
        });
      });
  },

  //xem từng chi tiết hóa đơn
  getEachBillDetail(req, res) {
    const id = req.params.id;
    billDetailModel
      .getEachBillDetail(id)
      .then((billDetail) => {
        return res.status(200).json({
          status: 200,
          message: `Get detail bill id: ${id}`,
          data: billDetail,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: `Failed to get bill detail id: ${id}`,
          data: err,
        });
      });
  },

  //thêm chi tiết hóa đơn
  addBillDetail(req, res) {
    const tien_giamgia = req.giatri_giamgia;
    const tongtien_gh = req.tongtien_gh;
    const tong_hd = req.tong_hd;
    const idUser = req.userData.id;
    const id_hd = req.idBill;
    cartModel
      .getCartOfUser(idUser)
      .then((cartItems) => {
        //kiểm tra cart có gì hay không
        if (cartItems.length === 0) {
          return res.status(400).json({
            status: 400,
            message: "Nothing in your cart",
          });
        }

        var arrBillDetail = [];
        for (var i = 0; i < cartItems.length; i++) {
          var id_sp = cartItems[i].id_sp;
          var don_gia = cartItems[i].don_gia;
          var soluong = cartItems[i].soluong;
          var tong_gia = cartItems[i].tong_gia;
          var ghi_chu = cartItems[i].ghi_chu;
          var billDetail = {
            id_hd: id_hd,
            id_sp: id_sp,
            don_gia: don_gia,
            soluong: soluong,
            tong_gia: tong_gia,
            ghi_chu: ghi_chu,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          arrBillDetail.push(billDetail);
        }
        return billDetailModel.addBillDetail(arrBillDetail);
      })
      .then((billDetails) => {
        req.billDetails = billDetails;
        return cartModel.deleteAllCartItems(idUser);
      })
      .then((result) => {
        //var data = req.billDetails;
        return res.status(200).json({
          status: 200,
          message: "Create bill successfully",
          data: {
            id_hd: id_hd,
            tongtien_gh: tongtien_gh,
            tien_giamgia: tien_giamgia,
            tong_hd: tong_hd,
          },
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to create detail of bill",
          data: err,
        });
      });
  },

  //xóa toàn bộ chi tiết hóa đơn theo id hóa đơn
  deleteAllBillDetail(req, res, next) {
    const id_hd = req.params.id_hd;
    billDetailModel
      .deleteAllBillDetail(id_hd)
      .then((result) => {
        next();
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete all bill details",
          data: err,
        });
      });
  },
};
