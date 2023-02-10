import React from "react";

import AddBook from "./components/AddBook.component";
//
import useBooks from "./hooks/useBooks";
import BookList from "./components/BookList.component";
//
//
function App() {
  //

  const { submitBook, books, deleteBook } = useBooks();

  //
  return (
    <div className="w-screen h-screen p-10">
      <div className="bg-blue-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
        <AddBook submitBook={submitBook} />
        <section className="w-full bg-white flex flex-col">
          <div className="w-full text-2xl underline text-center">Book List</div>
          <BookList books={books} deleteBook={deleteBook} />
        </section>
      </div>
    </div>
  );
}

export default App;

// TODO
//
// For every book in the bookList Database, we render a book and display it
//
