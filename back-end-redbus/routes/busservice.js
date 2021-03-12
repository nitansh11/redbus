const express = require("express");
const router = express.Router();
const BusService = require("../controllers/busservice");

router.get("/v1/api/busservice", BusService.getBusService);

router.post("/v1/api/busservice", BusService.postBusDetails);
router.delete("/v1/api/busservice/:id", BusService.deleteBusDetails);
router.get("/v1/api/busservice/:id", BusService.eachBusDetail);

module.exports = router;
