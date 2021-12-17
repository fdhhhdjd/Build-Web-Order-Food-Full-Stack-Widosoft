const knex = require("../database/knex_db");

module.exports = {
  //lấy toàn bộ danh mục
  async getAllCategories() {
    let categories = await knex("danhmuc").select("*");
    return categories;
  },

  //thêm danh mục
  async insertCategory(category) {
    let result = await knex("danhmuc").insert(category).returning("id");
    //returning(id) => tra ve id da tao
    return result;
  },

  //chỉnh sửa tên danh mục
  async updateCategory(category, id) {
    let result = await knex("danhmuc").update(category).where("id", id);
    return result;
  },

  //xóa danh mục
  async deleteCategory(category, id) {
    let result = await knex("danhmuc").update(category).where("id", id);
    return result;
  },

  //lấy ra sản phẩm theo danh mục
  async getProductWithCategoryId(id) {
    let products = await knex("danhmuc")
      .join("sanpham", "danhmuc.id", "=", "sanpham.id_dm")
      .select(
        "sanpham.id",
        "sanpham.tensp",
        "sanpham.chitiet",
        "sanpham.size",
        "sanpham.gia",
        "sanpham.public_id",
        "sanpham.url",
        "sanpham.id_dm"
      )
      .where("sanpham.id_dm", id);

    return products;
  },
};
