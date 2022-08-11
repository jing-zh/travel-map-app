require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

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
