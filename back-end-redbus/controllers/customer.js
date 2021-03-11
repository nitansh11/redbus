const Customer = require("../models/customer");

// will add customer if custmer with that email does not exist
exports.addNewCustomer = async (req, res) => {
  let email = req.body.email;
  let existingCustomer = await Customer.findOne({ email: email }).lean().exec();
  if (existingCustomer) {
    res.send(existingCustomer);
  } else {
    let newCustomer = await Customer.create(req.body);
    res.send(newCustomer);
  }
};
