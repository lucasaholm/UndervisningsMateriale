/**
 * HOF der returnerer en funktion
 *  - lad os se et eksempel
 */

// en højere ordens funktion, der returnerer en funktion.

function multiplier(factor) {
  //nedenfor er den indre funktion som returneres
  return function(number) {
    return number * factor
  }
} 

//bruger vi vores HOF til at oprette en ny funktion

const double = multiplier(2);

//brug af den returnerede funktion
console.log(double(5))

//Her laver vi altså først en multiplier (altså en * som er tallet vores nummer i den indre funktion skal ganges med)
//herefter laver vi en double, som er function(number) <-- vores double
// i vores tilfælde er det en multiplier på 2, og et tal på 5 
// 2 * 5 = 10;

