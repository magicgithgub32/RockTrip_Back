const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    images: { type: [String], required: false, trim: true },
    tours: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        trim: true,
        ref: "Tour",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model(
  "Destination",
  destinationSchema,
  "destinations"
);

module.exports = Destination;
