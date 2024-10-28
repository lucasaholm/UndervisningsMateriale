/**
 * Class notation 
 *  - bare en ny måde at lave en constructor funktion på
 */

//Eksempel

class Person {
    constructor(navn) {
      this.navn = navn;
    };

    toString() {
      return 'Person: ' + this.navn;
    };
} 

//metoder og properties på constructor kan angives med static, hvis man skal kunne tilgå dem på klasse niveau.

//f.eks.

class Person2 {
  constructor(navn) {
    this.navn = navn;
    Person2.antal++;
  };
  static antal = 0;

  toString() {
    return 'Person: ' + this.navn;
  };
} 


//hvis man vil lave properties private, så skal de starte med "#"
//eks. 

class Person3 {
  constructor(navn) {
    this.navn = navn;
    Person2.antal++;
  };
  #navn;
  static #antal = 0;

  toString() {
    return 'Person: ' + this.navn;
  };

  getNavn() {
    return this.#navn;
  }
  
  static getAntal() {
    return Person3.#antal; 
  }
} 



