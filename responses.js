const express = require("express"); // can be named anything, since CommonJS

const app = express();

// HTML response
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the site</h1>
  <h2>Checkout other pages</h2>
  <p>
    <ul>
      <li><a href="/text">/text</a></li>
      <li><a href="/json">/json</a></li>
    </ul>
  </p>
  `);
});

app.get("/text", (req, res) => {
  res.send("Hello, world");
});

app.get("/json", (req, res) => {
  res.send({ myMessage: "Hello, world" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
