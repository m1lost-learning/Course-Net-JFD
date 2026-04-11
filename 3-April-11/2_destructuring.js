// Destructuring adalah fitur dalam JavaScript yang memungkinkan kita untuk mengambil nilai dari array atau properti dari objek dan menyimpannya dalam variabel dengan cara yang lebih singkat dan mudah dibaca.

const user = { name: 'Joko', age: 28 , city : 'Jakarta' };
const { name, age, city } = user;

console.log(name); // Output: Joko
console.log(age);  // Output: 28    
console.log(city); // Output: Jakarta
console.log(); 

// make alias di destructuring object
const { name: userName, age: userAge, city: userCity } = user;

console.log(userName); // Output: Joko
console.log(userAge);  // Output: 28
console.log(userCity); // Output: Jakarta
console.log(); 

// Destructuring juga dapat digunakan untuk array
const colors = ['red', 'green', 'blue'];
const [pertama, kedua, ketiga] =  colors;
console.log(pertama); // Output: red
console.log(kedua);   // Output: green
console.log(ketiga);  // Output: blue
console.log(); 


// Destructuring fungction
function greet({ name, age }) {
    console.log(`Hello, my name is ${name}, usia saya ${age} tahun`);
}

greet({name: 'Joko S', age: 21}); // Output: Hello, my name is Joko S, usia saya 21 tahun

// Destructruring default value dari object
const person = { names: 'Joko'};
const { names, hobby = 'Coding' } = person;
console.log(person); // Output: { names: 'Joko' }
console.log(names);  // Output: Joko
console.log(hobby); // Output: Coding
console.log();

// destructuring nesting
const pengguna = { nama: 'Joko', alamat: { kota: 'Jakarta', negara: 'Indonesia' } };
const { nama, alamat: { kota, negara } } = pengguna;
console.log(nama);         // Output: Joko
console.log(kota);         // Output: Jakarta
console.log(negara);       // Output: Indonesia

