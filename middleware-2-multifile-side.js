const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Side 1 ran");
  next();
});

app.use((req, res, next) => {
  console.log("Side 2 ran");
  next();
});

module.exports = app;
