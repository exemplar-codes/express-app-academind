const express = require("express");

const app = express();

// No trimming. So won't run
app.get("/", (req, res, next) => {
  console.log("Side 1 ran");
  next();
});

// runs, since path matches
app.get("/shop", (req, res, next) => {
  console.log("Side shop 1 ran");
  next();
});

app.use((req, res, next) => {
  console.log("Side 2 ran");
  next();
});

module.exports = app;
