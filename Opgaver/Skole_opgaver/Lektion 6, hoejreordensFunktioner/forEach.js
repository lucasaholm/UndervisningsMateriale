let tal = [1, 2, 3, 4, 5];

let sum = 0

//sum-funktion som ikke er en højreordens funktion
for(let i = 0; i < tal.length; i++) {
  sum += tal[i]
}


/**
 * Højre ordens funktioner
 */

//funktion sum højreordens
tal.forEach(element => sum += element);
console.log(sum); // => 15


tal.forEach((element) => element++);
console.log(tal); // => [1, 2, 3, 4, 5]

tal.forEach((element, index, array) => array[index]++);
console.log(tal); // => [ 2, 3, 4, 5, 6]