const express = require("express");
const { httpAddNewBook } = require("./books.controller");

const booksRouter = express.Router();

booksRouter.post("/", httpAddNewBook);

module.exports = { booksRouter };
