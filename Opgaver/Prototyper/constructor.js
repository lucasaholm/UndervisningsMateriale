/**
 * Constructor
 *  - en constructor er en speciel funktion, der opretter et nyt objekt, når den kaldes med new operation
 *  - det nye objekt returneres implicit - så return skal ikke anvendes
 *  - en constructor skal pr. konvention starte med stort.
 */

//eksempel af oprettelse af constructor funktion

function Person(navn) {
  this.navn = navn;
  this.toString = function () {
    return 'Person: ' + navn
  }
}

let person = new Person('Viggo');

console.log(person.navn); //=> viggo
console.log(person.toString()) //=> Person: Viggo

/**
 * Man definerer et objekt ved hjælp af en constructor
 *  - men man kan altid ændre på objekter og prototyper
 */

//eksempel

function Nyperson(navn) {
  this.navn = navn;
}

Nyperson.prototype.toString = function() {
  return 'Person: ' + this.navn
}
let nyPerson = new Nyperson('Viggo')

console.log(nyPerson);