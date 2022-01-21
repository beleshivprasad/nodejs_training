const express = require("express");
const {
  adminLogin,
  getUser,
  updateUser,
  deleteUser,
} = require("../Controller/adminController");
const router = express.Router();

router.route("/login").post(adminLogin);
router.route("/getuser").post(getUser);
router.route("/getuser/:id").post(getUser); //path parameter
router.route("/updateuser").put(updateUser);
router.route("/updateuser/:id").put(updateUser);
router.route("/deleteuser").delete(deleteUser);
router.route("/deleteuser/:id").delete(deleteUser);

module.exports = router;
