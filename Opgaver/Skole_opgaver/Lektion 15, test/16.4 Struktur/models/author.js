const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String
})

module.exports = mongoose.model('Author', authorSchema)
