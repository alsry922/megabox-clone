const express = require("express");
const path = require("path");

const PORT = process.env.PORT;
const publicDirectoryPath = path.join(__dirname, "../public");

const app = express();

app.use(express.static(publicDirectoryPath));

app.listen(PORT, () => {
  console.log("Server is up to start " + PORT);
});
