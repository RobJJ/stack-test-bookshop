const express = require("express");
const {
  httpAddNewBook,
  httpDeleteBook,
  httpGetAllBooks,
  httpUpdateBook,
} = require("./books.controller");

const booksRouter = express.Router();

booksRouter.post("/", httpAddNewBook);
booksRouter.delete("/", httpDeleteBook);
booksRouter.get("/", httpGetAllBooks);
booksRouter.put("/", httpUpdateBook);

module.exports = { booksRouter };
