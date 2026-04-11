// membuat class
class Vehicle {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

    startEngine() {
        console.log(`Menyalakan Mesin : ${this.name} `);
    }

    stopEngine() {        
        console.log(`Mematikan Mesin : ${this.name} `);
    }

}

let vehicle = new Vehicle("CIVIC", "Sedan", 20000);
console.log(vehicle); // Output: CIVIC
console.log(vehicle.name); // Output: CIVIC
console.log(vehicle.type); // Output: Sedan
console.log(vehicle.price); // Output: 20000
vehicle.startEngine(); // Output: CIVIC Menyalakan Mesin.
vehicle.stopEngine(); // Output: CIVIC Mematikan Mesin.

//konsep OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// Encapsulation
class Student {
    #nama; // private field
    gpa; // Not private field
    
    constructor(name, gpa) {
        this.#nama = name;
        this.gpa = gpa;
    }

    getName() {
        return this.#nama;
    }
    getGpa() {
        return this.gpa;
    }

    setName(name) {
        this.#nama = name;
    }
    setGpa(gpa) {
        this.gpa = gpa;
    }
}

let student = new Student("Yuni", 3.9);
console.log(student); // Output: Student { _name: 'Yuni', _gpa: 3.9 }
console.log(student.getName()); // Output: Yuni
console.log(student.getGpa()); // Output: 3.9

student.setName("Yuni Setiawan");
student.setGpa(3.8);
console.log(student.getName()); // Output: Yuni Setiawan
console.log(student.getGpa()); // Output: 3.8

//Inheritance

class Person {
    constructor(id, name, age, job, city) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.job = job;
        this.city = city;
    }
}

class Programmer extends Person {
    constructor(id, name, age, job, city) {
        super(id, name, age, job, city);
    }
}

class Designer extends Person {
    constructor(id, name, age, job, city) {
        super(id, name, age, job, city);
    }
}

const programmer = new Programmer(1, "Joko", 28, "Programmer", "Jakarta");
const designer = new Designer(2, "Yuni", 17, "Designer", "Sukabumi");

console.log(programmer); // Output: Programmer { id: 1, name: 'Joko', age: 28, job: 'Programmer', city: 'Jakarta' }
console.log(designer); // Output: Designer { id: 2, name: 'Yuni', age: 17, job: 'Designer', city: 'Sukabumi' }  

