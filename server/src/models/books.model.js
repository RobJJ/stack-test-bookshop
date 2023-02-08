// The object model that mongoose created using the schema
const books = require("./books.mongo");

//
//
async function saveBook(book) {
  // Condition for if book already exists... boolean
  // const book = await books.findOne({
  //     name: book.name,
  // })

  // if(book) {
  //     throw new Error("Book already exists!")
  // }

  await books.findOneAndUpdate({ name: book.name }, book, { upsert: true });
}
//
async function addNewBook(book) {
  // Can add some props to the object if you would like before saving. Lets add a inStock prop
  const newBook = Object.assign(book, {
    inStock: true,
  });

  await saveBook(newBook);
}
//
module.exports = {
  addNewBook,
};
