// plain obj and class/inheritance
const car0 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
  };
console.log(car0);

const car = new Object();
car.brand = "Nissan";
car.model = "altima";
car.year = 2023;
console.log(car);

function createCar(brand, model, year) {
    return { brand, model, year };
  }
const car1 = createCar("GM", "trunk", 2024);
console.log(car1);

// access properties
console.log(car1.year);
console.log(car1["year"]);

// add properites
car1.color = " red ";

console.log("afer adding color: ", car1);
delete car1.color;

console.log("afer deleting color: ", car1);


class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`${this.brand} ${this.model} is starting.`);
    }
  
    stop() {
      console.log(`${this.brand} ${this.model} is stopping.`);
    }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.start(); // Output: "Toyota Camry is starting."
myCar.stop();  // Output: "Toyota Camry is stopping."

// inheritance
class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year); // Call the parent constructor
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.brand} ${this.model} is charging with ${this.batteryCapacity} kWh.`);
  }
}

const myEV = new ElectricCar("Tesla", "Model 3", 2023, 75);
myEV.start();   // Output: "Tesla Model 3 is starting."
myEV.charge();  // Output: "Tesla Model 3 is charging with 75 kWh."

// object literial
const person = {
    name: "Alice",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output: "Hello, my name is Alice."