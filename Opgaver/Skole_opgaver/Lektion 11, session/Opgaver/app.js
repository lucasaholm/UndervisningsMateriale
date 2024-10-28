const express = require('express'); //importerer express.js
const app = express();  //opretter express applikation
const session = require('express-session'); //importerer et middleware til seassionshåndtering (mulighed for at gemme data på tværs af flere http forespørgsler)
const fs = require('fs').promises; //importerer promise, gør det muligt at arbejde asynkront
const morgan = require('morgan'); //en http request logger

app.use(express.static('filer')); //sætter op en statisk server 'filer' er mappenavnet, hvor ting som billeder, css og javascript er gemt
app.use(express.json()); // Middleware, der tillader Express at parse JSON payloads fra indkommende forespørgsler.
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true})); //Initialiserer sessionsmiddleware med konfigurationer. 'secret' bruges til at signere session ID cookie, 'saveUninitialized' og 'resave' er konfigurationsindstillinger.
app.use(morgan('tiny')); //Aktiverer Morgan-loggeren med 'tiny' konfigurationen, som giver minimal output i loggen
app.post('/login', async (request, response) => { //Definerer en asynkron route-handler for POST-forespørgsler til '/login'. Inde i handleren tjekkes brugernavn og password, og der oprettes en session, hvis de er korrekte.
const {navn, password} = request.body; 
if (password === '123' && navn) {
request.session.navn = navn;
response.send({ok: true});
} else {
response.send({ok: false});
}
});

app.get('/session', async (request, response) => { //Asynkron route-handler for GET-forespørgsler til '/session'. Handleren tjekker, om brugeren er logget ind (via session), og viser en velkomstbesked eller omdirigerer til en fejlside.
  const navn = request.session.navn;  
  if (navn) {
  let sti = __dirname + '/templates/velkommen.txt';
  let template = await fs.readFile(sti, 'utf8');
  let html = template.replace(/{{navn}}/, navn);
  response.send(html);
  } else {
  response.redirect('/ingenAdgang.html');
  }
  });
  app.get('/logout', (request, response) => { // Route-handler for '/logout', der destruerer brugerens session og omdirigerer til startsiden.
  request.session.destroy((err) => {
  if (err) {
  console.log(err);
  } else {
  response.redirect('/');
  }
  });
  }
  );

  /**
   * app.listen(PORT, () => { ... }); - Starter serveren, så den lytter på den angivne port. 
   * Denne del af koden mangler i dit eksempel, men den er nødvendig for at serveren
   *  skal kunne starte og lytte efter indkommende forbindelser.
   */