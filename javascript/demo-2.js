

let score = 99.5;               // Number
let greeting = "Hello, World!"; // String
let isLoggedIn = true;          // Boolean
let user = null;                // Null
let city;                       // Undefined
let person = { name: "Alice" }; // Object
let colors = ["red", "blue"];   // Array
console.log( "colors is ", colors);
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    default:
        console.log("Midweek days.");
}
function calculateArea(length, width) {
    return length * width;
}
console.log("Area:", calculateArea(5, 3));
// home work
//f(n) = n * (n-1) * (n-2).. .1

function fib(n) {

    if ( n == 0) {
        return 1;
    }
    if ( n == 1) {
        return 1;
    }

    return fib(n-1) + fib(n-2);
}

console.log("fib 5 is:", fib(5));

function factorial(n) {

    if ( n == 0) {
        return 1;
    }
    if ( n == 1) {
        return 1;
    }

    return factorial(n-1) * n;
}

console.log("factorial 5 is:", factorial(5));

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

/* arrow function */
const greet = (name) => {
    const message = "Hello, " + name + "!";
    return message;
};

console.log( greet("comrite") );

function Person0() {
    this.age = 0;

    // Traditional function increases age
    setInterval(function() {
        this.age++;
        console.log("form person0: ", this.age);
    }, 1000);
}

// Fix using arrow function:
function Person() {
    this.age = 0;

    // Arrow function keeps the `this` context of `Person`
    setInterval(() => {
        this.age++;
        console.log("form person: ", this.age);
    }, 1000);
}
console.log("check person 0");

/* not existing */
/*
p01 = new Person0();
p02 = new Person0();
*/

console.log("check person 1");
/*
p1 = new Person();
p2 = new Person();
*/



function outer() {
    const outerThis = this;

    const inner = {
        method: function () {
            const arrowFunc = () => {
                console.log(this); // What is `this` here?
            };
            arrowFunc();
        }
    };

    inner.method();
}
outer();

function Person() {
    this.age = 90;
}

const p1 = Person(); // Forgot `new`
console.log(p1); // `undefined` because no object is returned
console.log(globalThis.age); // 0 (pollutes the global scope)