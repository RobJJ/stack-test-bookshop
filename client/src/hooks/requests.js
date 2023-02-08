const API_URL = "http:localhost:8000/v1";

// handles frontend request
async function httpSubmitNewBook(book) {
  try {
    return await fetch(`${API_URL}/books`, {
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

export { httpSubmitNewBook };
