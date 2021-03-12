// let allBus = [];
// const fs = require("fs");
// let routes = JSON.parse(fs.readFileSync("routes.json"));
// console.log(routes);
// /**
//  *
//  * // "Fare and bus type" is based on busType integer value
//  1: seater:50
//  2  sleeper:100
//  3: ac:125
//  4: nonac:75
// Math.floor(Math.random() * (max - min + 1) + min);
//  */

// let allAmenities1 = ["wifi", "water-bottle"];
// let allAmenities2 = ["blankets", "charging-point", "movie"];

// for (let i = 1; i < 10; i++) {
//   let obj = {};
//   obj.operatorName = `Operator${i}`;
//   obj.busType = Math.floor(Math.random() * (4 - 1 + 1) + 1);
//   obj.departureTime = Math.floor(Math.random() * (23 - 2 + 1) + 2);
//   obj.rating = [
//     Math.floor(Math.random() * (10 - 3 + 1) + 3),
//     Math.floor(Math.random() * (10 - 3 + 1) + 3),
//     Math.floor(Math.random() * (10 - 3 + 1) + 3),
//     Math.floor(Math.random() * (10 - 3 + 1) + 3),
//     Math.floor(Math.random() * (10 - 3 + 1) + 3),
//   ];
//   obj.totalSeats = 40;
//   obj.images =
//     "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg";
//   obj.routes = routes[i]._id["$oid"];
//   obj.liveTracking = Math.floor(Math.random() * (1 - 0 + 1) + 0);
//   obj.reschedulable = Math.floor(Math.random() * (1 - 0 + 1) + 0);
//   obj.amenities = [
//     allAmenities1[Math.floor(Math.random() * (1 - 0 + 1) + 0)],
//     allAmenities2[Math.floor(Math.random() * (2 - 0 + 1) + 0)],
//   ];

//   allBus.push(obj);
// }
// fs.writeFileSync("allBus.json", JSON.stringify(allBus));
let str = [];
if (typeof str === "string") {
  console.log("true");
}
