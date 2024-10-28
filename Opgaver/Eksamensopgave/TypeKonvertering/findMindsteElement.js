// En funktion, der sammenligner to værdier med typekonvertering
function compareWithConversion(a, b) {
  return Number(a) < Number(b);
}

// En højere ordens funktion, der finder det mindste element
function findSmallestElement(arr, compareFunc) {
  return arr.reduce((min, current) => compareFunc(min, current) ? min : current);
}

// Test array med blandede datatyper
let mixedArray = [3, '1', 2, '4', '0'];

// Finder det mindste element
let smallest = findSmallestElement(mixedArray, compareWithConversion);

console.log("Mindste element:", smallest); // Output vil være '0', da '0' konverteres til 0, som er mindre end de andre tal