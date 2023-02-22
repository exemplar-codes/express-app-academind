const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("1 ran");
    next();
  });

  app.use((req, res, next) => {
    console.log("2 ran");
  });

  app.use((req, res, next) => {
    console.log("3 did not run");
  });

app.listen(3000, () => console.log('Server running on port 3000'));
