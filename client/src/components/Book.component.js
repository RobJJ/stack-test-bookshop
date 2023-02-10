import React from "react";
//
//
function Book({ book, deleteBook }) {
  //
  const { name, author, rating } = book;
  //

  //
  return (
    <div className="w-full flex border border-black text-center">
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{author}</div>
      <div className="w-1/4">{rating}</div>
      <div className="w-1/4 flex">
        <div className="w-1/2 bg-green-200">Edit</div>
        <div className="w-1/2 bg-red-200 cursor-pointer" onClick={deleteBook}>
          Del
        </div>
      </div>
    </div>
  );
}

export default Book;

// Book structure
// Book = {
//     name: "Harry Potter",
//     author: "JK Rowling",
//     rating: 4
// }
