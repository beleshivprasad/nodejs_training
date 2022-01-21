const asyncHandler = require("express-async-handler");

const User = require("../Models/userModel");
const generateToken = require("../Auth/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { fname, lname, email, password, cnfpassword } = req.body;


  

  if (!fname || !lname || !email || !password || !cnfpassword) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else if (password !== cnfpassword) {
    res.status(400);
    throw new Error("Password Don't Match");
  } else {
    const userExist = await User.findOne({ email }).then((userExist) => {
      if (userExist) {
        res.status(400);
        throw new Error("User Already Exists with this Email");
      }
      const user = User.create({
        fname,
        lname,
        email,
        password,
      })
        .then((user) => {
          if (user) {
            res.status(200).json({
              id: user.id,
              fname: user.fname,
              lname: user.lname,
              email: user.email,
              isAdmin: user.isAdmin,
              accessToken: generateToken(user.id),
            });
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter Username and Password");
  } else {
    const user = await User.findOne({ email }).then((user) => {
      if (!user) {
        res.status(400);
        throw new Error("User Dont Exists with this Email");
      }
      const isMatch = User.matchPassword
      res.status(200).json({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
        accessToken: generateToken(user.id),
      });
    });
  }
});

module.exports = { registerUser, loginUser };
