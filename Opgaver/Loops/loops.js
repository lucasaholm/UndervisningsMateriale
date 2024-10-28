function forLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
}

function whileLoop() {
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }
}

function doLoop() {
  let i = 0;
  do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  } while (i < 5);
}

const person = { fName: 'John', lName: 'Doe', age: 30 };
function forIn() {
  for (let key in person) {
    console.log(key + ': ' + person[key]);
    // Output: fName: John, lName: Doe, age: 30
  }
}

const numbers = [1, 2, 3, 4, 5];
function forOf() {
  for (let number of numbers) {
    console.log(number); // Output: 1, 2, 3, 4, 5
  }
}

function foreach() {
  numbers.forEach(number => {
    console.log(number); // Output: 1, 2, 3, 4, 5
  });
}

