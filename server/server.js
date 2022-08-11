require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

//middleware
app.use(express.json());

//routes
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

//connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests

    app.listen(8800, () => {
      console.log("listening on port", 8800);
    });
  })
  .catch((error) => {
    console.log(error);
  });
