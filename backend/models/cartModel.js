const knex = require("../database/knex_db.js");

module.exports = {
  //lấy ra giỏ hàng của khách hàng đang đăng nhập
  async getCartOfUser(idUser) {
    let data = await knex("giohang").select("*").where("id_nd", idUser);
    return data;
  },

  //lấy chi tiết giỏ hàng
  async getCartItem(id, idUser) {
    let data = await knex("giohang").select("*").where({
      id_nd: idUser,
      id: id,
    });
    return data;
  },

  //thêm sản phẩm vào giỏ hàng của khách hàng đăng nhập
  async addCartItem(cartItem) {
    //kiểm tra sản phẩm thêm vào giỏ hàng có bị trùng không
    let result = await knex("giohang").count("id_sp as a").where({
      id_nd: cartItem.id_nd,
      id_sp: cartItem.id_sp,
    });
    if (result[0].a === 0) {
      let idCartItem = await knex("giohang").insert(cartItem);
      return {
        status: 200,
        message: "Product added into your cart successfully",
        data: idCartItem,
      };
    } else {
      return {
        status: 400,
        message: "There has been this product in your cart!",
      };
    }
  },

  //chỉnh sửa số lượng sản phẩm trong giỏ hàng
  async updateProductQuantity(cartItem) {
    let result = await knex("giohang").update(cartItem).where({
      id_nd: cartItem.id_nd,
      id: cartItem.id,
    });
    return result;
  },

  //xóa sản phẩm trong giỏ hàng
  async deleteCartItem(id) {
    let result = await knex("giohang").del().where({
      id: id,
    });
    return result;
  },

  //xóa toàn bộ trong giỏ hàng
  async deleteAllCartItems(idUser) {
    let result = await knex("giohang").del().where({
      id_nd: idUser,
    });
    return result;
  },
};
