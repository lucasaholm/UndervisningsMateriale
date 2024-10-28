/**
 * Chaining
 *  - De fleste ord returnerer et array, så det er muligt at "chaine" disse sammen
 */

let personer = [{navn: 'Åge', alder: 32}, {navn: 'Ida', alder: 23}]

const beregnSumAlder = personer.map(p => p.alder).reduce((a,e) => a + e)

console.log(beregnSumAlder)

const sorteretNavne = personer.sort((p1,p2) => p1.alder-p2.alder).map(p => p.navn)

console.log(sorteretNavne)

const findPersonsAlder = personer.find(p => p.navn === 'Ida').alder;

console.log(findPersonsAlder)