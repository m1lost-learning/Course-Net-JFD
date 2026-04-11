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
