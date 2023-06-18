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

const getRouteById = async (req, res, next) => {
  try {
    const route = await Route.findById(req.params.id);
    return res.status(200).json(route);
  } catch (error) {
    return next("Route not found 👺", error);
  }
};

const updateRoute = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newRoute = new Route(req.body);

    newRoute._id = id;

    const updatedRoute = await Route.findByIdAndUpdate(id, newRoute, {
      new: true,
    });
    return res.status(200).json(updatedRoute);
  } catch (error) {
    return next("Error updating Route 👺", error);
  }
};

const deleteRoute = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRoute = await Route.findByIdAndDelete(id);

    return res.status(200).json("Route deleted successfully");
  } catch (error) {
    return next("Route not found 👺", error);
  }
};

module.exports = {
  getAllTours,
  createTour,
  getRouteById,
  updateRoute,
  deleteRoute,
};
