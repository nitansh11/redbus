const Booking = require("../models/boooking");
exports.addBooking = async (req, res) => {
  // code here
  const booking = await Booking.create(req.body);
  console.log(booking);
  res.send(booking);
};
