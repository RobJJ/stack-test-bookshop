const { addNewBook } = require("../../models/books.model");
//
//
//
async function httpAddNewBook(req, res) {
  const book = req.body;
  // conditions
  if (!book.name || !book.author || !book.rating) {
    return res.status(400).json({
      error: "Missing required book properties!",
    });
  }
  // If all is well...
  await addNewBook(book);
  return res.status(201).json(launch);
}

module.exports = {
  httpAddNewBook,
};
