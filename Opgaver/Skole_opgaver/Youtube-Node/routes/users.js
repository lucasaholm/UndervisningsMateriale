const express = require("express");
const router = express.Router()
router.use(logger)

router.get("/", (req, res) => {
  res.send("User list")
})

router.get("/new", (req, res) => {
  res.render("users/new", {firstName: "Test"})
})

router.post('/', (req, res) => {
  console.log(req.body.firstName)
  res.send("hi")
})

router
.route("/:id")
.get((req, res) => {
  console.log(req.user)
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
})
.put((req, res) => {
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
})
.delete((req, res) => {
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
})

const users = [{ name: "Kyle"}, { name: "Sally"}]

router.param("id", (req,res, next, id) => {
  req.user = users[id]
  next()
})


function logger(req,res,next) {
  console.log(req.originalUrl)
  next()
}


module.exports = router