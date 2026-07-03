const users = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

// Keep users whose age is 18 or above and return their names
const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(adultNames);