const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // ignore

app.use("/favicon*", (req, res, next) => {
  // ignore, just for easy debugging
  res.sendStatus(404);
});

app.use((req, res, next) => {
  console.log("1st middleware ran");
  next();
});

// 1. URIs. Run localhost:3000 in the browser
app.get("/", (req, res, next) => {
  if (Object.keys(req.query).length) {
    // ignore for now
    next();
    return;
  }
  res.status(203);
  res.send({ baseUrl: req.baseUrl, originalUrl: req.originalUrl });
});

// 2. body is undefined by default.
// Run the following code in browser console,
// and watch the networks tab
const codeForTheBrowser = `fetch(
  'http://localhost:3000',
  {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({input:2})
  })`;

app.post("/", (req, res, next) => {
  console.log("/ POST ran");
  res.json(req.body === undefined ? "undefined" : req.body);
  next();
});

// 3. urls prefix trimming in app.METHOD. Run /example in the browser
app.get("/example", (req, res, next) => {
  console.log("/example ran");
  res.send({ baseUrl: req.baseUrl, originalUrl: req.originalUrl });
  next();
});

// 4. path params. Run /example/1 in the browser
// 4.1 will run for /example/23 since exact match
app.get("/example/:id", (req, res, next) => {
  console.log("/example:id ran");
  res.send(req.params);
  next();
});

// 4.2 Will be run on /example/23, since it matches exactly.
app.get("/example/23", (req, res, next) => {
  if (res.headersSent) {
    // true at the start indicates some middleware has already sent a response
    console.log("Next called");
    next(); // continue chain
    return; // exit current middleware
  }
  res.send("/example 23 called");
  console.log("brrrr");
  next();
});

// 5. form data body
app.use("/form", (req, res, next) => {
  console.log("/form hit");
  next();
});

app.get("/form", (req, res, next) => {
  console.log("/form GET hit");
  res.status(202).sendFile("./form.html", { root: __dirname });
});

app.use("/form", express.urlencoded()); // to parse body as FormData
app.post("/form", (req, res, next) => {
  res.send({ message: "POST successful", inputMirror: req.body });
  next();
});

// 6. JSON body
app.use("/api", (req, res, next) => {
  console.log("/api hit");
  next();
});

app.get("/api", (req, res, next) => {
  console.log("/api GET hit");
  res.status(202).send({ message: "/api GET successful" });
});

// run in the browser console and watch the networks tab
const codeForTheBrowser2 = `fetch(
  'http://localhost:3000/api',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({input:2})
  })`;
app.use(express.json()); // JSON body parse, middleware
app.use(express.urlencoded()); // won't collide with JSON parse,
// since these middleware apply for the correct content-type

app.post("/api", (req, res, next) => {
  console.log("/api POST hit");
  res.status(202).json({ message: "GET successful", inputMirror: req.body });
  next();
});
// /api END

app.use(() => {
  console.log("END-------");
});

app.listen(3000, () => console.log("Server running on port 3000"));
