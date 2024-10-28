/**
 * HTTP
 *  - Man kan bruge http funktioner med både callback og promise
 *    - (i undervisning har vi kun arbejdet med http som promise)
 * 
 *    - Det er væsenligt mere avanceret at skrive et callback http kald. 
 *    
 *    Det moderne er at bruge et promise, og så er det meget simplere at læse og skrive.
 * 
 */

// eksempel på http som callback: 

  async function post(url, object) {
    const response = await fetch(url, {
      method: "post", 
      body: JSON.stringify(object),
      headers: {'Content-Type': 'application/json'}
    });

    if(response.status !== 201) //created
    throw new Error(response.status);
    return await response.json();
  }

  //Eksempel på http som promise (det vi har lært i undervisningen)

  let usersUrl = 'https://jsonplaceholder.typicode.com/users';
  // let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
  // let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';

  fetch(usersUrl)
  .then(response => {
    if(response.status >= 400)
      throw new Error(response.status);
    else 
      return response.json();
  })
  .then(resultat => console.log('Resultat: ' + resultat[1].name))
  .catch(fejl => console.log('Fejl: ' + fejl))

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
  async function get(url) {
    const respons = await fetch(url);
    if(respons.status !== 200) {
      throw new Error(respons.status);
    }
    return await respons.json();
  }

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
