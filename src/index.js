const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;
const publicPath = path.join(__dirname, "../public");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log("Server is up to start " + PORT);
});
