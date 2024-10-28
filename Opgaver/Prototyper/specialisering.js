/**
 * Specialisering
 *  - Når man burger en specialisering så svarer det til at man nedarver.
 */

//eks. 

class Person{
  constructor(navn) {
    this.navn = navn;
  }

  toString() {return 'Person: ' + this.navn}
  Equals(object) {
      return object.constructor === Person;
    
  }
} 

class Studerende extends Person{
  constructor(navn, id){
      super(navn);
      this.id = id;
  }
  toString() {
    return super.toString() + ": " + this.id;
  }
}

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123)
console.log(person)
console.log(studerende)

console.log(Person.prototype.Equals(studerende)); //vil returnerer false, da studerende ikke er oprettet af constructoren fra Person klassen
console.log(Person.prototype.Equals(person)); //vil returnerer true, da person er oprettet med constructoren fra Person klassen.


