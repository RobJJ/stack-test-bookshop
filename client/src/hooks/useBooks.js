import { useCallback, useEffect, useState } from "react";
import { httpSubmitNewBook, httpDeleteBook, httpGetBooks } from "./requests";

function useBooks() {
  // Local State for Books
  const [books, saveBooks] = useState([]);
  // all functions related to using books

  const getBooks = useCallback(async () => {
    const fetchedBooks = await httpGetBooks();

    saveBooks(fetchedBooks);
  }, []);

  const submitBook = useCallback(
    async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const name = data.get("book-name");
      const author = data.get("book-author");
      const rating = data.get("book-rating");
      const response = await httpSubmitNewBook({
        name,
        author,
        rating,
      });
      console.log(response);

      const success = response.ok;
      if (success) {
        getBooks();
      }
    },
    [getBooks]
  );

  const deleteBook = useCallback(
    async (id) => {
      const response = await httpDeleteBook(id);
      const success = response.ok;
      if (success) {
        // reload books...
        getBooks();
      } else {
        // let user know it wasnt successfull
      }
    },
    [getBooks]
  );

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return { submitBook, deleteBook, books };
}

export default useBooks;
