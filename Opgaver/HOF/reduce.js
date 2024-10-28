/**
 * REDUCE
 *  - Array.recude() er en HOF i JS
 *   
 *  Hvad bruges den til?
 *  - bruges til at reducerer (eller akkumulere) værdierne i et array til en enkelt værdi
 *  - Tager en callback funktion og en valgfri begyndelsesværdi som argumenter
 * 
 *  //
 * ENKELT FORKLARING PÅ REDUCE
 *  - Som det første bruges begyndelsesværdien (enten den angivne initialValue eller det første element i arrayet, som akkumulator)
 *  - Callback funktionen udføres for hvert element i arrayet, og resultatet gemmes i akkumulatoren
 *  - den akkumulerede værdi og det næste element i arrayet sendes som argumenter til callback funktionen under hver iteration
 *  - processen gentages for hvert element i arrayet, indtil alle elementer er behandlet.
 *  - Resultatet af den sidste iteration (den endelige akkumulerede værdi) returneres som resultatet af Array.reduce()
 * 
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

//eksempel, der viser, hvordan du kan bruge array.reduce() til at beregne sum i array
const reduceArrNumbers = [1, 2, 3, 4, 5];

const sum = reduceArrNumbers.reduce((akk, currentValue) => akk + currentValue, 0)
console.log(sum) //=> 15

// i ovenstående eksempel, sætter vi akk til startværdien ", 0", og currentvalue er det første index i arrayet
// efter vi har lavet en iteration akk (0) + currentvalue (1) =>> 0 + 1 = 1, er akk nu 1, og currentvalue det næste index i arrayet, altså 2


//Her er kajs eksempel på hvordan man bruger reduce:

totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge/users.length)

//her er kajs eksempel på hvordan man ikke bruger reduce: 


averageAge = 0;
for(let i = 0; i < users.length; i++) {
  averageAge += users[i].age;
}
averageAge = averageAge/users.length;

console.log(averageAge)

//forskellen er at vi selv løber gennem arrayet, og kigger pr index's data og +'er oveni det vi har, istedet for at bruge den indbyggede reduce() metode.


