const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

app.use(cors("*"));

var db = [];

app.get("/", (req, res) => {
  const { q } = req.query;

  const nivelAgua = q;
  db.push(nivelAgua);

  fs.writeFile(path.join(__dirname, "db.json"), nivelAgua, "utf8");
  res.send("Nivel de agua: " + nivelAgua);
});

app.get("/nivelAgua", (req, res) => {
  const { q } = req.query;
  const nivelAgua = q;
  console.log("nivelAgua" + nivelAgua);

  if (q === undefined) {
    return res.send("Nivel de agua: " + 0 + " - " + "Bomba desligada");
  }

  return res.send("Nivel de agua: " + nivelAgua);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
