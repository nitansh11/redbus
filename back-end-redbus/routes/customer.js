const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer");

router.post("/v1/api/customers", customerController.addNewCustomer);

module.exports = router;
