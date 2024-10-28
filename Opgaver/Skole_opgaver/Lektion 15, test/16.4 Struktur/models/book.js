const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  isbn: String,
  author: {type: Schema.Types.ObjectId, ref: 'Author'}
})

module.exports = mongoose.model('Book', bookSchema)