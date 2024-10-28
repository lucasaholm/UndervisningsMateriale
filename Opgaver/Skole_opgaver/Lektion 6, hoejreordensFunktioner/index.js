/**
 * Et eksempel hvor man har et array med data, 
 * og skriver dem ud i et nyt array
 * inde i funktionen
 */ 

users = [
  {
  name: 'Yazeed',
  age: 25
  },
  {
  name: 'Sam',
  age: 30
  },
  {
  name: 'Bill',
  age: 20
  }
  ];

getName = (user) => user.name;
usernames = [];
for (let i = 0; i < users.length; i++) {
const name = getName(users[i]);
usernames.push(name);
}
console.log(usernames);
// ["Yazeed", "Sam", "Bill"]



/**
 * Ved brugen af map 
 * Kan vi gøre dette
 */

usernames = users.map(getName);
console.log(usernames);
// ["Yazeed", "Sam", "Bill"]

/**
 * Hvis vi vil filter et navn, i det understående eksempel
 * er det navne som starter med B
 */

startsWithB = (string) => string.toLowerCase().startsWith('b');

namesStartingWithB = [];

for (let i = 0; i < users.length; i++) {
if (startsWithB(users[i].name)) {
namesStartingWithB.push(users[i]);
}
}
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

/**
 * En anden måde at løse filtrering på
 */

namesStartingWithB = users.filter((user) => startsWithB(user.name));
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]