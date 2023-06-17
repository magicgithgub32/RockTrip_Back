const Destination = require("../models/destinations.model");

const getAllDestinations = async (req, res, next) => {
  try {
    const destinations = await Destination.find();
    return res.status(200).json(destinations);
  } catch (error) {
    return next("Destinations were not found 👺", error);
  }
};

const createDestination = async (req, res, next) => {
  try {
    const newDestination = new Destination(req.body);

    const createdDestination = await newDestination.save();
    return res.status(201).json(createdDestination);
  } catch (error) {
    return next("Error while creating Destination 👺", error);
  }
};

const getDestinationById = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return res.status(200).json(destination);
  } catch (error) {
    return next("Destination not found 👺", error);
  }
};

const updateDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newDestination = new Destination(req.body);

    newDestination._id = id;

    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      newDestination,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedDestination);
  } catch (error) {
    return next("Error updating Destination 👺", error);
  }
};

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDestination = await Destination.findByIdAndDelete(id);

    return res.status(200).json("Destination deleted successfully");
  } catch (error) {
    return next("Destination not found 👺", error);
  }
};

module.exports = {
  getAllDestinations,
  createDestination,
  getDestinationById,
  updateDestination,
  deleteDestination,
};
