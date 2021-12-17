const knex = require("../database/knex_db.js");

module.exports = {
  //xem toàn bộ đánh giá (admin)
  async getAllRating() {
    let ratings = await knex("danhgia")
      .join("hoadon", "danhgia.id_hd", "hoadon.id")
      .join("nguoidung", "hoadon.id_nd", "nguoidung.id")
      .select(
        "danhgia.id",
        "danhgia.id_hd",
        "nguoidung.hoten",
        "danhgia.diem_danhgia",
        "danhgia.binhluan",
        "danhgia.createdAt",
        "danhgia.updatedAt",
        "danhgia.deleted_fg"
      );
    return ratings;
  },

  //đánh giá hóa đơn sau khi nhận hàng (khách hàng)
  async ratingBill(bill, rating) {
    //kiểm tra bill này khách đã nhận hàng chưa
    let canRating = await knex("hoadon").count("id as a").where({
      id: bill.id_hd,
      id_nd: bill.id_nd,
      tinhtrangHD: "Đã nhận hàng",
    });
    if (canRating[0].a === 1) {
      let result = await knex("danhgia").insert(rating).returning("id");
      return {
        status: 200,
        message: `Rated bill ${bill.id_hd} successfully`,
        data: result[0],
      };
    } else {
      return {
        status: 400,
        message: "This bill can not be rated",
      };
    }
  },

  //xem lịch sử đánh giá của khách hàng (khách hàng)
  async historyRating(id_nd) {
    let history = await knex("danhgia")
      .join("hoadon", "danhgia.id_hd", "hoadon.id")
      .select(
        "danhgia.id",
        "danhgia.id_hd",
        "danhgia.diem_danhgia",
        "danhgia.binhluan",
        "danhgia.createdAt",
        "danhgia.updatedAt",
        "danhgia.deleted_fg"
      )
      .where("hoadon.id_nd", id_nd);
    return history;
  },

  //sửa đánh giá (khách hàng)
  async updateRating(rating) {
    let result = await knex("danhgia").update(rating).where("id", rating.id);
    return result;
  },

  //xóa đánh giá (admin)
  async deleteRating(id) {
    let result = await knex("danhgia").del().where({
      id: id,
    });
    return result;
  },
};
