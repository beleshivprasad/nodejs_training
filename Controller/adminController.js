const asyncHandler = require("express-async-handler");

const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
  }
});

const getUser = asyncHandler(async (req, res) => {
  if (req.params.id) {
    res.status(200).json(Users[req.params.id - 1]);
  }
  res.status(200).json(Users);
});

const updateUser = asyncHandler(async (req, res) => {});
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { adminLogin, getUser, updateUser, deleteUser };
