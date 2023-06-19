const express = require("express");
const { connectDB } = require("./src/utils/connectDB");
const DestinationRouter = require("./src/api/routes/destinations.routes");
const TourRouter = require("./src/api/routes/tours.routes");

require("dotenv").config();

const server = express();

connectDB();

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

server.use("/api/v1/destinations", DestinationRouter);
server.use("/api/v1/tours", TourRouter);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found 👾");
});

server.listen(process.env.PORT, () => {
  console.log(`Server working in http://localhost:${process.env.PORT} 👽`);
});
