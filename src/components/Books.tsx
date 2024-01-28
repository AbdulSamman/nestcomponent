//import BooksData from "../data/books.json";
//können auch als props aufgerufen werden
import { Book } from "./Book";
import { IBook } from "../interfaces";

interface IProps {
  books: IBook[];
  //entwickler: string;
  showImages: boolean;
  setBooks: any;
}
export const Books = (props: IProps) => {
  const { books, showImages, setBooks } = props;
  return (
    <div className="books">
      {books.map((book: IBook) => {
        return (
          <div key={book.id}>
            <Book
              book={book}
              showImages={showImages}
              setBooks={setBooks}
              books={books}
            />
          </div>
        );
      })}
    </div>
  );
};
