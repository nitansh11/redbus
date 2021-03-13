const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingHireSchema = new Schema({
  pickUp: String,
  drop: String,
  totalPassengers: String,
  fare: Number,
  email: String,
  pickUpDate: String,
  dropDate: String,
});

module.exports = mongoose.model("BookingsHire", bookingHireSchema);
