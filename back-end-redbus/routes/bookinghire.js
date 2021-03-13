const express = require("express");
const router = express.Router();
const bookingHireController = require("../controllers/bookingHire");

// Use like this

router.post("/v1/api/bookingHire", bookingHireController.addBookingHire);
router.get("/v1/api/bookingHire/:email", bookingHireController.getBookingHire);
module.exports = router;
