const express = require("express");

const app = express();

// 2nd GET in the server. Runs - OK
app.get("/", (req, res, next) => {
  console.log("Side 1 ran");
  next();
});

app.use((req, res, next) => {
  console.log("Side 2 ran");
  next();
});

module.exports = app;
