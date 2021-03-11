const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/boooking");
exports.getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};

// get route,buses and available seats based on "Customer Search for:  "Departure,Arrival,Date"
exports.getOneRoute = async (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;

  // get the relevant route
  let routes = await Route.find().lean().exec();
  let route = routes.find((route) => {
    return (
      route.departureLocation.name.toLowerCase() == departure.toLowerCase() &&
      route.arrivalLocation.name.toLowerCase() == arrival.toLowerCase()
    );
  });

  // get all buses for that route
  let buses = await Bus.find();
  let matchedBuses = buses.filter((bus) => {
    // console.log(bus.routes, route._id, typeof route._id);
    return bus.routes.toString() === route._id.toString();
  });

  // get the seats booked for each matched buses
  const bookings = await Booking.find().lean().exec();
  const busIdWithSeatsObj = {};
  for (let i = 0; i < matchedBuses.length; i++) {
    let currentBusSeats = [];
    const busBookings = bookings.filter((booking) => {
      return (
        booking.departureDetails.date === date &&
        booking.busId.toString() === matchedBuses[i]._id.toString()
      );
    });
    busBookings.forEach((booking) => {
      currentBusSeats = [...currentBusSeats, ...booking.seats];
    });
    busIdWithSeatsObj[matchedBuses[i]._id.toString()] = currentBusSeats;
  }
  res.send({ route: route, matchedBuses: matchedBuses, busIdWithSeatsObj });
};
