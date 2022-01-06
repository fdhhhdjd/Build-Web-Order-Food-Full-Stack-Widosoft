const billModel = require("../models/billModel.js");
const voucherModel = require("../models/voucherModel.js");

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

  // //tạo hóa đơn (khách hàng)
  // createBill(req, res, next) {
  //   const idUser = req.userData.id;
  //   const tong_sl = req.tong_sl;
  //   const tong_hd = req.tong_hd;
  //   const { id_diachi, id_thanhtoan } = req.body;
  //   //nếu hình thức thanh toán là COD thì tình trạng hóa đơn là chưa thanh toán
  //   let tinhtrangHD = id_thanhtoan == 4 ? "Chưa thanh toán" : "Đã thanh toán";
  //   const bill = {
  //     id_nd: idUser,
  //     id_diachi: id_diachi,
  //     ngaydathang: new Date(),
  //     tong_sl: tong_sl,
  //     tong_hd: tong_hd,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     tinhtrangHD: tinhtrangHD,
  //     id_thanhtoan: id_thanhtoan,
  //   };
  //   billModel
  //     .createBill(bill)
  //     .then((id_bill) => {
  //       req.idBill = id_bill[0];
  //       next();
  //     })
  //     .catch((err) => {
  //       return res.status(400).json({
  //         status: 400,
  //         message: "Failed to create bill",
  //         data: err,
  //       });
  //     });
  // },

  //tạo hóa đơn (khách hàng)
  createBill(req, res, next) {
    const idUser = req.userData.id;
    const tong_sl = req.tong_sl;
    const tongtien_gh = req.tongtien_gh;
    const { id_diachi, id_thanhtoan, id_voucher } = req.body;
    //nếu người dùng không nhập mã voucher thì sẽ mặc định không giảm giá
    let ma_giamgia = id_voucher === undefined ? "Coupon0" : id_voucher;
    //nếu hình thức thanh toán là COD thì tình trạng hóa đơn là chưa thanh toán
    let tinhtrangHD = id_thanhtoan == 4 ? "Chưa thanh toán" : "Đã thanh toán";

    voucherModel
      .checkVoucher(ma_giamgia)
      .then((existVoucher) => {
        if (existVoucher === "Invalid voucher") {
          return res.status(400).json({
            status: 400,
            message: "Invalid voucher",
          });
        } else {
          const giatri_giamgia =
            (tongtien_gh * Number(existVoucher[0].giatri)) / 100;
          req.giatri_giamgia = giatri_giamgia;
          const tong_hd = tongtien_gh - giatri_giamgia;
          req.tong_hd = tong_hd;
          const bill = {
            id_nd: idUser,
            id_diachi: id_diachi,
            ngaydathang: new Date(),
            tong_sl: tong_sl,
            tongtien_gh: tongtien_gh,
            id_voucher: ma_giamgia,
            tong_hd: tong_hd,
            createdAt: new Date(),
            updatedAt: new Date(),
            tinhtrangHD: tinhtrangHD,
            id_thanhtoan: id_thanhtoan,
          };
          return billModel.createBill(bill);
        }
      })
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

  //sắp xếp tổng giao dịch của người dùng trên 1 triệu
  SortTotalTransactionsOfUser(req, res) {
    billModel
      .SortTotalTransactionsOfUser()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Sort total transaction of user successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to sort total transaction of user ",
          data: err,
        });
      });
  },

  //tổng doanh thu
  getTotalRevenue(req, res) {
    billModel
      .getTotalRevenue()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get total revenue successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get total revenue ",
          data: err,
        });
      });
  },

  //tổng sản phẩm bán được
  getTotalProductSold(req, res) {
    billModel
      .getTotalProductSold()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get total product sold successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get total product sold ",
          data: err,
        });
      });
  },

  //tổng hóa đơn khách hàng chưa nhận được sản phẩm
  getTotalBillCustomerNotReceived(req, res) {
    billModel
      .getTotalBillCustomerNotReceived()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get total bill customer have not received successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get total bill customer have not received ",
          data: err,
        });
      });
  },

  //tổng hóa đơn khách hàng hủy
  getTotalBillCancelled(req, res) {
    billModel
      .getTotalBillCancelled()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get total bill customer cancelled",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get total bill customer cancelled",
          data: err,
        });
      });
  },

  //lấy ra doanh thu theo từng tháng
  getRevenueByMonth(req, res) {
    billModel
      .getRevenueByMonth()
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get revenue by month successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get revenue by month",
          data: err,
        });
      });
  },
};
