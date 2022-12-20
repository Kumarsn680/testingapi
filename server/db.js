const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI
)

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    isbn: String,
    title: String,
    subtitle: String,
    pages: Number,
  })
);


module.exports = Book