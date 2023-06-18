const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: Number, required: true, trim: true },
    itinerary: { type: [String], required: false, trim: true },
    stars: { type: Number, required: false, trim: false },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchemaSchema, "tours");

module.exports = Tour;
