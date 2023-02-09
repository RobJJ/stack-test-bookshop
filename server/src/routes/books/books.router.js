const express = require("express");
const { httpAddNewBook, httpDeleteBook } = require("./books.controller");

const booksRouter = express.Router();

booksRouter.post("/", httpAddNewBook);
booksRouter.delete(`/`, httpDeleteBook);

module.exports = { booksRouter };
