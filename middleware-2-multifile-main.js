const express = require("express");

const app = express();
const sideFileMiddlewares = require("./middleware-2-multifile-side.js");

app.use((req, res, next) => {
  console.log("Main 1 ran");
  next();
});

// 1st GET in the server. Runs - OK
app.get("/", sideFileMiddlewares);

// 3rd "method" middleware in the server. Runs - OK
app.all("/", (req, res, next) => {
  console.log("app.All METHODS ran");
  next();
});

app.use((req, res, next) => {
  console.log("Main 2 ran", "\n---");
  next();
});

// app.use(sideFileMiddlewares); // repetition LGTM, no errors

app.listen(3000, () => console.log("Server running on port 3000"));
