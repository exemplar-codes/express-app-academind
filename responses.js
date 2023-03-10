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
      <li><a href="/video">/video</a></li>
      <li><a href="/zip-file">/zip-file</a></li>
      <br />
      <li><a href="/music-faked">/music-faked (.mp3 file with .txt extension)</a></li>
    </ul>
  </p>
  `);
});

app.get("/here", (req, res) => {
  res.send(`<h1>Welcome to the site</h1>
  <h2>Checkout other pages</h2>
  <p>
    <ul>
    <a href="/redirect">Redirect</a>
      <li><a href="/text">/text</a></li>
      <li><a href="/json">/json</a></li>
      <li><a href="/html">/html</a></li>
      <li><a href="/music">/music</a></li>
      <li><a href="/image">/image</a></li>
      <li><a href="/video">/video</a></li>
      <li><a href="/zip-file">/zip-file</a></li>
      <br />
      <li><a href="/music-faked">/music-faked (.mp3 file with .txt extension)</a></li>
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
  res.json({ myMessage: "Hello, world" });
  // res.send({ myMessage: "Hello, world" }); // is also fine, but avoid it if possible
});

app.get("/html", (req, res) => {
  res.send('<h1>Hello, world </h1><a href="/redirect-back">Redirect</a>');
});

app.get("/image", (req, res) =>
  res.sendFile("./image.jpg", { root: __dirname })
);

app.get("/music", (req, res) =>
  res.sendFile("./perception.mp3", { root: __dirname })
);

app.get("/video", (req, res) =>
  res.sendFile("./video.mp4", { root: __dirname })
);

app.get("/music-faked", (req, res) =>
  res.sendFile("./perception-actually-em-pee-three.txt", { root: __dirname })
);

app.get("/zip-file", (req, res) =>
  res.sendFile("./zip-file.zip", { root: __dirname })
); // direct consumption not possible, so downloaded

// redirects
app.get("/redirect", (req, res, next) => {
  res.redirect("back"); // special meaning, last loaded page, use "/back" if there's an actual route named so
  // res.redirect("/some-path"); // redirect to /some-path
});

// redirects
app.get("/chain", (req, res, next) => {
  res.status(203).send("Chaining of Express response functions");
  // not possible with inherited node:http methods
});

app.listen(3000, () => console.log("Server running on port 3000"));
