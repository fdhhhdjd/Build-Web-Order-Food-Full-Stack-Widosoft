const productModel = require("../models/productModel.js");

module.exports = {
  //lấy toàn bộ sản phẩm
  getAllProducts(req, res) {
    productModel
      .getAllProduct()
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: "Get all products successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to get all products",
          data: error,
        });
      });
  },

  //lấy chi tiết sản phẩm
  getProductId(req, res) {
    const id = req.params.id;
    productModel
      .getProductId(id)
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: `Get product with id: ${id} successfully`,
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: `Failed to get product with id: ${id}`,
          data: error,
        });
      });
  },

  //thêm sản phẩm
  insertProduct(req, res) {
    const { tensp, chitiet, size, gia, public_id, url, id_dm } = req.body;
    if (!(public_id && url)) {
      return res.status(400).json({ message: "No image upload" });
    }
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      public_id: public_id,
      url: url,
      createdAt: new Date(),
      updatedAt: new Date(),
      id_dm: id_dm,
    };
    productModel
      .insertProduct(product)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Added product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add product",
          data: error,
        });
      });
  },

  //chỉnh sửa sản phẩm
  updateProduct(req, res) {
    const id = req.params.id;
    const { tensp, chitiet, size, gia, public_id, url, id_dm } = req.body;
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      public_id: public_id,
      url: url,
      updatedAt: new Date(),
      id_dm: id_dm,
    };

    productModel
      .updateProduct(product, id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Updated product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to update product",
          data: error,
        });
      });
  },

  //xóa sản phẩm (xóa mềm)
  deleteProduct(req, res) {
    const id = req.params.id;
    const product = {
      updatedAt: new Date(),
      deleted_fg: 1,
    };
    productModel
      .deleteProduct(product, id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Deleted product successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to delete category",
          data: err,
        });
      });
  },
};
