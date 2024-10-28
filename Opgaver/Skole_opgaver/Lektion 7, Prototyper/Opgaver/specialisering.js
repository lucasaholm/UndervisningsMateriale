

class Person {
  constructor(navn) { this.navn = navn; }
  toString() { return this.navn; }
  Equals(p) {
     return p instanceof Person && p.navn === this.navn
    }
    
    static compare(p1,p2) {
      return p1.navn.localeCompare(p2.navn)
    }

    //compare længden af strenge
    static compareLength(p1,p2) {
      if(p1.navn.length < p2.navn.length) return -1
      if(p1.navn.length > p2.navn.length) return 1
      else {
        return 0
      }
    }
  }

class Kat {
  constructor(navn) { this.navn = navn; }
  toString() { return 'Kat: ' + this.navn; };
}

class StringStack {
  constructor(){
    this.stack = []
  }

  push(add) {
    this.stack.push(add);
  }

  pop(){
    return this.stack.pop();
  }
}

class Gruppe {
  constructor(navn) {this.navn = navn, this.personer = []}
  toString() { return 'Gruppe: ' + this.navn}
  
  tilføjPerson(p) {
    this.personer.push(p)
    p.gruppe = this;
  }

  fjernPerson(p) {
    this.personer.pop(p)
    p.gruppe = null;  
  }
}

  let arr = [
    new Person("ib"),
    new Person("Henrik"), 
    new Person("Viggo"),
    new Person("Anders"),
    new Person("Sebastian")
  ]

  class Studerende extends Person {
  constructor(navn, id) {
  super(navn);
  this.id = id;
  }
  
   Equals(s) {
    return s instanceof Studerende && s.navn === this.navn && s.id === this.id
   }
   toString() { return super.toString() + ": " + this.id; };
  }


  let person = new Person("Viggo");
  let kat = new Kat("Smittens")

  console.log(arr.sort(Person.compareLength))

  arr.push(kat)

/*
  console.log(arr.sort(Person.compareLength))
  console.log(arr)
*/
  let stack = new StringStack()
  stack.push(":D")
  stack.push(":O")
  stack.push(":(")

  console.log(stack)
  
  stack.pop()

  console.log(stack)


  let gruppe = new Gruppe("The gamers")
  gruppe.tilføjPerson(person)
  console.log(gruppe)

  let gruppe2 = new Gruppe("The gamers2")

  console.log(gruppe2)


  










/*


  let person2 = new Person("Henrik");
  console.log(person.Equals(person)); //=> true
  let studerende = new Studerende("Ida", 123);
  console.log(studerende.Equals(person)) //=> false
  console.log(studerende.Equals(studerende)) //=> true
  console.log(studerende.Equals(person))  //=> false

  */