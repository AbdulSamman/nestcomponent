import "./App.scss";
import { Books } from "./components/Books";
import BooksData from "./data/books.json";

//const entwickler: "AbdulSamman";

function App() {
  return (
    <div>
      <h1>Book Site</h1>
      <h3>There are {BooksData.length} books.</h3>
      <Books booksData={BooksData} /* entwickler={entwickler} */ />
    </div>
  );
}

export default App;
