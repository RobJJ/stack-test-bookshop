// const API_URL = "http:localhost:8000/v1";

// handles frontend request
async function httpSubmitNewBook(book) {
  // going to remove ${API_URL} before /books
  try {
    return await fetch(`/v1/books`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteBook(id) {
  try {
    return await fetch(`/v1/books/${id}`, {
      method: "delete",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpSubmitNewBook, httpDeleteBook };
