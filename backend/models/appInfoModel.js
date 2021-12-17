const knex = require("../database/knex_db.js");

module.exports = {
  //xem toàn bộ thông tin ứng dụng
  async getAllAppInfo() {
    let info = await knex("app_info").select("*");
    return info;
  },

  //xem chi tiết thông tin ứng dựng
  async getIdAppInfo(slug) {
    let info = await knex("app_info").select("*").where({
      slug: slug,
    });
    return info;
  },

  //thêm thông tin ứng dụng
  async addAppInfo(info) {
    let result = await knex("app_info").insert(info);
    return result;
  },

  //sửa thông tin ứng dụng
  async updateAppInfo(info) {
    let result = await knex("app_info").update(info).where({
      slug: info.slug,
    });
    return result;
  },

  //xóa thông tin ứng dụng (xóa cứng)
  async deleteAppInfo(slug) {
    let result = await knex("app_info").del().where({
      slug: slug,
    });
    return result;
  },
};
