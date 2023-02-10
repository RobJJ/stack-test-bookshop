const express = require("express");
const {
  httpAddNewBook,
  httpDeleteBook,
  httpGetAllBooks,
} = require("./books.controller");

const booksRouter = express.Router();

booksRouter.post("/", httpAddNewBook);
booksRouter.delete("/", httpDeleteBook);
booksRouter.get("/", httpGetAllBooks);

module.exports = { booksRouter };
