const asyncHandler = require("express-async-handler");

const User = require("../Models/userModel");
const Blog = require("../Models/blogModel");

const getBlog = asyncHandler(async (req, res) => {});

const getMyprofile = asyncHandler(async (req, res) => {});

module.exports = { getBlog, getMyprofile };
