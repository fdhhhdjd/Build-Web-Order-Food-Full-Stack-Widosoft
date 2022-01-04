const knex = require("../database/knex_db.js");

//kiểm tra phiếu giảm giá có tồn tại trong bảng phieu_giamgia không?
//nếu tồn tại thì lấy ra giá trị của phiếu
module.exports = {
  async checkVoucher(id_voucher) {
    let existVoucher = await knex("phieu_giamgia")
      .select("*")
      .where("id", id_voucher);
    if (existVoucher.length === 0) {
      return "Invalid voucher";
    }
    return existVoucher;
  },
};
