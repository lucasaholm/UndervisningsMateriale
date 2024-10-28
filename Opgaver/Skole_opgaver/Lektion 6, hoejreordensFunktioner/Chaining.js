// chaining.js
let personer = [{
  navn: 'Åge',
   alder: 32
  }, 
  {
  navn: 'Ida',
   alder: 23
  }];

//Summen af alder ved brug af Map og reduce
console.log(personer.map(p => p.alder).reduce((a, e) => a + e)); // => 55

//sortering af navne i stigende rækkefølge
console.log(personer.sort((p1, p2) => p1.alder-p2.alder).map(p => p.navn)); // => [ 'Ida', 'Åge' ]

//find alderen af en person ved brug af Find() og navn
console.log(personer.find(p => p.navn === 'Ida').alder); // => 23


/**
 * Omskrivning af funktionerne så de ikke er HOF længere
 */

//summen af alder
let totalAlder = 0;

for (let i = 0; i < personer.length; i++) {
    totalAlder += personer[i].alder;
}

console.log(totalAlder); // => 55




//sortering af navne i stigende rækkefølge (her brugt bubblesort)
for (let i = 0; i < personer.length; i++) {
  for (let j = 0; j < personer.length - i - 1; j++) {
      if (personer[j].alder > personer[j + 1].alder) {
          let temp = personer[j];
          personer[j] = personer[j + 1];
          personer[j + 1] = temp;
      }
  }
}

let navneEfterAlder = [];
for (let i = 0; i < personer.length; i++) {
  navneEfterAlder.push(personer[i].navn);
}

console.log(navneEfterAlder); // => [ 'Ida', 'Åge' ]


//find alder ved brug af navn
let alderAfIda = null;
for (let i = 0; i < personer.length; i++) {
    if (personer[i].navn === 'Ida') {
        alderAfIda = personer[i].alder;
        break;
    }
}

console.log(alderAfIda); // => 23




totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge/users.length);