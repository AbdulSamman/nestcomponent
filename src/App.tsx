import './App.scss';
import Books from "./data/books.json";

function App() {
  return (
    <div>
     <h1>Book Site</h1>
     <h3>There are {Books.length} books.</h3>
     
      <div>{Books.map((book,index)=>{
        return (
          <div className='book' key={index}>
            <div className='title'>{book.title}</div>
            <div className='imageUrl'>
              <img src={book.imageUrl} />
            </div>
          </div>
        )
      })}</div>
     
    </div>
  )
}

export default App
