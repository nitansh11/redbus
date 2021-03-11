const express = require("express");
const router = express.Router();
const routeController = require("../controllers/route");

// get all routes
router.get("/v1/api/routes", routeController.getAllRoutes);
// get particular route based on departure and arrival location
router.get(
  "/v1/api/routes/:departure/:arrival/:date",
  routeController.getOneRoute
);
module.exports = router;
