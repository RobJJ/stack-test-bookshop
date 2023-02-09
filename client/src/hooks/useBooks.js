import { useCallback } from "react";
import { httpSubmitNewBook, httpDeleteBook } from "./requests";

function useBooks() {
  // all functions related to using books

  const submitBook = useCallback(async (e) => {
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
      // TODO: get list of books here
    }
  }, []);

  const deleteBook = useCallback(async (id) => {
    const response = await httpDeleteBook(id);
  }, []);

  return { submitBook };
}

export default useBooks;
