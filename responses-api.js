const express = require("express");
const { json } = require("express");
const cors = require("cors");

const router = express.Router();

router.use(json());
router.use(cors());

router.use((req, res, next) => {
  console.log("/api hit");
  next();
});

router.get("/", (req, res, next) => {
  console.log("/api GET hit");
  res.status(202).send({ message: "GET successful" });
});

router.get("/", (req, res, next) => {
  console.log("/api GET hit");
  res.status(202).send({ message: "GET successful" });
});
