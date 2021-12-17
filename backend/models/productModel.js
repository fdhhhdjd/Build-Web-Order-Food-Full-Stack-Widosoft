const knex = require("../database/knex_db.js");

module.exports = {
  //lấy ra toàn bộ sản phẩm
  async getAllProduct() {
    let products = await knex("sanpham")
      .join("danhmuc", "danhmuc.id", "=", "sanpham.id_dm")
      .select(
        "sanpham.id",
        "sanpham.tensp",
        "sanpham.chitiet",
        "sanpham .size",
        "sanpham.gia",
        "sanpham.public_id",
        "sanpham.url",
        "sanpham.id_dm",
        "sanpham.createdAt",
        "sanpham.updatedAt",
        "sanpham.deleted_fg"
      );
    return products;
  },

  //lấy chi tiết từng sản phẩm
  async getProductId(id) {
    let product = await knex("sanpham").select("*").where("id", id);
    return product;
  },

  //thêm sản phẩm
  async insertProduct(product) {
    let result = await knex("sanpham").insert(product).returning("id");
    return result;
  },

  //cập nhập sản phẩm
  async updateProduct(product, id) {
    let result = await knex("sanpham").update(product).where("id", id);
    return result;
  },

  //xóa sản phẩm
  async deleteProduct(product, id) {
    let result = await knex("sanpham").update(product).where("id", id);
    return result;
  },
};
