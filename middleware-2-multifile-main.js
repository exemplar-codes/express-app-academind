const express = require("express");

const app = express();
const sideFileMiddlewares = require("./middleware-2-multifile-side.js");

app.use((req, res, next) => {
  console.log("Main 1 ran");
  next();
});

app.get("/shop", sideFileMiddlewares);

app.use((req, res, next) => {
  console.log("Main 2 ran", "\n---");
  next();
});

// app.use(sideFileMiddlewares); // repetition LGTM, no errors

app.listen(3000, () => console.log("Server running on port 3000"));
