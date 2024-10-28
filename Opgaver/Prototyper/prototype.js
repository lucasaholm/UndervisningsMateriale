/**
 * PROTOTYPER
 *  - JS har ingen klasser eller interfaces
 *  - Når man nedarver i JS bruger man prototyper.
 *  - Alle objekter har en prototype, og man kan lave en prototype af en prototype og på den måde få prototype-hierarki.
 *  - Et objekt arver properties og metoder fra sine prototyper.
 *  - Hvis roden har en meotde, og man laver en ny metode med samme navn i et objekt der nedarver fra roden, så overskriver man den metode med den nye.
 *  - Man bruger altid de metoder der er lavest i hierarkiet fra det objekt man kalder fra.
 */

//Eksempel på brug at prototype med class

class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength)
  }

  get area() {
      return this.height + this.width
  }

  set sideLength(newLength) {
      this.height = newLength
      this.width = newLength
  }
}

//en instans af en klasse, altså et objekt, har ikke en prototype.
//derimod har dens constructor en prototype. Denne prototype sørger for at give alle de metoder og værdier som den selv holder, videre til constructoren
// Derfor vil objekter lavet ud fra denne klasse, opnå metoderne som ligger på constructoren pga. prototypen, men ikke få prototypen.

/**
 * Forestil dig en klasse i programmering, som en opskrift
 *  - opskriften definerer, hvordan man laver et objekt
 *  - (som er en instans af klassen)
 * 
 * Med andre ord: 
 *  - Et objekt er som et færdigbagt brød
 *  - lavet ud fra opskriften (klassen)
 * 
 * Et andet eksempel
 */

function Bil(model) { //en klasse (bil), med en constructor (bil(model))
  this.model = model;
}

Bil.prototype.kør = function() { //vi tilføjer en metode (kør()), til bilens prototype
  console.log(this.model + " kører.") 
};

let minBil = new Bil("Volvo"); //minBil er objektet, en instans af klasen "Bil"
minBil.kør(); //=> "Volvo kører."

//minBil har ikke sin egen prototype, men har adgang til metoder og egenskaber defineret i Bil's prototype gennem constructoren
//Så når vi kalder minBil.kør(), bruder det metoden 'kør()' fra 'Bil's prototype.


/**
 * Kort sagt
 *  Bil (constructoren), har en prototype, som indeholder metoden kør()
 *  minBil(objektet/instansen) arver "kør()" metoden gennem 'Bil's prototype
 */