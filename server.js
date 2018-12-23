const express = require("express");
const app = express();
const service = new(require("./fake-service").FakeService)();
const port = 3000;
const path = require("path");
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/sample", (_, res) => service.getSample$(res).pipe(res));

app.get("/post", (_, res) => service.getPost$(res).pipe(res));
app.listen(port, () => {
  console.log("servier is listening", port);
});