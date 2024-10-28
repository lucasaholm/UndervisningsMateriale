function langvarig(nr) {...}
async function main() {
let resultat = await Promise.allSettled([langvarig(1), langvarig(2)]);
console.log('Resultater, fejl og exceptions:');
console.log(resultat[0]);
console.log(resultat[1]);
}
main();