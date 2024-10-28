const Author = require('../models/author')
const Book = require('../models/book')

exports.createAuthor = function (id, name) {
  const author = new Author({
    _id: id,
    name: name
  })
  return author.save()
}

exports.createBook = function (id, title, isbn, author) {
  const book = new Book({
    _id: id,
    title: title,
    isbn: isbn,
    author: author
  })
  return book.save()
}

// og sådan fortsætter vi med funktioner vi får brug 
// for på author0..*books

exports.getBooks = function(){
  return Book.find().populate('author').exec()
}

exports.getBook = function(isbn) {
  return Book.findOne({isbn: isbn}).populate('author').exec()
}