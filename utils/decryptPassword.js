const bcrypt = require("bcryptjs");

const decryptPassword = async (password1, password2) => {
  return await bcrypt.compare(password1, password2);
};

module.exports = decryptPassword;
