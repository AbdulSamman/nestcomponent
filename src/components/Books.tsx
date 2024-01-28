//import BooksData from "../data/books.json";
//können auch als props aufgerufen werden

interface IBook {
  id: number;
  title: string;
  author: string;
  bookUrl: string;
  imageUrl: string;
}
interface Iprops {
  books: IBook[];
  //entwickler: string;
}
export const Books = (props: Iprops) => {
  const { books } = props;
  return (
    <div className="books">
      {books.map((book: IBook, index: number) => {
        return (
          <div className="book" key={index + 1}>
            <a href={book.bookUrl} target="_blank">
              <img src={book.imageUrl} />
            </a>
            <div className="info">
              <div className="title">
                <a href={book.bookUrl} target="_blank">
                  {book.title}
                </a>
              </div>
              <div className="author">{book.author}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
