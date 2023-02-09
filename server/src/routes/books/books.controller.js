const {
  addNewBook,
  existsBookWithId,
  deleteBookWithId,
} = require("../../models/books.model");
//
//
//
async function httpAddNewBook(req, res) {
  const book = req.body;
  // console.log("(books.controller)request... book: ", book);
  // conditions
  if (!book.name || !book.author || !book.rating) {
    return res.status(400).json({
      error: "Missing required book properties!",
    });
  }
  // If all is well...
  await addNewBook(book);
  return res.status(201).json(book);
}

async function httpDeleteBook(req, res) {
  // TODO get proper id : changed to look at query for now
  const bookId = req.query.id;
  console.log("BookID http: ", bookId);
  // Check: if book does not exist
  const bookExists = await existsBookWithId(bookId);
  if (!bookExists) {
    return res.status(404).json({
      error: "Book not found!",
    });
  }
  // if book does exist
  const deletedBook = await deleteBookWithId(bookId);
  if (!deletedBook) {
    return res.status(400).json({
      error: "Book not deleted!",
    });
  }
  // return meta data here
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpAddNewBook,
  httpDeleteBook,
};
