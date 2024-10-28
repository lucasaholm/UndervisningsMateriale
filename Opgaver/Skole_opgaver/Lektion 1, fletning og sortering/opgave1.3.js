// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let list2 = ['Samsung', 'Iphone', 'Motorola', 'Huawei', 'Sony', 'LG', 'Nokia', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Realme', 'Asus', 'Lenovo', 'ZTE', 'Meizu', 'Alcatel', 'BlackBerry', 'Microsoft', 'Vodafone', 'Tecno', 'Micromax', 'Gionee', 'Lava', 'Maxwest', 'Plum',]

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

// opgave1.3.js
let target = 13;
let position = list.length - 1;

let left = 0;
let right = list.length - 1;
while (left <= right && position === -1) {
    let middle = parseInt((left + right) / 2);
    let k = list[middle];
    if (k == target) {
        position = middle;
    }
    if (k > target)
        right = middle - 1;
    else
        left = middle + 1;
}
console.log('target: ' + target);
console.log('position: ' + position);


// opgave1.4.js
let list3 = [1, 12,13, 14, 15, 16, 17, 18, 19];
let list4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function flet(l1, l2) {
let result = [];
while(l1.length && l2.length) {
    let e1 = l1[0];
    let e2 = l2[0];

    if(e1 <= e2) {
        result.push(l1.shift());
    }
    else {
        result.push(l2.shift());
    }
}

while(l1.length > 0) {
    result.push(l1.shift());
}

while(l2.length > 0) {
    result.push(l2.shift());
}
console.log(result);
return result;
}

 let samletliste = flet(list3, list4)
console.log(samletliste);





// opgave1.5.js udskriv alle primtal og heltal op til et selvbestemt tal

function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}


function printPrimes(limit) {
    for(let number = 2; number <= limit; number++) {
        if(isPrime(number)) {
            console.log(number)
        }
    }
}

printPrimes(30)