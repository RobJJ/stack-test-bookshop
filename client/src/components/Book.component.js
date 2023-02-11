import React, { useState } from "react";
//
//
function Book({ book, deleteBook }) {
  //
  const [isDisabled, setIsDisabled] = useState(true);
  const { name, author, rating } = book;
  //
  function testDisableToggle(e) {
    setIsDisabled(!isDisabled);
  }
  //
  return (
    <div className="w-full flex gap-1 border border-black text-center">
      <input
        disabled={isDisabled}
        className="w-1/4"
        value={name}
        id="book-name"
        type="text"
      ></input>
      <input className="w-1/4" value={author} type="text"></input>
      <input className="w-1/4" value={rating} type="text"></input>
      <div className="w-1/4 flex">
        <div className="w-1/2 bg-green-200" onClick={testDisableToggle}>
          {isDisabled ? "Edit" : "Accept"}
        </div>
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
