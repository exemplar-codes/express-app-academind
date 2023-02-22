const express = require("express"); // can be named anything, since CommonJS

const app = express();

// ignore this route and code
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the site</h1>
  <h2>Checkout other pages</h2>
  <p>
    <ul>
      <li><a href="/text">/text</a></li>
      <li><a href="/json">/json</a></li>
      <li><a href="/html">/html</a></li>
      <li><a href="/music">/music</a></li>
      <li><a href="/image">/image</a></li>
    </ul>
  </p>
  `);
});

// content-type/MIME auto inference
// for both variables and files, on binary level

app.get("/text", (req, res) => {
  res.send("Hello, world");
});

app.get("/json", (req, res) => {
  res.send({ myMessage: "Hello, world" });
});

app.get("/html", (req, res) => {
  res.send("<h1>Hello, world</h1>");
});

app.get("/image", (req, res) =>
  res.sendFile("./image.jpg", { root: __dirname })
);

app.get("/music", (req, res) =>
  res.sendFile("./perception.mp3", { root: __dirname })
);

app.listen(3000, () => console.log("Server running on port 3000"));
