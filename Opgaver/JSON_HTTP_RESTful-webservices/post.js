//eksempel på post()
  //post() bruges til at sende data til en server
  const fetch = require('node-fetch');

// Denne funktion foretager en POST-anmodning til den angivne URL med det angivne objekt.
// Det returnerer svaret som JSON.
// Funktionen håndterer også HTTP-fejl ved at kaste en undtagelse, hvis statuskoden ikke er 201 (Created).
async function post(url, object) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {'Content-Type': 'application/json'}
    });

    // Tjekker om responsstatuskoden indikerer succes (201 Created)
    if (response.status !== 201) {
        throw new Error('Fejl under anmodning: Status ' + response.status);
    }

    return await response.json();
}

// Eksempel på brug af post-funktionen
let url = 'https://jsonplaceholder.typicode.com/posts';
let data = { userId: 111, id: 101, title: 'titel', body: 'tekst'};

post(url, data)
    .then(result => console.log('Resultat: ', result))
    .catch(error => console.log('Fejl: ', error.message));

    