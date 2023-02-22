const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Shop get ran");
  next();
});

app.use((req, res, next) => {
  console.log("Shop 1 ran");
  next();
});

module.exports = app;
