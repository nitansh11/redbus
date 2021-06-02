const Booking = require("../models/boooking");
exports.addBooking = async (req, res) => {
  // code here
  const booking = await Booking.create(req.body);
  //console.log(booking);
  res.send(booking);
};
exports.getBooking = async (req, res) => {
  // code here
  let { id } = req.params;
  const bookings = await Booking.find().lean().exec();
  let filteredBookings = bookings.filter(
    (booking) => booking.customerId.toString() == id
  );
  res.send(filteredBookings);
};
