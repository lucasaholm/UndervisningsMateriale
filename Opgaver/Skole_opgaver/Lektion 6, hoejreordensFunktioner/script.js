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

  /**
   * En funktion til at finde den gennemsnitlige alder i arrayet
   */

averageAge = 0;
for (let i = 0; i < users.length; i++) {
averageAge += users[i].age;
}
averageAge = averageAge/users.length;
console.log(averageAge);
// 25


/**
 * Her er en anden måde at finde den gennemsnitlige alder i arrayet
 * Her bruger vi en akkumulator (users.reduce(total, user))
 */

totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge/users.length);
// 75

