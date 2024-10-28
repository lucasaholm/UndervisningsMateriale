function langvarig(nr) {...}
Promise.allSettled([langvarig(1), langvarig(2)])
.then((resultat) => {
console.log('Resultater, fejl og exceptions:');
console.log(resultat[0]);
console.log(resultat[1]);
});
