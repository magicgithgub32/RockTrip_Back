const express = require("express");
const {
  getAllDestinations,
  createDestination,
  updateDestination,
  getDestinationById,
  deleteDestination,
} = require("../controllers/destinations.controllers");

const DestinationRouter = express.Router();

DestinationRouter.get("/", getAllDestinations);
DestinationRouter.get("/:id", getDestinationById);
DestinationRouter.post("/", createDestination);
DestinationRouter.put("/:id", updateDestination);
DestinationRouter.delete("/:id", deleteDestination);

module.exports = DestinationRouter;
