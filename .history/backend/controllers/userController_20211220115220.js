const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
module.exports = {
  //đăng ký tài khoản với role admin
  registerAsAdmin(req, res) {
    const { email, username, hoten, password, ngaysinh, gioitinh, dienthoai } =
      req.body;
    if (password.length < 6)
      return res.status(400).json({
        status: 400,
        message: "Password is at least 6 characters long.",
      });
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = {
      email: email,
      username: username,
      hoten: hoten,
      password: hashPassword,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      admin: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    userModel
      .register(email, user)
      .then((msg) => {
        return res.status(200).json(msg);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: err,
        });
      });
  },

  //đăng ký tài khoản với role customer
  registerAsCustomer(req, res) {
    const { email, username, hoten, password, ngaysinh, gioitinh, dienthoai } =
      req.body;
    if (password.length < 6)
      return res.status(400).json({
        status: 400,
        message: "Password is at least 6 characters long.",
      });
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = {
      email: email,
      username: username,
      hoten: hoten,
      password: hashPassword,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      admin: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    userModel
      .register(email, user)
      .then((msg) => {
        return res.status(200).json(msg);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: err,
        });
      });
  },

  //đăng nhập tài khoản admin
  loginAsAdmin(req, res) {
    const { email, password } = req.body;
    userModel
      .loginAdmin(email, password)
      .then((data) => {
        res.cookie("refreshToken", data.refreshToken, {
          httpOnly: true,
          // path: "/user/refresh_token",
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to login",
          data: err,
        });
      });
  },

  //đăng nhập tài khoản customer
  loginAsCustomer(req, res) {
    const { email, password } = req.body;
    userModel
      .loginCustomer(email, password)
      .then((data) => {
        res.cookie("refreshToken", data.refreshToken, {
          httpOnly: true,
          // path: "/user/refresh_token",
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to login",
          data: err,
        });
      });
  },

  //refresh token
  refreshToken(req, res) {
    //res.json(req.cookies.refreshToken)
    const token = req.cookies.refreshToken;
    userModel
      .refreshToken(token)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to refresh token",
        });
      });
  },

  //logout
  logout(req, res) {
    // const token = browser.cookies.get({
    //   url: "/user/refresh_token",
    //   name: "refreshToken",
    // });
    // return res.json(token);

    const token = req.cookies.refreshToken;

    userModel
      .logout(token)
      .then((result) => {
        res.clearCookie("refreshToken");
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Logout failed",
        });
      });
  },

  //Lấy thông tin tài khoản đang đăng nhập
  getProfile(req, res) {
    const userId = req.userData.id;
    userModel
      .getProfile(userId)
      .then((profile) => {
        return res.status(200).json({
          status: 200,
          message: "Get profile successfully",
          data: profile,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get profile",
          data: error,
        });
      });
  },

  //lấy toàn bộ người dùng với role admin
  getAllUser(req, res) {
    userModel
      .getAllUsers()
      .then((users) => {
        return res.status(200).json({
          status: 200,
          message: "Get all users successfully",
          data: users,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all users",
          data: err,
        });
      });
  },

  //chỉnh sửa toàn bộ tài khoản (admin)
  updateAllUser(req, res) {
    const { username, hoten, ngaysinh, gioitinh, dienthoai, admin } = req.body;

    const id = req.params.id;
    const user = {
      username: username,
      hoten: hoten,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      admin: admin,
      updatedAt: new Date(),
    };

    userModel
      .updateAllUser(id, user)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update user",
          data: err,
        });
      });
  },

  //Thay đổi mật khẩu tài khoản đang đăng nhập
  changePassword(req, res) {
    const id = req.userData.id;

    const { password, confirmPassword } = req.body;

    if (password.length < 6)
      return res.status(400).json({
        status: 400,
        message: "Password is at least 6 characters long.",
      });

    if (confirmPassword !== password) {
      return res.status(400).json({
        status: 400,
        message: "Password and confirm password does not match!",
      });
    }

    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = {
      password: hashPassword,
      updatedAt: new Date(),
    };

    userModel
      .changePassword(id, user)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to change password",
        });
      });
  },

  //Chỉnh sửa thông tin tài khoản đang đăng nhập (customer)
  updateProfile(req, res) {
    const userId = req.userData.id;

    const { hoten, username, ngaysinh, gioitinh, dienthoai } = req.body;

    const user = {
      hoten: hoten,
      username: username,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      updatedAt: new Date(),
    };

    userModel
      .updateProfile(userId, user)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update profile",
        });
      });
  },

  //xóa tài khoản (admin)
  deleteUser(req, res) {
    const id = req.params.id;

    userModel
      .deleteUser(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: `Deleted user with id: ${id} successfully`,
          data: result,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: 400,
          message: `Failed to delete user with id: ${id}`,
          data: error,
        });
      });
  },
};
