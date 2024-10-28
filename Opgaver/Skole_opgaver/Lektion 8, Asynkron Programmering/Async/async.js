function langvarig(nr) {...}
async function main() {
try {
let resultat = await langvarig(1);
console.log('Resultat: ' + resultat);
resultat = await langvarig(2);
console.log('og ' + resultat);
}
catch (e) {
console.log('Fejl/exception: ' + e);
}
}
main();