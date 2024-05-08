const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is Reyan!");
});

app.listen(port, ()=> {
  console.log(`The app is listenting on port ${port}`);
});
