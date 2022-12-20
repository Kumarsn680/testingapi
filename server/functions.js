const Book = require("./db");



const getAllBooks = async () =>{
    const total_books = await Book.find()
    return total_books
}

const getBookById = async (id) => {
  const required_book =await  Book.findOne({isbn:id})
  return [required_book]
};

const addBook = async (bookToBeAdded) =>{
    const book = new Book(bookToBeAdded)
    await book.save()
}

const deleteBook = async (id) =>{
    await Book.deleteOne({isbn:id})
}

const updateBookById = async (id,updatedBook) =>{
    await Book.updateOne({isbn:id},updatedBook)
}

module.exports = {
  getAllBooks,
  getBookById,
  updateBookById,
  addBook,
  deleteBook,
};