const express = require("express"); // can be named anything, since CommonJS

const app = express();

app.use((req, res) => {
  res.send("Hello, world");
});

app.listen(3000, () => console.log("Server running on port 3000"));
