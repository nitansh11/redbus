const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking");

// Use like this

router.post("/v1/api/booking", bookingController.addBooking);
module.exports = router;
