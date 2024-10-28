const express = require('express');
const app = express();
//app.use(logger)

app.use(express.static("public"))
app.set('view engine', 'ejs');


const userRouter = require('./routes/users.js')

app.use("/users", userRouter)

app.listen(5000);


//res.download("server.js") Hvis man skal downloade en fil på serveren
  //res.render('FILE-PATH')
  //res.render().json({Message: "Im a json file!"})
  