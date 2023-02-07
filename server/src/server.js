const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log("Server running on port 8000");
});
