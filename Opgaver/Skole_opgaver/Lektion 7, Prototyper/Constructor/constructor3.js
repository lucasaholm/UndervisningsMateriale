function Person(navn) {
  this.navn = navn;
  Person.antal++
  }
  Person.antal = 0;
  Person.prototype.toString = function () { return 'Person: ' + this.navn; }
  
  let person = new Person('Viggo');
  let person1 = new Person('JACOB')

  console.log(person.navn); // Viggo
  console.log(Person.antal); // => 1
  console.log(person.toString()); // => Person: Viggo