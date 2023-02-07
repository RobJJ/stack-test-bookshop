import Book from "./components/Book.component";

function App() {
  return (
    <div className="w-screen h-screen p-10">
      <div className="bg-green-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
        <section className="w-full bg-white flex text-center">
          <div className="w-1/4">Book Name</div>
          <div className="w-1/4">Author</div>
          <div className="w-1/4">Rating</div>
          <div className="w-1/4">Button</div>
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
