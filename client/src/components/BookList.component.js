import React from "react";
import Book from "./Book.component";
//
//
const BookList = ({ books }) => {
  //
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      {books.map((book, idx) => {
        return <Book key={idx} book={book} />;
      })}
    </div>
  );
};

export default BookList;
