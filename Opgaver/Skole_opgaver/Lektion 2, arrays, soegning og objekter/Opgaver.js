let arraryOfNumbers = [1, 2, 3, 12, 5, 6, 7, 8, 9, 10];
//opgave 2.1
function max(array) {
    let arrayMax = array[0];

    for (let i = 1; i < array.length; i++) {
        const tal = array[i];
        if (tal > arrayMax)
            arrayMax = tal;
    }
    return arrayMax;
}

console.log(max(arraryOfNumbers));


function contains (array, element) {
    return array.includes(element);
}
console.log(contains(arraryOfNumbers, 6));


function sum(array) {
    let sum = 0;
    for (let tal of array) {
        sum += tal;
    }
    return sum; 
}

console.log(sum(arraryOfNumbers));


//opgave 2.2
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let k = array[middle];

        if (k === target) {
            return middle;
        }
        if (k > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1; // Returneres, hvis elementet ikke findes
}

let list = [1, 2, 3, 4, 4, 6, 7, 7, 9];
console.log(binarySearch(list, 3)); // Søger efter 3 i det sorterede array


// bubbleSort.js
function bubbleSort(array) {
for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap (array, j, j + 1);
            }
        }
    }
}

function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let listBubbleTest = [7, 13, 9, 8, 33, 52, 51, 66, 25];
bubbleSort(listBubbleTest);
console.log(listBubbleTest); 


//opgave 2.3
function compare(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length > s2.length) {
        return 1;
    } else {
        return 0;
    }
}

stringCompare1 = 'ab';
stringCompare2 = 'ab';
console.log(compare(stringCompare1, stringCompare2));


function compareLength(s1, s2) {
    return s1.length - s2.length;
}

let stringToTest = 'ab';
let stringToTest2 = 'abc';

console.log(compareLength(stringToTest, stringToTest2));

function compareIgnorecase(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    return s1Lower.localeCompare(s2Lower);
}

let string1 = 'CbA';
let string2 = 'ABc';
console.log(compareIgnorecase(string1, string2));


//opgave 2.4


let map = {};
map['key1'] = 'Hello World, i am a string';
map['key2'] = 123;
map['key3'] = true;
map['key4'] = [1, 2, 3];

console.log(Object.keys(map)); // Array af nøgler
console.log(Object.values(map)); // Array af værdier
console.log(Object.entries(map)); // Array af [nøgle, værdi]-par


let tekst = "Dette er en tekst med nogle ord. Nogle ord forekommer mere end én gang, andre ord kun én gang.";

function taelOrd(str) {
    // Fjerner tegnsætning og konverterer til små bogstaver for konsistens
    let ordListe = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(/\s+/);
    
    let ordMap = {};

    ordListe.forEach(function(ord) {
        
        if (!ordMap[ord]) {
            ordMap[ord] = 1;
        } else {
            ordMap[ord]++;
        }
    });

    return ordMap;
}

let ordTael = taelOrd(tekst);
console.log(ordTael);


//opgave 2.5
let person = {navn: 'Viggo', email: 'Viggomail@live.dk', mobilnummer: 23242526}
let person1 = {navn: 'Ida', email: 'Idamail@live.dk', mobilnummer: 23222226}
let person2 = {navn: 'Ole', email: 'Olemail@live.dk', mobilnummer: 23243326}

let personer = [person, person1, person2];

console.log(personer);

//fjerner den sidste person i arrayet
personer.pop();
console.log(personer);

//tilføjer personen igen
personer.push(person2);
console.log(personer);

//fjerner den første person i arrayet
personer.shift();
console.log(personer);

//tilføjer personen igen
personer.unshift(person);
console.log(personer);

//fjerner personen med index 1
personer.splice(1, 1);
console.log(personer);

//tilføjer personen igen
personer.splice(1, 0, person1);

delete personer[1];
console.log(personer);

personer[1] = person1;
console.log(personer);

//opgave 2.6
let stringtest1 = '{Hello (World)]}';
let stringtest2 = '{Hello (World)}';

function checkBrackets(str) {
    let stack = [];
    let open = ['{', '[', '('];
    let close = ['}', ']', ')'];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (open.includes(char)) {
            stack.push(char);
        } else if (close.includes(char)) {
            let top = stack.pop();
            if (open.indexOf(top) !== close.indexOf(char)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(checkBrackets(stringtest1));
console.log(checkBrackets(stringtest2));

//opgave 2.7
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.contains = function(element) {
    return this.includes(element);
};

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};  

// Eksempel på brug af de nye metoder
let myArray = [1, 2, 3, 4, 5];

console.log("Max: ", myArray.max());
console.log("Contains 3: ", myArray.contains(3));
console.log("Sum: ", myArray.sum());