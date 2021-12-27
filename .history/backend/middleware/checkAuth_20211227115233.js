const jwt = require("jsonwebtoken");

module.exports = {
  checkAuthAdmin(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (decoded.admin === 1) {
        //thông tin token
        req.userData = decoded;
        next();
      } else {
        return res.status(401).json({
          status: 401,
          message: "Only admin account can access!",
        });
      }
    } catch (err) {
      return res.status(401).json({
        status: 401,
        message: "Invalid Authentication!",
      });
    }
  },

  checkAuthCustomer(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (decoded.admin === 0) {
        req.userData = decoded;
        next();
      } else {
        return res.status(401).json({
          status: 401,
          message: "Only customer account can access!",
        });
      }
    } catch (err) {
      return res.status(401).json({
        status: 401,
        message: "Invalid Authentication!",
      });
    }
  },
};
