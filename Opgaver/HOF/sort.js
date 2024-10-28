/**
 * Sort
 *  - Denne funktion sorterer elementerne i et array
 *  - som standart returnerer den funktion elementerne i strenge
 *  - hvis man skal sortere en streng, er den case sensitive, så derfor skal man bruge.toLowerCase
 * 
 */

//Eksempel på case sensitive

const ord = ["Zebra", "abe", "Guitar"]


const sorteretOrd = ord.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase))


console.log(sorteretOrd)


// Eksempel på sorteret tal
let tal = [1, 40, 29, 38, 222, 2391, 202]

const sorteretTalMindsteFørst = tal.sort((a,b) => a-b);

console.log(sorteretTalMindsteFørst)

const sorteretTalStørsteFørst = tal.sort((a,b) => b-a);

console.log(sorteretTalStørsteFørst)
