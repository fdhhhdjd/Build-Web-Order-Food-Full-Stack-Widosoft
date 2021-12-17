const addressModel = require("../models/addressModel.js");

module.exports = {
  //xem danh sách địa chỉ
  getListAddress(req, res) {
    const idUser = req.userData.id;

    addressModel
      .getListAddress(idUser)
      .then((list) => {
        return res.status(200).json({
          status: 200,
          message: "Get list address successfully",
          data: list,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get list address",
          data: err,
        });
      });
  },

  //lấy ra địa chỉ cần lấy
  getIdAddress(req, res) {
    const idUser = req.userData.id;
    const id = req.params.id;

    addressModel
      .getIdAddress(id, idUser)
      .then((address) => {
        return res.status(200).json({
          status: 200,
          message: "Get address successfully",
          data: address,
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

  //thêm địa chỉ
  addAddress(req, res) {
    const idUser = req.userData.id;
    const { diachi } = req.body;
    const address = {
      id_nd: idUser,
      diachi: diachi,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    addressModel
      .addAddress(address)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Added address successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to add address",
          data: err,
        });
      });
  },

  //sửa địa chỉ
  updateAddress(req, res) {
    const id = req.params.id;
    const { diachi } = req.body;
    const address = {
      id: id,
      diachi: diachi,
      updatedAt: new Date(),
    };

    addressModel
      .updateAddress(address)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Updated address successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update address",
          data: err,
        });
      });
  },

  //xóa địa chỉ (xóa cứng)
  deleteAddress(req, res) {
    const id = req.params.id;

    addressModel
      .deleteAddress(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted address successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete address",
          data: err,
        });
      });
  },
};
