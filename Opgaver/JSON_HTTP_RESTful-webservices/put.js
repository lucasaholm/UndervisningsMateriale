/**
 * PUT 
 *  - bruges til at opdatere eksisterende ressourcer på serveren
 * 
 */

//eksempel af put
//importerer node-fetch
const fetch = require('node-fetch')

//vores data og url
let url = 'http://jsonplaceholder.typicode.com/posts/11';
let data = {userId: 111, title: 'titel', body: 'tekst'};

//en tilgang
fetch(url, {
  method: 'put',
  body: JSON.stringify(data),
  headers: {'Content-Type': 'application/json'}
})
.then(response => {
  if(response.status >= 400)
    throw new Error(response.status)
  else return response.json()
})
.then(resultat => console.log('Resultat: %o', resultat))
.catch(fejl => console.log('Fejl: ' + fejl))


//en anden tilgang
async function put(url, object) {
  const respons = await fetch(url, {
    method: 'put',
    body: JSON.stringify(object),
    headers: {'Content-Type': 'application/json'}
  });
  if(respons.status !== 200) //OK
      throw new Error(respons.status);
  else 
    return respons.json()
}

put(url, data)
.then(resultat => console.log('Resultat: %o', resultat))
.catch(fejl => console.log('Fejl: ' + fejl))

