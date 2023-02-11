import React from "react";
import Book from "./Book.component";
//
//
const BookList = ({ books, deleteBook, updateBook }) => {
  //
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      {books
        .filter((book) => book.inStock)
        .map((book, idx) => {
          return (
            <Book
              key={idx}
              book={book}
              deleteBook={() => deleteBook(book.bookId)}
              updateBook={updateBook}
            />
          );
        })}
    </div>
  );
};

export default BookList;
