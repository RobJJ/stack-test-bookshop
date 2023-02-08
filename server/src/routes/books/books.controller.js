const { addNewBook } = require("../../models/books.model");
//
//
//
async function httpAddNewBook(req, res) {
  const book = req.body;

  if (!book.name || !book.author || !book.rating) {
    return res.status(400).json({
      error: "Missing required book properties!",
    });
  }
}
