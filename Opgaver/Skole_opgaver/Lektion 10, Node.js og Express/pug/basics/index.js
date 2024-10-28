const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const people = [
    { name: 'Alice', age: 30, job: 'Ingeniør' },
    { name: 'Bob', age: 25, job: 'Designer' },
    // Flere personobjekter kan tilføjes her
  ];
  
  res.render('index', { people: people }); // 'index' er navnet på din Pug-fil
});

app.listen(3000, () => {
  console.log('Server kører på http://localhost:3000');
});