const express = require("express");
const { connectDB } = require("./src/utils/connectDB");

require("dotenv").config();

const server = express();

connectDB();

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found 👾");
});

server.listen(process.env.PORT, () => {
  console.log(`Server working in http://localhost:${process.env.PORT} 👽`);
});
