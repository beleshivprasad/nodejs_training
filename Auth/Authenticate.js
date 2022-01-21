const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const Authenticate = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //getting id from token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error(error);
    }
  }
    if (!token)
    {
        res.status(401)
        throw new Error("Not Authorized , No token")
        }
});
