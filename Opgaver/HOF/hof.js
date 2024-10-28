/**
 * Højere ordens funktioner
 *  - Det er en funktion som tager enten en eller flere funktioner som argument
 *    og / eller returnerer en funktion
 */

//Eksempel på en HOF der tager en funktion som argument:

isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result)// [2, 4]

/**
 * Her har vi selv lavet isEven() funktionen, som vi derefter
 * bruger på HOF funktionen filer()
 */

//Her er et eksempel hvorpå den kan tage flere argumenter

add = (x) => (y) => x + y;

//på en gang
result = add(10)(20); //her tager den begge tal på en gang

//eller hver for sig
add10 = add(10)
result = add10(20) //ellers tager den resultatet af add10 og tilføjer y-værdien (20) og gemmer i resultatet

console.log(result) //=> 30;


//et ny eksempel
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

/**
 * MAP
 *  Denne funktion laver et nyt array ved at kalde på en funktion på HVERT element i forældre arrayet.
 *    - Den returnerer et nyt array med resultatet
 *    
 *    Her er en enkel forklaring på hvordan Array.map() fungerer:
 *      - Map starter med det første element i arrayet og kalder callback-funktionen på det
 *      - Resultatet af callback-funktionen for det første element gemmes i det nye array på den tilsvarende position
 *      - processen gentages for hvert element i arrayet
 *      - map returnerer det nye array med de resulterende værdier, der er genereret ved at anvende callback-funktionen på hver element
 * 
 */

//eksempel på hvordan man burger map til at fordoble alle elementerne i et array

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((currentValue) => currentValue * 2);

console.log(doubledNumbers) //output [2, 4, 6, 8, 10]


getName = (user) => user.name;
usernames = [];

for(let i = 0; i < users.length; i++) {
  const name = getName(users[i]);
  usernames.push(name);
}

console.log(usernames); //["Yazeed", "Sam", "Bill"]



