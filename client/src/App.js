import React from "react";
import Book from "./components/Book.component";
//
//
function App() {
  return (
    <div className="w-screen h-screen p-10">
      <div className="bg-blue-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
        <section className="w-full bg-white flex text-center">
          <div className="w-1/4">
            <input
              className="text-center w-full"
              type="text"
              placeholder="Book Name"
            />
          </div>
          <div className="w-1/4">
            <input
              className="text-center w-full"
              type="text"
              placeholder="Author"
            />
          </div>
          <div className="w-1/4">
            <input
              className="text-center w-full"
              type="text"
              placeholder="Rating"
            />
          </div>
          <div className="w-1/4 text-green-500">Add Book</div>
        </section>
        <section className="w-full bg-white flex flex-col">
          <div className="w-full text-2xl underline text-center">Book List</div>
          <div>
            <Book />
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
