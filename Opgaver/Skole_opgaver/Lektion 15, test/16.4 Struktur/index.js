const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoosetest', {useNewUrlParser: true})

const Schema = mongoose.Schema
const personSchema =  Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
})

const storySchema =  Schema({
  author: {type: Schema.Types.ObjectId, ref:'Person'},
  title: String
})

const Story = mongoose.model('Story', storySchema)
const Person = mongoose.model('Person', personSchema)
/**
const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Flemming',
  age: 97
})

author.save((error)=>{
  if (error) throw error
  const story = new Story({
    title: 'Casino Royale',
    author: author._id
  })
  story.save((error)=> {
    if (error) throw error
    author.stories.push(story)
    author.save()
  })
})
*/


Story.find().populate('author').exec((error,stories)=> {
  if (error) throw error
  console.log(stories[0].title, stories[0].author.name)

})