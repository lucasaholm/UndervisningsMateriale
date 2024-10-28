//Implicit Typekonvertering
let num1 = 5;
let str1 = "3";
let result = num1 + str1; // num konverteres til en streng, resultat bliver "53"
console.log(result); // Output: "53"


//Eksplicit Typekonvertering
let str2 = "123";
let num2 = Number(str2); // Konverterer str fra en streng til et tal
console.log(num2); // Output: 123


//Fra streng til tal:
let str3 = "456";
let num3 = parseInt(str3, 10); // Konverterer str til et heltal
let numFloat = parseFloat(str3); // Konverterer str til et flydende tal


//Fra tal til streng
let num = 123;
let str4 = num.toString(); // Konverterer num til en streng
let str5 = String(num); // En anden måde at konvertere num til en streng


//Fra andre typer til boolean:
let truthy = Boolean(1); // Konverterer 1 til true
let falsy = Boolean(0); // Konverterer 0 til false


//sammenligningsfunktion med typekonvertering
//sammenligner to værdier efter at have konverteret dem til tal
//lige store = 0
//a større end b = 1
//b større end a = -1
function compareWithConversion(a, b) {
  let numA = Number(a);
  let numB = Number(b);

  if (numA < numB) return -1;
  if (numA > numB) return 1;
  return 0;
}

console.log(compareWithConversion(2, 3))



//funktion til at finde det mindste element
//bruger funktionen ovenfor, til at finde det mindste element i et array
function findSmallestElement(arr) {
  return arr.reduce((min, current) => {
    return compareWithConversion(min, current) === 1 ? current : min;
  });
}


//Eksempel på brugen af dem
//lad os bruge disse funktioner til at sammenligne forskellige typer af værdier
let values = [1, "3", "2", 4, "0.5", "10", 8];

let smallest = findSmallestElement(values);
console.log("Det mindste element er:", smallest);