/**
 * Find
 *  - Denne funktion løber igennem et array og returnerer det første element som møder betingelsen.
 *    - Når det første element er fundet, stopper find() søgningen og returnerer derefter det fundne element.
 *    - hvis elementet ikke kan findes, returneres undefined
 */

//eksempel på find

const ord = ["æble", "Banan", "appelsin", "jordbær", "melon"]

const langtOrd = ord.find(function(element){
  return element.length > 5;
}) 

console.log(langtOrd) // => appelsin, da det er det første element som er længere end 5

// som arrow funktion 

const langtOrdArrowFunktion = ord.find((element) => {
  return element.length > 5;
})

console.log(langtOrdArrowFunktion)