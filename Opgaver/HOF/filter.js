/**
 * Filter 
 *  - En HOF i JS
 *    - Bruges til at oprette et nyt array, der kun indeholder elementer, der opfylder en given betingelse, som er specificeret i en callback funktion
 * 
 *  - Dette returnerer et nyt array, med de elementer der består betingelsen
 * 
 * //
 * ENKEL FORKLARING PÅ FILTER
 *  
 *  - filter starter med det første element i arrayet og kalder callback-funktionen på det.
 *  - Callback-funktionen vurderer en betingelse for det aktuelle element, og hvis betingelsen er sand, tilføjes det aktuelle element til det nye array.
 *  - Processen gentages for hvert element i arrayet.
 *  - filter returnerer det nye array, der kun indeholder de elementer, der består betingelsen.
 */
users = [{
  name: 'Yazeed',
  age: 25
},{
  name: 'Sam',
  age: 30
},{
  name: 'Bill',
  age: 20
},]

//et eksempel på at filtrere tal, der er større end 3 fra et array.
const arrNumbers = [1, 2, 3, 4, 5, 6]; 

const filteredNumbers = arrNumbers.filter((currentValue) => currentValue > 3);
console.log(filteredNumbers) // [4, 5, 6]

//filter eksempel på at filtrere navne som starter med B

//namesStartingWithB = users.filter((user) => startsWithB(user.name));
//console.log(namesStartingWithB)

//eksempel uden brugen af filter:

startsWithB = (string) => string.toLowerCase().startsWith('b');
namesStartingWithB = [];

for(let i = 0; i < users.length; i++) {
  if(startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i])
  }
}

console.log(namesStartingWithB); //=> [{"name": "Bill", "age": 20}]
