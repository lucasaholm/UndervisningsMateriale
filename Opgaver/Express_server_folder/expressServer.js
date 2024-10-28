/**
 * Express 
 *  - express.js er et webapplikations framework bygget ovenpå node.js
 *  
 * routing
 *  - dens routing gør det let at koble http request til request handlers
 *    - .get //=> henter din data fra et http request
 *    - .post //=> sender data via http
 *    - .put //=> opdaterer data
 *    - .delete //=> sletter data
 *    - .all //=> kan dække alle de ovenstående
 */

//eksempel på express server

const express = require('express')
const app = express();

app.all('/', (request, response) => {
  let array = [request.method, request.url]
  response.send(array);
})

app.get('/fil/:navn', (request, reponse) => {
  let array = [request.method, request.url, request.params.navn];
  response.send(array);
});

app.listen(8080)

console.log('Lytter på port 8080 ...');


/**
 * Response koder
 * i response kan der sendes flere forskellige til: 
 *  - Res.send(tekst / html / objekt / array) //=> sender et http response som tekst, html, eller json
 *  - Res.sendStatus(kode) //=> sender den givne http status kode sammen med den tilsvarende status tekst.
 *  - Res.sendFile(sti) //=> sender filen med den specificerede sti og sætter content-typen ud fra filens extension
 *  - Res.status(kode) //=> sætter den givne http status kode på response
 *  - Res.redirect(sti) //=> omdirgerer til en URL, der genereres ud fra den specificerede sti
 *  - Res.render(sti, data) //=> genererer pug ud fra en template og data
 */

