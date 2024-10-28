/**
 * forEach
 *  - en HOF der udfører en handling på hvert element
 *    - nedenfor er der en funktion som ikke returnerer noget, og den ændrerer ikke det originale array
 */

const frugter = ['æble', 'banan', 'appelsin'];

frugter.forEach(function(frugt, index){
  console.log(`Element ${index}: ${frugt}`)
})

console.log()

//nedenfor er den samme funktion skrevet, men som en arrow funktion
frugter.forEach((frugt, index) => {
  console.log(`Element ${index}: ${frugt}`)
})

let tal = [1, 2, 3, 4, 5];

let sum = 0;

tal.forEach(element => sum += element);
console.log(sum);

tal.forEach((element) => element++);
console.log(tal)

tal.forEach((element, index, array) => array[index]++);
console.log(tal);
