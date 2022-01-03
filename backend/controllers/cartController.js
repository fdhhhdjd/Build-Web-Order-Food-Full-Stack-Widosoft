const cartModel = require("../models/cartModel.js");
const productModel = require("../models/productModel");

module.exports = {
  //lấy ra giỏ hàng của khách hàng đang đăng nhập
  getCartOfUser(req, res) {
    const idUser = req.userData.id;
    cartModel
      .getCartOfUser(idUser)
      .then((cart) => {
        if (cart.length === 0) {
          return res.status(200).json({
            status: 200,
            message: "Your cart is empty",
            data: cart,
          });
        } else {
          return res.status(200).json({
            status: 200,
            message: "Get cart successfully",
            data: cart,
          });
        }
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get cart",
          data: err,
        });
      });
  },

  //lấy chi tiết giỏ hàng
  getCartItem(req, res) {
    const id = req.params.id;
    const idUser = req.userData.id;
    cartModel
      .getCartItem(id, idUser)
      .then((cartItem) => {
        return res.status(200).json({
          status: 200,
          message: "Get cart item successfully",
          data: cartItem,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get cart item",
          data: err,
        });
      });
  },

  //thêm sản phẩm vào giỏ hàng
  addCartItem(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    const id_sp = req.params.id_sp;
    const { ghi_chu } = req.body;

    productModel
      .getProductId(id_sp)
      .then((product) => {
        const don_gia = product[0].gia;
        const cartItem = {
          id_nd: idUser,
          id_sp: id_sp,
          don_gia: don_gia,
          soluong: 1,
          tong_gia: don_gia,
          ghi_chu: ghi_chu,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return cartModel.addCartItem(cartItem);
      })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          message: "Failed to add product into cart",
          data: err,
        });
      });
  },

  //chỉnh sửa số lượng sản phẩm
  updateProductQuantity(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    const id = req.params.id;

    cartModel
      .getCartItem(id, idUser)
      .then((cartItem) => {
        const don_gia = cartItem[0].don_gia;
        const { soluong } = req.body;
        const item = {
          id_nd: idUser,
          id: id,
          soluong: soluong,
          tong_gia: don_gia * soluong,
          updatedAt: new Date(),
        };
        return cartModel.updateProductQuantity(item);
      })
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Updated quantity's product successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update quantity's product",
          data: err,
        });
      });
  },

  //xóa sản phẩm trong giỏ hàng
  async deleteCartItem(req, res) {
    const id = req.params.id;
    cartModel
      .deleteCartItem(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: `Deleted cart item with id: ${id} successfully`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete cart item",
          data: err,
        });
      });
  },

  //xóa toàn bộ trong giỏ hàng
  async deleteAllCartItems(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    cartModel
      .deleteAllCartItems(idUser)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted all cart items successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete all cart items",
          data: err,
        });
      });
  },

  //lấy tổng số lượng sp và tổng tiền của giỏ hàng
  async getAllQuantityAndPriceOfCart(req, res) {
    const idUser = req.userData.id;
    cartModel
      .getAllQuantityAndPriceOfCart(idUser)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Get all quantity and price of cart successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all quantity and price of cart successfully",
          data: err,
        });
      });
  },

  //lấy tổng số lượng sp và tổng tiền của giỏ hàng
  async getAllQuantityAndPriceOfCartForCreateBill(req, res, next) {
    const idUser = req.userData.id;
    cartModel
      .getAllQuantityAndPriceOfCart(idUser)
      .then((data) => {
        req.tong_sl = data[0].tong_sl;
        req.tongtien_gh = data[0].tongtien_gh;
        next();
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all quantity and price of cart successfully",
          data: err,
        });
      });
  },
};
