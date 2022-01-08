const express = require("express");
const router = express.Router();
const passport = require("../middleware/passport.js");
const userController = require("../controllers/userController.js");

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/callback",
  passport.authenticate("google"),
  (req, res, next) => {
    req.hoten = req.user._json.name;
    req.google_id = req.user._json.sub;
    req.email = req.user._json.email;
    next();
  },
  userController.loginByGoogle
);

module.exports = router;
