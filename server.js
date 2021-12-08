const express = require("express");
const app = express();

let port = 2500;
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
