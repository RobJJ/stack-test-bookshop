import React, { useState } from "react";
import Book from "./components/Book.component";
import AddBook from "./components/AddBook.component";
//
import useBooks from "./hooks/useBooks";
//
const starterList = [
  { name: "Harry Pooper", author: "JK Brownshlong", rating: 4 },
  { name: "Barry Makokin", author: "T Smith", rating: 5 },
  { name: "Ranger Rick", author: "Joe Loob", rating: 1 },
];
//
function App() {
  //
  const [books, setBooks] = useState(starterList);
  const { submitBook } = useBooks();
  //
  return (
    <div className="w-screen h-screen p-10">
      <div className="bg-blue-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
        <AddBook books={books} setBooks={setBooks} submitBook={submitBook} />
        <section className="w-full bg-white flex flex-col">
          <div className="w-full text-2xl underline text-center">Book List</div>
          <div className="flex flex-col w-full p-2 gap-2">
            {books.map((book, idx) => {
              return <Book key={idx} book={book} />;
            })}
          </div>
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
