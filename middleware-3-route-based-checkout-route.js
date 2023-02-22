const express = require("express");

const app = express.Router();

app.use((req, res, next) => {
  console.log("Checkout route 1 ran");
  next();
});

app.use((req, res, next) => {
  console.log("Checkout route 2 ran");
  next();
});

module.exports = app;
