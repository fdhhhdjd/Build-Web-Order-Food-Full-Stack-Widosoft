const knex = require("../database/knex_db.js");

module.exports = {
  //xem hóa đơn của tất cả khách hàng (admin)
  async getAllBill() {
    let bills = await knex("hoadon")
      .join("nguoidung", "nguoidung.id", "hoadon.id_nd")
      .join("hinhthucthanhtoan", "hinhthucthanhtoan.id", "hoadon.id_thanhtoan")
      .join("danhsach_diachi", "danhsach_diachi.id", "hoadon.id_diachi")
      .select(
        "hoadon.id",
        "nguoidung.hoten",
        "hinhthucthanhtoan.ten_hinhthuc",
        "danhsach_diachi.diachi",
        "hoadon.ngaydathang",
        "hoadon.tong_sl",
        "hoadon.tong_hd",
        "hoadon.tinhtrangHD",
        "hoadon.createdAt",
        "hoadon.updatedAt",
        "hoadon.deleted_fg"
      );
    return bills;
  },

  //xem toàn bộ hóa đơn của khách hàng đang đăng nhập
  async history(idUser) {
    let bills = await knex("hoadon").select("*").where({
      id_nd: idUser,
    });
    return bills;
  },

  //tạo hóa đơn (khách hàng)
  async createBill(bill) {
    let id_bill = await knex("hoadon").insert(bill).returning("id");
    console.log(id_bill);
    return id_bill;
  },

  //chỉnh sửa tình trạng hóa đơn (admin)
  async updateBillStatus(bill) {
    let result = await knex("hoadon").update(bill).where({
      id: bill.id,
    });
    return result;
  },

  //hủy hóa đơn (khách hàng)
  //chỉ hủy khi tình trạng là chưa thanh toán
  async cancelBill(id, idUser) {
    //kiểm tra hóa đơn có thể hủy được không
    let canCancel = await knex("hoadon").count("id as a").where({
      id: id,
      id_nd: idUser,
      tinhtrangHD: "Chưa thanh toán",
    });
    if (canCancel[0].a === 1) {
      await knex("hoadon")
        .update({
          tinhtrangHD: "Hủy",
          updatedAt: new Date(),
          thisKeyIsSkipped: undefined,
        })
        .where({
          id: id,
        });
      return {
        status: 200,
        message: "cancelled bill successfully",
        data: id,
      };
    } else {
      return {
        status: 400,
        message: "you can not cancel bill",
        data: id,
      };
    }
  },

  async deleteBill(id_hd) {
    let result = await knex("hoadon").del().where({
      id: id_hd,
    });
    return result;
  },
};
