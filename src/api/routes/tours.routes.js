const express = require("express");
const {
  getAllTours,
  createTour,
  updateTour,
  getTourById,
  deleteTour,
} = require("../controllers/tours.controllers");

const TourRouter = express.Router();

TourRouter.get("/", getAllTours);
TourRouter.get("/:id", getTourById);
TourRouter.post("/", createTour);
TourRouter.put("/:id", updateTour);
TourRouter.delete("/:id", deleteTour);

module.exports = TourRouter;
