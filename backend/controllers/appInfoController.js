const appInfoModel = require("../models/appInfoModel.js");

module.exports = {
  //xem toàn bộ thông tin ứng dụng
  getAllAppInfo(req, res) {
    appInfoModel
      .getAllAppInfo()
      .then((info) => {
        return res.status(200).json({
          status: 200,
          message: "Get all app info successfully",
          data: info,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all app info",
          data: err,
        });
      });
  },

  //xem chi tiết thông tin ứng dụng
  getIdAppInfo(req, res) {
    const slug = req.params.slug;

    appInfoModel
      .getIdAppInfo(slug)
      .then((info) => {
        return res.status(200).json({
          status: 200,
          message: "Get address successfully",
          data: info,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get address",
          data: err,
        });
      });
  },

  //thêm thông tin ứng dụng
  addAppInfo(req, res) {
    const { value } = req.body;
    const info = {
      value: value,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    appInfoModel
      .addAppInfo(info)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Added app info successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to add app info",
          data: err,
        });
      });
  },

  //sửa thông tin ứng dụng
  updateAppInfo(req, res) {
    const slug = req.params.slug;
    const { value } = req.body;
    const info = {
      slug: slug,
      value: value,
      updatedAt: new Date(),
    };

    appInfoModel
      .updateAppInfo(info)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Updated app info successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update app info",
          data: err,
        });
      });
  },

  //xóa thông tin ứng dụng (xóa cứng)
  deleteAppInfo(req, res) {
    const slug = req.params.slug;

    appInfoModel
      .deleteAppInfo(slug)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted app info successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to app info address",
          data: err,
        });
      });
  },
};
