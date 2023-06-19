const Tour = require("../models/tours.model");

const getAllTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();
    return res.status(200).json(tours);
  } catch (error) {
    return next("Tours were not found 👺", error);
  }
};

const createTour = async (req, res, next) => {
  try {
    const newTour = new Tour(req.body);

    const createdTour = await newTour.save();
    return res.status(201).json(createdTour);
  } catch (error) {
    return next("Error while creating Tour 👺", error);
  }
};

const getTourById = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);
    return res.status(200).json(tour);
  } catch (error) {
    return next("Tour not found 👺", error);
  }
};

const updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newTour = new Tour(req.body);

    newTour._id = id;

    const updatedTour = await Tour.findByIdAndUpdate(id, newTour, {
      new: true,
    });
    return res.status(200).json(updatedTour);
  } catch (error) {
    return next("Error updating Tour 👺", error);
  }
};

const deleteTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTour = await Tour.findByIdAndDelete(id);

    return res.status(200).json("Tour deleted successfully");
  } catch (error) {
    return next("Tour not found 👺", error);
  }
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};
