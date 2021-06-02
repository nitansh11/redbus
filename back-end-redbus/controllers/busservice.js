const BusServices = require("../models/busservice");
module.exports.getBusService = async (req, res) => {
  const getData = await BusServices.find({});
  //console.log("get data:", getData);
  res.status(200).json({ data: getData });
};

module.exports.postBusDetails = async (req, res) => {
  console.log(req.body);
  const postData = await BusServices.create(req.body);
  res.status(201).json({ data: postData });
};

module.exports.deleteBusDetails = async (req, res) => {
  const id = req.params.id;
  const dataObj = await BusServices.findByIdAndDelete(id);
  res.status(201).json({ data: dataObj });
};

module.exports.eachBusDetail = async (req, res) => {
  const id = req.params.id;
  console.log("id in eachBusDetail", id);
  const dataObj = await BusServices.findById(id);
  res.status(200).json(dataObj);
};
