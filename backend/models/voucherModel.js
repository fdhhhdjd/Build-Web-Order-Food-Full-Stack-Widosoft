const knex = require("../database/knex_db.js");

module.exports = {
  //kiểm tra phiếu giảm giá có tồn tại trong bảng phieu_giamgia không?
  //nếu tồn tại thì lấy ra giá trị của phiếu
  async checkVoucher(id_voucher) {
    let existVoucher = await knex("phieu_giamgia")
      .select("*")
      .where("id", id_voucher);
    if (existVoucher.length === 0) {
      return "Invalid voucher";
    }
    return existVoucher;
  },

  //Xem tất cả phiếu giảm giá (admin)
  async getAllVoucher() {
    let result = await knex("phieu_giamgia").select("*");
    return result;
  },

  //Tạo 1 phiếu giảm giá (admin)
  async addVoucher(voucher) {
    let id_voucher = await knex("phieu_giamgia").insert(voucher);
    return id_voucher;
  },

  //Chỉnh sửa phiếu giảm giá (admin)
  async updateVoucher(id_voucher, newVoucher) {
    let updatedVoucher = await knex("phieu_giamgia")
      .update(newVoucher)
      .where("id", id_voucher);
    return updatedVoucher;
  },

  //xóa phiếu giảm giá (admin)
  async deleteVoucher(id_voucher) {
    let deletedVoucher = await knex("phieu_giamgia")
      .del()
      .where("id", id_voucher);
    return deletedVoucher;
  },
};
