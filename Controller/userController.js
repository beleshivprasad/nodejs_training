const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { logger } = require("../Middleware/Logger/logger");
const { register, login, userInfo } = require("../Services/userServices");

const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (errors.errors.length) {
    logger.error(`${await JSON.stringify(errors.errors)}`);
    res.status(400).json(errors);
  } else {
    register(req, res);
  }
});
const getUser = asyncHandler(async (req, res) => {
  try {
    // console.log("getuser", req.headers);
    const user = await userInfo(req);
    const userData = {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
    };
    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(400).json({ error });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  // console.log("login", req.headers);
  const errors = validationResult(req);
  if (errors.errors.length) {
    logger.error(`${await JSON.stringify(errors.errors)}`);
    res.status(400).json(errors);
  } else {
    login(req, res);
  }
});

module.exports = { registerUser, loginUser, getUser };
