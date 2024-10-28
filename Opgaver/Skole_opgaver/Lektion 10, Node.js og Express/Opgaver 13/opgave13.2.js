// opgave13.2.js
const express = require('express'); //importerer Express.js frameworket til at bygge serveren
const app = express();  //skaber ny express applikation
const fetch = require('node-fetch');    //importerer node-fetch modulet, som giver funktionalitet til at foretage HTTP-anmodninger (ligesom browserens fetch API).

const userUrl = 'https://jsonplaceholder.typicode.com/users'; //brugerdata

//asynkron funktion til at hente data
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

//Funktion til at generer html tabel
function genererTabel(users) {
    let html = '<table>';
    for (user of users) {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

//Definerer en route handler for hjemmeadressen ('/'):
app.get('/', async (request, response) => {
    try {
        let users = await get(userUrl); //henter data
        let html = genererTabel(users); //generer tabel ud fra dataen
        response.send(html); //sender det til html
    } catch (fejl) {
        if (typeof fejl.message === 'number')
            response.sendStatus(fejl.message); //sender fejlstatus kode hvis der opstår fejl
        else {
            response.send(fejl.name + ": " + fejl.message);
        }
    }
});

app.listen(8080);

console.log('Lytter på port 8080 ...');