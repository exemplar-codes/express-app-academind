const express = require("express");

const app = express();

const shopRouter = require("./middleware-3-route-based-shop-route");
const checkoutRouter = require("./middleware-3-route-based-checkout-route");

app.use("/", (req, res, next) => {
  console.log("Main 1 ran");
  next();
});

app.use("/shop", shopRouter);
app.use("/checkout", checkoutRouter);

app.use("/", (req, res, next) => {
  console.log("Main 2 ran", "\n-----");
  next();
});

app.listen(3000, () => console.log("Server running at port 3000"));
