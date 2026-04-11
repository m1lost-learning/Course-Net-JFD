// Destructuring adalah fitur dalam JavaScript yang memungkinkan kita untuk mengambil nilai dari array atau properti dari objek dan menyimpannya dalam variabel dengan cara yang lebih singkat dan mudah dibaca.

const user = { name: 'Joko', age: 28 , city : 'Jakarta' };
const { name, age, city } = user;

console.log(name); // Output: Joko
console.log(age);  // Output: 28    
console.log(city); // Output: Jakarta

// make alias di destructuring
const { name: userName, age: userAge, city: userCity } = user;

console.log(userName); // Output: Joko
console.log(userAge);  // Output: 28
console.log(userCity); // Output: Jakarta