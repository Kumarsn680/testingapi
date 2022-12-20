import React, { useState } from 'react'

export const BookContext = React.createContext({
  books: [],
  book: {},
  setBook: () => {},
  setBooks: () => {},
  searchTerm : "",
setSearchTerm : () => {}
});


const BookContextProvider = ({children}) => {
    const [books,setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [book, setBook] = useState({
      isbn: "0",
      title: "title",
      subtitle: "subtitle",
      pages: "pages",
    });

    
    const value = {book,setBook,books,setBooks,searchTerm,setSearchTerm}
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider