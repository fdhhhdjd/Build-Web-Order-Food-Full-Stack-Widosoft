const knex = require("../database/knex_db.js");

module.exports = {
  //xem tất cả hình thức thanh toán
  async getAllPayments() {
    let list = await knex("hinhthucthanhtoan").select("*");
    return list;
  },

  //xem chi tiết hình thức thanh toán
  async getPaymentId(id) {
    let payment = await knex("hinhthucthanhtoan").select("*").where("id", id);
    return payment;
  },

  //thêm hình thức thanh toán
  async addPayment(payment) {
    let result = await knex("hinhthucthanhtoan")
      .insert(payment)
      .returning("id");
    return result;
  },

  //chỉnh sửa hình thức thanh toán
  async updatePayment(payment, id) {
    let result = await knex("hinhthucthanhtoan")
      .update(payment)
      .where("id", id);
    return result;
  },

  //xóa hình thức thanh toán (xóa cứng)
  async deletePayment(id) {
    let result = await knex("hinhthucthanhtoan").del().where("id", id);
    return result;
  },
};
