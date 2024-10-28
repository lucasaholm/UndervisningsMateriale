// opgave13.1.js
const express = require('express'); //importerer express.js frameworket
const app = express(); //opretter ny Express applikation
const fs = require('fs').promises; //importerer Node.js i promise-baseret version (gør det muligt aT bruge async / await)

app.use(express.static(__dirname + '/filer'));  //fortæller at tjene statiske filer fra en mappe kaldet "filer"

//genererLinks tager en array af filnavne og generer en HTML streng med links til disse filer, adskilt af linjeskift
function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

//definerer en route handler for root (hjemmeadressen '/' )
app.get('/', async (request, response) => { 
    let filnavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filnavne); //genererLinks kaldes med de læste filnavne for at generere en HTML-streng med links
    response.send(html);    //Denne HTML-streng sendes tilbage som et svar til brugeren
});

app.listen(8080);

console.log('Lytter på port 8080 ...');