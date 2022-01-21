const express = require("express");
const { getBlog, getMyprofile } = require("../Controller/dashboardController");
const router = express.Router();

router.route("/blog").post(getBlog);
router.route("/blog/:id").post(getBlog);
router.route("/myprofile").post(getMyprofile);

module.exports = router;
//get data 200
//creating data 201
//