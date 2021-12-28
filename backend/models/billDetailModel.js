const knex = require("../database/knex_db.js");

module.exports = {
  //xem toàn bộ chi tiết hóa đơn (admin)
  async getAllBillDetail() {
    let result = await knex("chitiethoadon")
      .join("sanpham", "sanpham.id", "chitiethoadon.id_sp")
      .select(
        "chitiethoadon.id",
        "chitiethoadon.id_hd",
        "sanpham.tensp",
        "chitiethoadon.don_gia",
        "chitiethoadon.soluong",
        "chitiethoadon.tong_gia",
        "chitiethoadon.createdAt",
        "chitiethoadon.updatedAt",
        "chitiethoadon.deleted_fg"
      );
    return result;
  },

  //xem thông tin chi tiết theo hóa đơn
  async getBillDetail(id_hd) {
    let detailBills = await knex("chitiethoadon").select("*").where({
      id_hd: id_hd,
    });
    return detailBills;
  },

  //xem từng chi tiết hóa đơn
  async getEachBillDetail(id) {
    let detailBill = await knex("chitiethoadon").select("*").where({
      id: id,
    });
    return detailBill;
  },

  //thêm chi tiết hóa đơn
  async addBillDetail(billDetails) {
    let result = await knex("chitiethoadon").insert(billDetails);
    return result;
  },

  //xóa toàn bộ chi tiết hóa đơn theo id hóa đơn
  async deleteAllBillDetail(id_hd) {
    let result = await knex("chitiethoadon").del().where({
      id_hd: id_hd,
    });
    return result;
  },
};
