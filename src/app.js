const express = require("express");
const server = express();
server.listen(8080, () => {
  console.log("server is running on port 8080");
});

server.get("/", (req, res) => {
  res.send("Hello");
});
server.get("/test", (req, res) => {
  res.send("TEST RESPONSE");
});
