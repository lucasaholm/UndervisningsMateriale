function sammenlignSomTal(a, b) {
  return Number(a) - Number(b);
}

function findHoejesteElement(arr, sammenligningsFunktion) {
  return arr.reduce((højeste, nuværende) => {
    return sammenligningsFunktion(højeste, nuværende) > 0 ? højeste : nuværende;
  });
}

// Test array med både tal og strenge
let testArray = [3, '5', 2, '8', 1];

let hoejesteElement = findHoejesteElement(testArray, sammenlignSomTal);
console.log('Højeste element:', hoejesteElement); // Forventet output: '8'