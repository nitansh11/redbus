const fs = require("fs");
let allBookings = [];

let booking1 = {
  customerId: "6049aa08bf99621dbc8cd6de",
  passengerDetails: [
    { name: "Vidit Rastogi", gender: "Male", age: 26 },
    { name: "Vishal Rastogi", gender: "Male", age: 50 },
  ],
  email: "viditr111@gmail.com",
  phoneNumber: "9876543210",
  fare: 2600,
  status: "upcoming",
  busId: "6049b8a97501a24470b9a527",
  seats: [1, 3],
  departureDetails: {
    city: "Lucknow",
    location: "Sublocation 2 (Lucknow)",
    time: 2,
    date: "2021-03-17",
  },
  arrivalDetails: {
    city: "Barabanki",
    location: "Sublocation 3 (Barabanki)",
    time: 10,
    date: "2021-03-17",
  },
  duration: 8,
  isBusinessTravel: true,
  businessDetails: {
    gst: "ABCDEFGH",
    name: "Educorp.",
    address: "1154, Anupam Building, Mumbai",
    email: "support@educorp.com",
  },
  isInsurance: true,
  isCovidDonated: true,
};
let booking2 = {
  customerId: "6049b01cfd2722597786c3e0",
  passengerDetails: [
    { name: "Keshav Rajput", gender: "Male", age: 36 },
    { name: "Sunita Sahni", gender: "Female", age: 50 },
  ],
  email: "keshav11@gmail.com",
  phoneNumber: "9897655320",
  fare: 4000,
  status: "upcoming",
  busId: "6049b8a97501a24470b9a529",
  seats: [1, 3],
  departureDetails: {
    city: "Lucknow",
    location: "Sublocation 2 (Lucknow)",
    time: 2,
    date: "2021-03-17",
  },
  arrivalDetails: {
    city: "Allahabad",
    location: "Sublocation 3 (Allahabad)",
    time: 10,
    date: "2021-03-17",
  },
  duration: 8,
  isBusinessTravel: false,
  isInsurance: true,
  isCovidDonated: true,
};
allBookings.push(booking1, booking2);
fs.writeFileSync("allBookings.json", JSON.stringify(allBookings));
