import { useState } from "react";
import "./App.scss";
import { Books } from "./components/Books";
import rawBooks from "./data/books.json";
import { IBook } from "./interfaces";

//const entwickler: "AbdulSamman";

//neue array für like
const _books: IBook[] = [];

rawBooks.forEach((rawBook) => {
  const book: IBook = {
    ...rawBook,
    isLiked: false,
  };
  _books.push(book);
});

function App() {
  const [showImages, setShowImages] = useState(true);
  const [books, setBooks] = useState(_books);

  //if someone liked this book
  const gatsbyBookIsLiked = () => {
    const _book = books.find((book) => book.id === 2);
    if (_book === undefined) {
      return false;
    } else {
      return _book.isLiked;
    }
  };
  return (
    <div>
      <h1>Book Site</h1>

      <button onClick={() => setShowImages(!showImages)}>Show Images</button>

      {gatsbyBookIsLiked() && (
        <p className="gatsbyAdvertisement">
          WERBUNG: We habe a new book of Gatsby for you click here: ....
        </p>
      )}

      <h3>
        There are <span style={{ color: "green" }}>{rawBooks.length}</span>
        books.
      </h3>
      <div>
        Number of likes:{" "}
        <span>
          {books.reduce((acc, book) => acc + (book.isLiked ? 1 : 0), 0)}
        </span>
      </div>
      <Books
        books={books}
        /* entwickler={entwickler} */ showImages={showImages}
        setBooks={setBooks}
      />
    </div>
  );
}

export default App;
