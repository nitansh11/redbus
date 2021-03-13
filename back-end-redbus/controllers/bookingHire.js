const BookingHire = require("../models/bookingHire");
exports.addBookingHire = async (req, res) => {
  // code here
  const bookingHire = await BookingHire.create(req.body);
  res.send(bookingHire);
};
exports.getBookingHire = async (req, res) => {
  // code here
  let { email } = req.params;
  const bookings = await BookingHire.find().lean().exec();
  let filteredBookings = bookings.filter(
    (booking) => booking.email.toString() == email
  );
  res.send(filteredBookings);
};
