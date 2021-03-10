const express = require("express");
const router = express.Router();
const routeController = require("../controllers/route");

router.get("/v1/api/routes", routeController.getAllRoutes);

module.exports = router;
