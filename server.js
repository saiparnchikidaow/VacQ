const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect DB here
connectDB();

//Route files
const hospitals = require("./routes/hospitals");
const app = express();
const auth = require("./routes/auth");

//Body parser
app.use(express.json());
app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/auth", auth);
//Cookie parser
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("Server running in", process.env.NODE_ENV, "mode on port", PORT)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
