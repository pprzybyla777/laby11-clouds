const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  
  res.status(200).send({
    status: "OK",
    data: "Hello world",
  });

});

app.post("/messages", (req, res) => {

  const { message } = req.body;

  res.status(200).send({
    status: "OK",
    data: message,
  });

});

app.all("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
