const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const conn = mongoose
      .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
      })
      .then((conn) => {
        if (conn) {
          console.log(`MongoDB Connect : ${conn.connection.host}`);
        }
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { ConnectDB };
