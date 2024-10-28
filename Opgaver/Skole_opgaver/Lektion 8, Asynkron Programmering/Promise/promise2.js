function langvarig(nr) {...}
langvarig(1)
.then(resultat => {
console.log('Resultat: ' + resultat);
return langvarig(2);
})
.then(resultat => console.log('og ' + resultat))
.catch(fejl => console.log('Fejl/exception: ' + fejl));