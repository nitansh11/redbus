const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.pluralize(null);
app.use(express.json());
const busRoutes = require("./routes/bus");
const bookingRoutes = require("./routes/booking");
const customerRoutes = require("./routes/customer");
const routeRoutes = require("./routes/route");

app.use(busRoutes);
app.use(bookingRoutes);
app.use(customerRoutes);
app.use(routeRoutes);

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://redbus_db_user_1:umJkhSujb8dZoc2a@redbuscnstructweek.bujg6.mongodb.net/redbus?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};
start();
