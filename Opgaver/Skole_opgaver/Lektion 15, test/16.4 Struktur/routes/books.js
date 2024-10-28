const controller = require('../controllers/controller')

module.exports = function(express) {
  const router = express.Router()
  router.route('/')
    .get((request, response) => {
      controller.getBooks().then((books)=> {
        // HER SKAL MAN SÅ KÆLE FOR DETALJERNE
        // SÅ MAN KAN BRUGE PUG etc. OG IKKE SENDE JSON TILBAGE
        response.json(books)
      })
    })
    return router
}