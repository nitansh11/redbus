const Route = require("../models/route");
// exports.addRoute = async (req, res) => {
//   let route = await Route.create(req.body);
//   console.log(route);
//   res.send(route);
// };
exports.getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};
