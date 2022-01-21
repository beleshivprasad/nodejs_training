console.clear();
const express = require("express");
const dotenv = require("dotenv");

//importing middlewares
const { ErrorHandler } = require("./Middleware/ErrorHandler");
const { UrlNotFound } = require("./Middleware/UrlNotFound");

//importing enviornment variables
dotenv.config({ path: __dirname + "/Config/.env" });

//import MongoDB connect function
const { ConnectDB } = require("./Config/ConnectDB");
ConnectDB();

//creating express app
const app = express();

//importing routes
const userRoute = require("./Routes/userRouter");
const adminRoute = require("./Routes/adminRouter");

//Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/user", userRoute);
app.use("/admin", adminRoute);

//ErrorMiddleware
app.use(UrlNotFound);
app.use(ErrorHandler);

// const Users = require("./Config/Users");
// console.log(Users[2].name);
// Users[2].name = "shiv";
// console.log(Users[2].name);

app.listen(process.env.PORT, () => {
  console.log(`Server Started On PORT : ${process.env.PORT}`);
});
