/**
 * Delete
 *  - Bruges til at anmode om at fjerne noget på serveren
 */

//eksempel på delete
const fetch = require('node-fetch');

let url = 'http://jsonplaceholder.typicode.com/posts/11';

//en tilgang med promise baseret then / catch
fetch(url, {
  method: "DELETE"
})
.then(response => {
  if (response.status >= 400) {
    throw new Error(response.status);
  } else if (response.status === 204 || response.status === 200) {
    console.log('Sletning gennemført');
    return;
  } else {
    return response.json();
  }
})
.then(resultat => {
  if (resultat) {
    console.log('Resultat: ', resultat);
  }
})
.catch(fejl => console.log('Fejl: ', fejl.message));


// Async/await tilgang
async function deLete(url) {
  let respons = await fetch(url, {
    method: "DELETE"
  });
  if(respons.status !== 200) {
    throw new Error(respons.status);
  } else {
    console.log('Sletning gennemført');
    return;
  }
}

// Kald funktionen
deLete(url)
.catch(fejl => console.log('Fejl: ', fejl.message));

