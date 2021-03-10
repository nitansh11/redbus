const express = require("express");
const router = express.Router();
const routeController = require("../controllers/route");

router.post("/routes/add-route", routeController.addRoute);

module.exports = router;
