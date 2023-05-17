const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors("*"));
app.use(express.json());

//static


app.get("/agua", (req, res) => {
  res.send("Hello World from agua!");
});

app.post("/nivel-agua", (req, res) => {
  console.log(req.query);
  let nivelAgua = 0;

  res.send("Hello World!");
});

let modos = {
  apagado: "0",
  manual: "1",
};
app.post("/modo", (req, res) => {
  let modoDefault = "1";
  console.log(req.query.modo);
  if (req.query.modo == "apagado") {
    return res.send(modos.apagado);
  } else if (req.query.modo == "manual") {
    console.log("here");
    return res.send(modos.manual);
  }
  // return res.send(modoDefault);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
