/**
   * Kaj lavede en get() funktion som kalder fetch metoden
   *  - gør det meget simplere at lave et http kald.
   *  - man laver funktionen async fordi der er en await på fetch
   *    (på denne måde er man sikker på at den henter alt dataen inden den laver html)
   * 
   * fetch() / get()
   *  - bruges til at hente data fra en server
   */

  //eksempel på kajs get() funktion
  //get() bruges til at hente data fra en server
  const fetch = require('node-fetch');

// Funktion til at hente data fra en server
async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200) {
    throw new Error('HTTP-fejl: ' + respons.status);
  }
  return await respons.json();
}

// Eksempel på brug af get-funktionen
let url = 'https://jsonplaceholder.typicode.com/posts/1'; // Eksempel URL

get(url)
  .then(resultat => console.log('Resultat: ', JSON.stringify(resultat)))
  .catch(fejl => console.log('Fejl: ', fejl.message));