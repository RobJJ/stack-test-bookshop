import React, { useState } from "react";
//
const newBookTemplate = {
  name: "",
  author: "",
  rating: "",
};
//
function AddBook(params) {
  //
  const [newBook, setNewBook] = useState(newBookTemplate);
  //

  //
  function addBookToList(e) {
    e.preventDefault();
    console.log(newBook);
  }
  //
  return (
    <form onSubmit={addBookToList} className="w-full bg-white flex text-center">
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Book Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
      </div>
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
      </div>
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Rating"
          value={newBook.rating}
          onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
        />
      </div>
      <div className="w-1/4 text-green-500">
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}
//
export default AddBook;
