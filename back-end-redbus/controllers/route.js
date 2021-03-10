const Route = require("../models/route");
exports.addRoute = async (req, res) => {
  let route = await Route.create(req.body);
  console.log(route);
  res.send(route);
};
