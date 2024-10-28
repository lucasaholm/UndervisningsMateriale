const personer = [{
  navn: 'Henrik',
  alder: 16,
  mobilnummer: 29324523 
},
{
  navn: 'Lasse',
  alder: 18,
  mobilnummer: 29234412
},
{
  navn: 'Sofia',
  alder: 22,
  mobilnummer: 22249903
},
{
  navn: 'Lucas',
  alder: 25
}, 
{
  navn: 'Jacobbbb',
  alder: 23
}
]

//find person på mobilnummer med HOF
console.log(personer.find(p => p.mobilnummer === 29234412).navn);


//find person1 alder med HOF
let person1Alder = personer.reduce((person1, person2) => {
  return person2.alder < person1 ? person2.alder : person1;
 }, personer[0].alder)

console.log(person1Alder)


//modificer arrayet med personer, så personerne nu får et forløbende id
//HOF
let id = 0;
personer.forEach(person => person.id = id++)
console.log(personer)

//Normal funktion
for(let i = 0; i < personer.length; i++) {
    personer[i].id = i
}

console.log(personer)



/**
 * Generer en tekststreng, der indeholder personernes navne, 
 * kommaseperaret og i sorteret rækkefølge
 */

let string1 = personer.map(person => person.navn).sort().join(", ")
let string3 = personer.map(person => person.navn).sort((p1,p2) => p2.localeCompare(p1)).join(",")

//console.log(string1)
//console.log(string3)


//Generer et array med navn og mobilnummer på de personer, der er yngre end 30
let string = personer.filter((person) => person.alder < 30).map(personer => personer.navn + " "+  personer.mobilnummer)

//console.log(string)


//find summen af deres alder, med brugen af reduce
let sum = personer.reduce((acc, person) => acc + person.alder, 0)
console.log(sum)


//find personer som der ikke har noget mobilnummer
let personerUdenMobil = personer.filter((person) => !person.mobilnummer)

console.log(personerUdenMobil)


//beregn gennemsnitsalderen
let gennemsnitsalderen = personer.reduce((acc, person) => acc + person.alder, 0) / personer.length

console.log(gennemsnitsalderen)


//find personen med det længste navn
let longestName = personer.reduce((person1, person2) => person1.navn.length > person2.navn.length ? person1 : person2)

console.log(longestName)

