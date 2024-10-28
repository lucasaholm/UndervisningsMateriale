function langvarig(nr) {...}
async function main() {
try {
let resultater = await Promise.all([langvarig(1), langvarig(2)]);
console.log('Resultater: ' + resultater);
}
catch (e) {
console.log('Fejl/exception: ' + e);
}
}
main();
