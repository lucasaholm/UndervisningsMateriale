const express = require('express')
const app = express();

app.set('view engine', 'pug')
//app.set('views', './views')
app.use(express.static(__dirname + '/filer'))

const ansatte = [
    {
        name: "Alice",
        job: "IT-Personel"
    },
    {
        name: "Bob",
        job: "Consultant"
    },
    {
        name: "Charlie",
        job: "Boss"
    },
    {
        name: "Lucas",
        job: "Server-Admin"
    }
]

app.get('/', function (req, res) {
    res.render('index.pug', { ansatte: ansatte })
    const person = ansatte.find(p => p.name === req.params.name)
    
})

app.put('/:name', (req, res) => {
    const person = ansatte.find(p => p.name === req.params.name)
    
});

app.listen(8080, () => {
    console.log('serveren kører nu på port 8080..')
})