const express = require("express");
const cors = require("cors");
const path = require("path");
//
//
const { api } = require("./routes/api");
//

const app = express();
//
//
//
// Middleware to handle requests coming in!
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);
//
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
//
app.use("/v1", api);
//
//
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//
//
//
module.exports = app;
