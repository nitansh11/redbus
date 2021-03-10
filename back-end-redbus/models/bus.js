const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const busSchema = new Schema({
  operatorName: {
    type: String,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number],
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  routes: {
    type: [Schema.Types.ObjectId],
    ref: "Routes",
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Buses", busSchema);
