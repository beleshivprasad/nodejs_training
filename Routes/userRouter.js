const express = require("express");
const Authenticate = require("../Auth/Auth");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controller/userController");
const router = express.Router();

const {
  registerValidation,
  loginValidation,
} = require("../Middleware/validation/userValidation");

router.route("/register").post(registerValidation, registerUser);
router.route("/getuser").get(Authenticate, getUser);
router.route("/login").post(loginValidation, loginUser);
router.route("/logout").post((req, res) => {
  // console.log(req.body, req.headers);
  res.json({ message: "logged out" });
});

module.exports = router;
