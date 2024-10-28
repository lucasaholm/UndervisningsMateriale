/**
 * Session
 *  Express-session er et middleware til at håndtere user seassions i Express.
 *  session gør at man kan bevare bruger data igennem flere requests.
 * 
 *  Express-session
 *    - er et standard Express middleware
 *    - Understøtter identifikation af en bruger / klient
 *    - Session data gemmes på serveren
 *    - Kun session ID gemmes på klienten (i en cookie)
 */

/**
 * Hvordan bruges session? 
 *  - For at bruge express-session skal man installere npm'en
 *    - skriv i terminalen: npm install express-session
 *    - for at bruge api i sit program skal man import den
 */

var session = require('express session')

//man skal oprette et middleware for at kunne bruge API'en
//middleware, oprettelse af session
app.use(express.static('assets'))
app.set('view engine', 'pug')
app.use(session({
    secret: '123456789',
    saveUnitialized: true,
    resave: true
}));

/**
 * secret
 *  - er en hemmelig nøgle
 *  - gemmer denne sessions ID
 * 
 * Resave
 *  - Gør så ens session bliver gemt, selvom der ikke er sket ændringer
 *  - Hvis den sættes til false, vil der kun gemmes hvis der er sket ændringer.
 *  - generelt godt at sætte den til false, da det gør performance bedre (formindske autosave)
 * 
 * SaveUninitialized
 *  - True: hvis indstillingen er sand, vil sessionen blive gemt i lageret,
 *    selvom den ikke har ændret sig under anmodningen.
 *    (dette kan føre til oprettelse af tomme session for anonyme brugere, som aldrig fik tildelt en identitet.)
 *    
 *  - False: Hvis indstillingen er falsk, gemmes kun sessioner hvis de har ændret sig under anmodningen.
 *    dette betyder, at sessionen kun gemmes, hvis der er blevet tilføjet,
 *    eller fjernet noget fra den i løbet af anmodningen.
 *    (kan også hjælpe med at undgå at oprette tomme sessioner, og kun gemme dem, der faktisk har brugt sessionen)
 * 
 * 
 */