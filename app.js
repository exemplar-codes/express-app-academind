const express = require("express"); // can be named anything, since CommonJS

const app = express();

app.listen(3000, () => console.log("Server running on port 3000"));
// ∵ app.listen = http.createServer(app).listen

// get port number. use normal func
// app.listen(1337, function () {
//   console.log(`Server running on port ${this.address().port} ${this === app}`);
// });
