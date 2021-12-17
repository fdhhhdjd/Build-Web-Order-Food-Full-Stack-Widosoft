const knex = require("../database/knex_db.js");

module.exports = {
  //xem danh sách địa chỉ của khách hàng
  async getListAddress(idUser) {
    let list = await knex("danhsach_diachi").select("*").where({
      id_nd: idUser,
    });
    return list;
  },

  //lấy ra địa chỉ cần lấy
  async getIdAddress(id, idUser) {
    let address = await knex("danhsach_diachi").select("*").where({
      id_nd: idUser,
      id: id,
    });
    return address;
  },

  //thêm địa chỉ
  async addAddress(address) {
    let result = await knex("danhsach_diachi").insert(address);
    return result;
  },

  //sửa địa chỉ
  async updateAddress(address) {
    let result = await knex("danhsach_diachi").update(address).where({
      id: address.id,
    });
    return result;
  },

  //xóa địa chỉ (xóa cứng)
  async deleteAddress(id) {
    let result = await knex("danhsach_diachi").del().where({
      id: id,
    });
    return result;
  },
};
